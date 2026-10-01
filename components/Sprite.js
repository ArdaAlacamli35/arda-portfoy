// Piksel ikonlar: orijinal sitedeki JS ile üretilen SVG'lerin React karşılığı.
const C = {
  c: "#8CC4FF",
  y: "#FFE29A",
  w: "#F4F9FF",
  k: "#0B1B54",
  p: "#2A6B73",
  b: "#6B4A3E",
  l: "#0B1B54",
};

const S = {
  snow: ["...c...", ".c.c.c.", "..ccc..", "ccccccc", "..ccc..", ".c.c.c.", "...c..."],
  star: ["...y...", "...y...", "yyyyyyy", ".yyyyy.", "..yyy..", ".yy.yy.", ".y...y."],
  chart: ["......cc", "......cc", "...cc.cc", "...cc.cc", "cc.cc.cc", "cc.cc.cc", "cccccccc"],
  bolt: ["....yyy.", "...yyy..", "..yyy...", ".yyyyyy.", "...yyy..", "..yyy...", ".yy.....", "y......."],
  mail: ["yyyyyyyy", "ykyyyyky", "yykyykyy", "yyykkyyy", "yyyyyyyy", "yyyyyyyy"],
  ph: ["wwwww", "wcccw", "wcccw", "wcccw", "wcccw", "wwwww"],
  bk: ["ccccccc.", "cwwwwwc.", "cwcccwc.", "cwwwwwc.", "cwcccwc.", "cwwwwwc.", "ccccccc."],
  tree: [
    "....w....",
    "...ppp...",
    "..wpppp..",
    "...ppp...",
    "..pppwp..",
    ".wpppppp.",
    "..pppwp..",
    ".ppppppp.",
    "wpppppppw",
    "....b....",
    "....b....",
  ],
  lamp: ["lllll", "l...y", "l....", "l....", "l....", "l....", "l....", "l....", "l....", "l....", "l....", "l...."],
};

export default function Sprite({ name, w = 64 }) {
  const rows = S[name];
  const W = Math.max(...rows.map((r) => r.length));
  const H = rows.length;
  const rects = [];
  rows.forEach((r, y) => {
    for (let x = 0; x < r.length; x++) {
      const ch = r[x];
      if (ch !== "." && C[ch]) {
        rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={C[ch]} />);
      }
    }
  });
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width={w}
      height={(w * H) / W}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {rects}
    </svg>
  );
}
