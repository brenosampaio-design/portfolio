import { ImageResponse } from "next/og";

// Social share card (LinkedIn / WhatsApp / X). Same restraint as the site:
// cold paper, charcoal ink, one slate accent in Cormorant italic. 1200×630.
export const alt = "Breno Sampayo — Product designer with a technical edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a TrueType subset from Google Fonts (the &text= subset is served as
// truetype, which Satori can rasterise — woff2 cannot be used here).
async function loadFont(family, text) {
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!src) throw new Error(`font parse failed: ${family}`);
  const res = await fetch(src[1]);
  if (res.status !== 200) throw new Error(`font fetch failed: ${family}`);
  return res.arrayBuffer();
}

export default async function Image() {
  const sans = "Product designer with a edge. BRENO SAMPAYO brenosampaio.com · Valencia, Spain";

  let fonts;
  try {
    const [dm400, dm500, serif] = await Promise.all([
      loadFont("DM+Sans:wght@400", sans),
      loadFont("DM+Sans:wght@500", sans),
      loadFont("Cormorant+Garamond:ital,wght@1,500", "technical"),
    ]);
    fonts = [
      { name: "DM Sans", data: dm400, weight: 400, style: "normal" },
      { name: "DM Sans", data: dm500, weight: 500, style: "normal" },
      { name: "Cormorant", data: serif, weight: 500, style: "italic" },
    ];
  } catch {
    fonts = undefined; // degrade to Satori's default font rather than fail the build
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAFAFA",
          padding: "84px",
          fontFamily: "DM Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 28, height: 2, backgroundColor: "#3C4A63", marginRight: 18 }} />
          <div style={{ display: "flex", fontSize: 24, fontWeight: 500, letterSpacing: 8, color: "#3C4A63" }}>
            BRENO SAMPAYO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", color: "#1C1A18", letterSpacing: -2 }}>
          <div style={{ display: "flex", fontSize: 78, lineHeight: 1.04 }}>Product designer with a</div>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 78, lineHeight: 1.04 }}>
            <span style={{ fontFamily: "Cormorant", fontStyle: "italic", fontWeight: 500, color: "#3C4A63" }}>
              technical
            </span>
            <span style={{ marginLeft: 22 }}>edge.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, color: "#857F79" }}>
          <div style={{ display: "flex" }}>brenosampaio.com</div>
          <div style={{ display: "flex" }}>Valencia, Spain</div>
        </div>
      </div>
    ),
    { ...size, ...(fonts ? { fonts } : {}) }
  );
}
