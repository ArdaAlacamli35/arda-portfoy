const decos = [
  { t: "{ }", left: "4%", top: "30%" },
  { t: "</>", left: "90%", top: "44%" },
  { t: "01", left: "7%", top: "70%" },
  { t: ";", left: "86%", top: "76%" },
  { t: "def", left: "46%", top: "88%" },
];

export default function Background() {
  return (
    <>
      <div className="bg" aria-hidden="true" />
      <div className="snow" aria-hidden="true" />
      {decos.map((d) => (
        <span key={d.t} className="deco" style={{ left: d.left, top: d.top }}>
          {d.t}
        </span>
      ))}
    </>
  );
}
