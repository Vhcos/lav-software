import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LAV Systems — El agente empresarial para las pymes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0c1f35",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(8,145,178,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Pill tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "44px",
            padding: "10px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#0891b2",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "18px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Plataforma empresarial agéntica · Para pymes chilenas
          </span>
        </div>

        {/* Heading */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "800",
            color: "white",
            lineHeight: 1.1,
            marginBottom: "28px",
            maxWidth: "880px",
          }}
        >
          El{" "}
          <span style={{ color: "#0891b2" }}>agente empresarial</span>
          {" "}para las pymes
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "64px",
            maxWidth: "680px",
            lineHeight: 1.5,
          }}
        >
          Conecta contabilidad, tesorería, remuneraciones, operaciones y datos en una sola plataforma, coordinada por agentes especializados.
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              padding: "12px 28px",
              borderRadius: "10px",
              background: "#0891b2",
              color: "white",
              fontSize: "22px",
              fontWeight: "700",
              letterSpacing: "-0.01em",
            }}
          >
            LAV Systems
          </div>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "20px" }}>
            lav.software
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
