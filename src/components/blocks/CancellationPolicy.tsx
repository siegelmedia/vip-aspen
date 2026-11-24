interface CancellationPolicyProps {
  policies: string[];
}

/** The cancellation terms, stated in full on the page. */
const CancellationPolicy = ({ policies }: CancellationPolicyProps) => {
  return (
    <div className="policy">
      <h2>Cancellation Policy</h2>
      <ul>
        {policies.map((policy) => (
          <li key={policy}>{policy}</li>
        ))}
      </ul>
    </div>
  );
};

export default CancellationPolicy;
