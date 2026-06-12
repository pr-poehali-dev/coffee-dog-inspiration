import { useEffect, useState } from "react";

const BANNER_IMG = "https://cdn.poehali.dev/projects/93238b32-d6ad-450e-a9f6-09f40b0b7c64/files/ea1252eb-7d93-4d5a-91da-6b1a2e6b29be.jpg";
const CUP_DESIGN_IMG = "https://cdn.poehali.dev/projects/93238b32-d6ad-450e-a9f6-09f40b0b7c64/files/ed128202-e492-4aeb-8fa3-1412e77ae85b.jpg";

const Index = () => {
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<"cup" | "banner">("cup");

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2c1a0e 0%, #3e2410 40%, #1e3a2a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px 60px",
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Фоновые световые пятна */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(180,120,60,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 60%, rgba(40,100,60,0.10) 0%, transparent 70%)",
      }} />

      {/* Заголовок */}
      <div style={{
        position: "relative", zIndex: 1, textAlign: "center", marginBottom: "28px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-16px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}>
        <p style={{
          fontSize: "10px", fontWeight: 400,
          color: "rgba(212,175,100,0.7)",
          letterSpacing: "0.3em", textTransform: "uppercase",
          margin: "0 0 10px",
        }}>Рекламное оформление</p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 600,
          color: "#f5ead8", margin: 0, letterSpacing: "-0.02em",
        }}>
          Делай <em style={{ color: "#d4af64", fontStyle: "italic" }}>добро</em>
        </h1>
      </div>

      {/* Табы */}
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", gap: "4px",
        background: "rgba(0,0,0,0.3)",
        borderRadius: "50px",
        padding: "4px",
        marginBottom: "28px",
        border: "1px solid rgba(212,175,100,0.15)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease 0.3s",
      }}>
        {([
          { key: "cup" as const, label: "☕ Стакан" },
          { key: "banner" as const, label: "🖼 Баннер" },
        ]).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px", fontWeight: 500,
              letterSpacing: "0.05em",
              padding: "8px 22px",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              background: tab === key ? "#d4af64" : "transparent",
              color: tab === key ? "#1a0e05" : "rgba(245,234,216,0.6)",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Контент */}
      <div style={{
        position: "relative", zIndex: 1,
        width: "100%", maxWidth: "1000px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
      }}>

        {/* Макет стакана */}
        {tab === "cup" && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>

            <div style={{
              position: "relative",
              width: "100%", maxWidth: "680px",
              borderRadius: "20px", overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,100,0.2)",
            }}>
              <img
                src={CUP_DESIGN_IMG}
                alt="Дизайн стакана"
                style={{ width: "100%", display: "block", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", inset: "12px",
                border: "1px solid rgba(212,175,100,0.25)",
                borderRadius: "12px", pointerEvents: "none",
              }} />
            </div>

            {/* Инфо-карточки */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              width: "100%", maxWidth: "680px",
            }}>
              {[
                { icon: "🐾", title: "Тёплый образ", desc: "Золотистый ретривер как символ доброты и уюта" },
                { icon: "🌿", title: "Ботаника", desc: "Листья и растения создают природный стиль" },
                { icon: "✍️", title: "Леттеринг", desc: "«Делай добро» — акцентный слоган бренда" },
              ].map((item) => (
                <div key={item.title} style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(212,175,100,0.12)",
                  borderRadius: "14px",
                  padding: "16px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: "22px", marginBottom: "8px" }}>{item.icon}</div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "15px", fontWeight: 600,
                    color: "#f5ead8", marginBottom: "6px",
                  }}>{item.title}</div>
                  <div style={{
                    fontSize: "11px", fontWeight: 300,
                    color: "rgba(245,234,216,0.5)",
                    lineHeight: 1.5,
                  }}>{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Метка формата */}
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              background: "rgba(212,175,100,0.08)",
              border: "1px solid rgba(212,175,100,0.2)",
              borderRadius: "50px",
              padding: "8px 20px",
            }}>
              <span style={{ fontSize: "13px" }}>📐</span>
              <span style={{
                fontSize: "11px", fontWeight: 400,
                color: "rgba(212,175,100,0.8)",
                letterSpacing: "0.12em",
              }}>
                Развёртка для стакана 300–400 мл · CMYK
              </span>
            </div>
          </div>
        )}

        {/* Баннер */}
        {tab === "banner" && (
          <div style={{
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 40px 120px rgba(0,0,0,0.65), 0 0 0 1px rgba(212,175,100,0.18)",
          }}>
            <div style={{ position: "relative", aspectRatio: "2.4 / 1", minHeight: "280px" }}>
              <img src={BANNER_IMG} alt="Баннер" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(90deg, rgba(18,8,3,0.9) 0%, rgba(18,8,3,0.65) 42%, rgba(18,8,3,0.15) 72%, transparent 100%)",
              }} />
              <div style={{ position: "absolute", inset: "12px", border: "1px solid rgba(212,175,100,0.22)", borderRadius: "10px", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", padding: "0 clamp(24px, 5vw, 56px)", maxWidth: "55%" }}>
                <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #d4af64, transparent)", marginBottom: "16px" }} />
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(36px, 5vw, 70px)", fontWeight: 600,
                  color: "#f5ead8", lineHeight: 1.05, margin: 0,
                  textShadow: "0 4px 24px rgba(0,0,0,0.5)",
                }}>
                  Делай<br /><em style={{ color: "#d4af64" }}>добро</em>
                </h2>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(9px, 1.1vw, 12px)", fontWeight: 300,
                  color: "rgba(245,234,216,0.6)", letterSpacing: "0.28em",
                  textTransform: "uppercase", margin: "16px 0 0",
                }}>с чашкой кофе и другом рядом</p>
              </div>
              <div style={{ position: "absolute", bottom: "16px", right: "20px", display: "flex", gap: "8px", opacity: 0.5 }}>
                <span style={{ fontSize: "18px" }}>☕</span>
                <span style={{ fontSize: "16px" }}>🐾</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Подпись */}
      <p style={{
        position: "absolute", bottom: "16px", left: "50%", transform: "translateX(-50%)",
        fontSize: "10px", color: "rgba(255,255,255,0.15)",
        letterSpacing: "0.15em", textTransform: "uppercase",
        whiteSpace: "nowrap", margin: 0, zIndex: 1,
        opacity: visible ? 1 : 0, transition: "opacity 2s ease 1.5s",
      }}>
        макет для печати
      </p>
    </div>
  );
};

export default Index;
