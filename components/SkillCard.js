export default function SkillCard({ label, title, color, level, skills }) {
  return (
    <div className="card">
      <span className="lbl" style={{ "--c": color }}>{label}</span>
      <h3>{title}</h3>
      {skills.map((s) => (
        <div key={s} className="skill" style={{ "--c": color, "--w": level }}>
          <span>{s}</span>
          <div className="meter"><b /></div>
        </div>
      ))}
    </div>
  );
}
