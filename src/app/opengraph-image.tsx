/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "Antony Syengo | Full-Stack Software Developer — Wanted Poster Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function getPortraitDataUrl(): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), "public", "profile2.jpg");
    const buffer = await readFile(filePath);
    return `data:image/jpeg;base64,${buffer.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function Image() {
  const portraitSrc = await getPortraitDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(56, 189, 248, 0.16) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(168, 85, 247, 0.22) 0%, transparent 50%)",
          padding: "48px 64px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        {/* LEFT COLUMN: FAVICON BADGE + PROFESSIONAL IDENTITY */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "650px",
            height: "100%",
            paddingRight: "24px",
          }}
        >
          {/* Top Brand Bar with src/app/icon.svg Emblem */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            {/* Exact SVG from src/app/icon.svg */}
            <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" fill="#FFFFFF" stroke="#333333" strokeWidth="3" />
              <path d="M20 20L44 44" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
              <path d="M44 20L20 44" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
            </svg>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#38bdf8",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                antonysyengo.vercel.app
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#94a3b8",
                }}
              >
                Available for Full-Time &amp; Contract Roles · Nairobi, Kenya
              </span>
            </div>
          </div>

          {/* Main Headline & Value Proposition */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#c084fc",
                  backgroundColor: "rgba(168, 85, 247, 0.15)",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                Full-Stack Software Developer
              </span>
            </div>

            <div
              style={{
                fontSize: "56px",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-1px",
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Antony Syengo</span>
            </div>

            <p
              style={{
                fontSize: "22px",
                lineHeight: 1.45,
                color: "#cbd5e1",
                margin: 0,
              }}
            >
              Building production web applications, Point-of-Sale (POS) platforms, M-Pesa integrations, and data-driven business systems.
            </p>

            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#94a3b8",
                marginTop: "4px",
              }}
            >
              🎓 BSc. in Data Science and Analytics — JKUAT
            </span>
          </div>

          {/* Tech Stack Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL / Supabase",
              "M-Pesa Daraja API",
              "Python & SQL",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#e2e8f0",
                  backgroundColor: "rgba(30, 41, 59, 0.9)",
                  border: "1px solid rgba(148, 163, 184, 0.25)",
                  padding: "7px 14px",
                  borderRadius: "8px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: THE WANTED POSTER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "365px",
            height: "525px",
            backgroundColor: "#F2E6D0",
            border: "4px solid #3E3228",
            borderRadius: "6px",
            padding: "18px 22px",
            color: "#2D241E",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.65)",
            transform: "rotate(1.5deg)",
          }}
        >
          {/* WANTED Header */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: 900,
              letterSpacing: "8px",
              lineHeight: 1,
              marginBottom: "10px",
              color: "#2D241E",
              display: "flex",
            }}
          >
            WANTED
          </div>

          {/* Portrait Frame */}
          <div
            style={{
              width: "100%",
              height: "245px",
              backgroundColor: "#B0A088",
              border: "3px solid #3E3228",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {portraitSrc ? (
              <img
                src={portraitSrc}
                alt="Antony Syengo"
                width="315"
                height="245"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#3E3228",
                  color: "#F2E6D0",
                }}
              >
                <span style={{ fontSize: "54px", fontWeight: 900 }}>A &ldquo;D.&rdquo; S</span>
                <span style={{ fontSize: "12px", letterSpacing: "2px" }}>
                  FULL-STACK ENGINEER
                </span>
              </div>
            )}
          </div>

          {/* Status Ribbon */}
          <div
            style={{
              display: "flex",
              backgroundColor: "#2D241E",
              color: "#F2E6D0",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "1.5px",
              padding: "4px 12px",
              marginTop: "-10px",
              marginBottom: "8px",
              borderRadius: "2px",
            }}
          >
            AVAILABLE: FULL-TIME &amp; CONTRACT
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "26px",
                fontWeight: 900,
                letterSpacing: "1.5px",
                lineHeight: 1.1,
              }}
            >
              <span>ANTONY </span>
              <span style={{ color: "#8B0000", margin: "0 6px" }}>&ldquo;D.&rdquo;</span>
              <span>SYENGO</span>
            </div>
            <span
              style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                marginTop: "3px",
              }}
            >
              FULL-STACK SOFTWARE DEVELOPER
            </span>
          </div>

          {/* Bounty Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderTop: "3px solid #3E3228",
              borderBottom: "3px solid #3E3228",
              padding: "6px 4px",
              marginTop: "auto",
            }}
          >
            <span style={{ fontSize: "22px", fontWeight: 900 }}>฿</span>
            <span style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "0.5px" }}>
              3,000,000,000
            </span>
            <span style={{ fontSize: "18px", fontWeight: 900 }}>-</span>
          </div>

          {/* Marine Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "8px",
              fontSize: "9px",
              fontWeight: 700,
            }}
          >
            <span>DATA SCIENCE &amp; SOFTWARE DEV</span>
            <span style={{ fontSize: "13px", fontWeight: 900, letterSpacing: "2px" }}>
              MARINE
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}