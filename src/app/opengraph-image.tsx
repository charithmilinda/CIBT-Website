import { ImageResponse } from "next/og";

export const alt = "Impact Education - Pathway to New Zealand Academic Excellence";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A192F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-1px",
              color: "#FFFFFF",
            }}
          >
            IMPACT EDUCATION
          </div>
          <div
            style={{
              marginLeft: "20px",
              padding: "6px 16px",
              background: "rgba(197, 160, 89, 0.2)",
              border: "1px solid #C5A059",
              borderRadius: "20px",
              color: "#C5A059",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            New Zealand Pathways
          </div>
        </div>

        {/* Main Title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 16,
              color: "#FFFFFF",
              maxWidth: "950px",
            }}
          >
            Your Direct Pathway to Top-Ranked New Zealand Universities
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#94A3B8",
              maxWidth: "800px",
            }}
          >
            Save up to 60% on degree costs by starting your foundation in Sri Lanka.
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
          }}
        >
          <div style={{ fontSize: 18, color: "#C5A059", fontWeight: 600 }}>
            www.your-domain.example
          </div>
          <div style={{ fontSize: 18, color: "#94A3B8" }}>
            O/L & A/L Direct Transfer Intake Open
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}