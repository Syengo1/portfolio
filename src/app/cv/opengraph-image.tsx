/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "Antony Syengo — Full-Stack Software Developer CV";
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
          backgroundColor: "#090d16",
          backgroundImage:
            "radial-gradient(circle at 20% 25%, rgba(37, 99, 235, 0.22) 0%, transparent 50%), radial-gradient(circle at 85% 75%, rgba(147, 51, 234, 0.18) 0%, transparent 45%)",
          padding: "48px 64px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        {/* LEFT COLUMN: CV SUMMARY & CREDENTIALS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "660px",
            height: "100%",
            paddingRight: "24px",
          }}
        >
          {/* Top Brand Bar with src/app/icon.svg */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
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
                  color: "#60a5fa",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                antonysyengo.vercel.app/cv
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#94a3b8",
                }}
              >
                Official Curriculum Vitae · Printable A4 Format
              </span>
            </div>
          </div>

          {/* Main CV Title & Highlights */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex" }}>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 800,
                  color: "#ffffff",
                  backgroundColor: "#2563eb",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Curriculum Vitae (CV)
              </span>
            </div>

            <div
              style={{
                fontSize: "52px",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "#ffffff",
                display: "flex",
              }}
            >
              Antony Syengo
            </div>

            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#93c5fd",
                display: "flex",
              }}
            >
              Full-Stack Software Developer
            </div>

            {/* Key Credentials List */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "8px",
                fontSize: "17px",
                color: "#cbd5e1",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#38bdf8" }}>●</span>
                <span>BSc. in Data Science &amp; Analytics — JKUAT (Dec 2025)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#38bdf8" }}>●</span>
                <span>Production SaaS, E-Commerce &amp; POS Systems (Next.js, Node.js, SQL)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#38bdf8" }}>●</span>
                <span>Enterprise IT Support Attachment — The National Treasury</span>
              </div>
            </div>
          </div>

          {/* Bottom Contact Strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: "14px",
              color: "#94a3b8",
              borderTop: "1px solid rgba(148, 163, 184, 0.2)",
              paddingTop: "16px",
            }}
          >
            <span>📍 Nairobi, Kenya</span>
            <span>·</span>
            <span>✉️ syengowork@gmail.com</span>
            <span>·</span>
            <span>📞 +254 114 513 647</span>
          </div>
        </div>

        {/* RIGHT COLUMN: WANTED POSTER BADGE */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "355px",
            height: "520px",
            backgroundColor: "#F2E6D0",
            border: "4px solid #3E3228",
            borderRadius: "6px",
            padding: "18px 22px",
            color: "#2D241E",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.7)",
          }}
        >
          <div
            style={{
              fontSize: "44px",
              fontWeight: 900,
              letterSpacing: "7px",
              lineHeight: 1,
              marginBottom: "10px",
              display: "flex",
            }}
          >
            WANTED
          </div>

          <div
            style={{
              width: "100%",
              height: "240px",
              backgroundColor: "#B0A088",
              border: "3px solid #3E3228",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {portraitSrc ? (
              <img
                src={portraitSrc}
                alt="Antony Syengo"
                width="305"
                height="240"
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
                <span style={{ fontSize: "50px", fontWeight: 900 }}>CV</span>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              backgroundColor: "#1d4ed8",
              color: "#ffffff",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "1.5px",
              padding: "4px 12px",
              marginTop: "-10px",
              marginBottom: "8px",
              borderRadius: "2px",
            }}
          >
            VERIFIED DOSSIER &amp; CV
          </div>

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
                fontSize: "25px",
                fontWeight: 900,
                letterSpacing: "1px",
              }}
            >
              <span>ANTONY </span>
              <span style={{ color: "#8B0000", margin: "0 6px" }}>&ldquo;D.&rdquo;</span>
              <span>SYENGO</span>
            </div>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px" }}>
              BSc. DATA SCIENCE &amp; ANALYTICS
            </span>
          </div>

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
            <span style={{ fontSize: "20px", fontWeight: 900 }}>฿</span>
            <span style={{ fontSize: "25px", fontWeight: 900 }}>3,000,000,000</span>
            <span style={{ fontSize: "18px", fontWeight: 900 }}>-</span>
          </div>

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
            <span>JKUAT · NATIONAL TREASURY</span>
            <span style={{ fontSize: "12px", fontWeight: 900, letterSpacing: "2px" }}>
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