export default function PageIntro({ title, children }) {
  return (
    <div className="page-intro">
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </div>
  );
}
