import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, service, message }: BookingRequest = await req.json();

    if (!firstName || !email) {
      throw new Error("Missing required fields");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("contact_inquiries").insert({
      first_name: firstName,
      last_name: lastName || "",
      email,
      service: service || null,
      message: message || null,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save inquiry");
    }

    const serviceLabels: Record<string, string> = {
      "private-entertainment": "Private Entertainment",
      "promotional-services": "Promotional Services",
      "brand-ambassador": "Brand Ambassador",
      "event-staffing": "Event Staffing",
      "cocktail-service": "Cocktail Service",
      booking: "Booking Inquiry",
      other: "Other",
    };

    const emailResponse = await resend.emails.send({
      from: "VIP Aspen <noreply@vipaspen.com>",
      to: ["info@vipaspen.com"],
      subject: `New Booking Inquiry: ${serviceLabels[service] || service || "General"} from ${firstName} ${lastName}`.trim(),
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceLabels[service] || service || "Not specified"}</p>
        <hr />
        <p><strong>Details:</strong></p>
        <pre style="font-family: sans-serif; white-space: pre-wrap;">${message || "No details provided"}</pre>
      `,
      reply_to: email,
    });

    console.log("Email sent:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
