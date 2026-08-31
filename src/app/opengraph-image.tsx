import { ImageResponse } from "next/og";
import { brand } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1000px 500px at 20% 0%, #2b1b52 0%, #0f0f14 55%)",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#7c3aed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            O
          </div>
          <div style={{ color: "white", fontSize: 44, fontWeight: 800 }}>
            {brand.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "white",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Run the whole field day on one app
          </div>
          <div style={{ color: "#a0a0b0", fontSize: 30, maxWidth: 860 }}>
            CRM · Workforce · Field Sales — one platform, web dashboard + mobile
            app.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["CRM", "Workforce", "Sales & Distribution"].map((t) => (
            <div
              key={t}
              style={{
                border: "1px solid #3a3a45",
                color: "#d0d0da",
                fontSize: 26,
                padding: "10px 22px",
                borderRadius: 999,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
