import Sprite from "./Sprite";

export default function Footer() {
  return (
    <footer>
      <div className="scene" aria-hidden="true">
        <span className="tree" style={{ left: "9%" }}><Sprite name="tree" w={88} /></span>
        <span className="tree t2" style={{ left: "20%" }}><Sprite name="tree" w={64} /></span>
        <span className="lamp"><Sprite name="lamp" w={40} /></span>
        <span className="tree" style={{ right: "10%" }}><Sprite name="tree" w={88} /></span>
        <span className="tree t2" style={{ right: "22%" }}><Sprite name="tree" w={64} /></span>
        <div className="ground" />
      </div>
      <div className="copy">
        <div className="wrap">© 2026 Arda Alaçamlı</div>
      </div>
    </footer>
  );
}
