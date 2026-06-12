import { useEffect, useState } from "react";

const COFFEE_IMG = "https://cdn.poehali.dev/projects/93238b32-d6ad-450e-a9f6-09f40b0b7c64/files/ea1252eb-7d93-4d5a-91da-6b1a2e6b29be.jpg";

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2c1a0e 0%, #4a2c14 40%, #1e3a2a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px 60px",
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Световые пятна на фоне */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(180,120,60,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 60%, rgba(40,100,60,0.10) 0%, transparent 70%)",
      }} />

      {/* Баннер */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1100px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 40px 120px rgba(0,0,0,0.65), 0 0 0 1px rgba(212,175,100,0.18)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <div style={{ position: "relative", aspectRatio: "2.4 / 1", minHeight: "320px" }}>
          {/* Фото */}
          <img
            src={COFFEE_IMG}
            alt="Кофе и собака"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />

          {/* Градиент поверх фото */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, rgba(18,8,3,0.92) 0%, rgba(18,8,3,0.70) 42%, rgba(18,8,3,0.20) 72%, transparent 100%)",
          }} />

          {/* Внутренняя золотая рамка */}
          <div style={{
            position: "absolute", inset: "14px",
            border: "1px solid rgba(212,175,100,0.22)",
            borderRadius: "10px",
            pointerEvents: "none",
          }} />

          {/* Текст */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            padding: "0 clamp(28px, 5vw, 60px)",
            maxWidth: "56%",
          }}>
            {/* Золотая черточка */}
            <div style={{
              width: "44px", height: "2px",
              background: "linear-gradient(90deg, #d4af64, transparent)",
              marginBottom: "18px",
              opacity: visible ? 1 : 0,
              transition: "opacity 1.2s ease 0.5s",
            }} />

            {/* Заголовок */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 5.5vw, 78px)",
              fontWeight: 600,
              color: "#f5ead8",
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-0.02em",
              textShadow: "0 4px 24px rgba(0,0,0,0.5)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 1s ease 0.25s, transform 1s ease 0.25s",
            }}>
              Делай<br />
              <em style={{ color: "#d4af64", fontStyle: "italic" }}>добро</em>
            </h1>

            {/* Подзаголовок */}
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(10px, 1.2vw, 13px)",
              fontWeight: 300,
              color: "rgba(245,234,216,0.65)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              margin: "18px 0 0",
              opacity: visible ? 1 : 0,
              transition: "opacity 1.2s ease 0.75s",
            }}>
              с чашкой кофе и другом рядом
            </p>

            {/* Нижняя линия */}
            <div style={{
              width: "72px", height: "1px",
              background: "rgba(212,175,100,0.35)",
              marginTop: "20px",
              opacity: visible ? 1 : 0,
              transition: "opacity 1.2s ease 1s",
            }} />
          </div>

          {/* Иконки в правом нижнем углу */}
          <div style={{
            position: "absolute", bottom: "18px", right: "22px",
            display: "flex", gap: "8px", alignItems: "center",
            opacity: visible ? 0.55 : 0,
            transition: "opacity 1.8s ease 1.3s",
          }}>
            <span style={{ fontSize: "20px" }}>☕</span>
            <span style={{ fontSize: "18px" }}>🐾</span>
          </div>
        </div>
      </div>

      {/* Подпись формата */}
      <p style={{
        position: "absolute",
        bottom: "18px",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "10px",
        color: "rgba(255,255,255,0.18)",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        margin: 0,
        opacity: visible ? 1 : 0,
        transition: "opacity 2s ease 1.6s",
      }}>
        баннер · горизонтальный формат
      </p>
    </div>
  );
};

export default Index;
