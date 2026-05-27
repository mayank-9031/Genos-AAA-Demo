import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Agile Ageing Alliance — Supporting the implementation of ISO 25553";
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
          backgroundColor: "#F4EFE6",
          padding: "84px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#5C6E57",
          }}
        >
          Agile Ageing Alliance
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 66,
            lineHeight: 1.15,
            color: "#0B2545",
            maxWidth: 940,
          }}
        >
          Supporting the implementation of ISO 25553
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", width: 56, height: 3, backgroundColor: "#D98E36" }} />
          <div style={{ display: "flex", fontSize: 27, color: "#1A1A1A" }}>
            ISO/TC 314 — Ageing Societies · In partnership with UN-Habitat
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
