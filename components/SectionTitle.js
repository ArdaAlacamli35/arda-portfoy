export default function SectionTitle({ children }) {
  return (
    <div className="title">
      <h2>{children}</h2>
      <div className="rule">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
