import React, { useState } from "react";
import profileImage from "./img/3X4.jpg"; // 画像の相対パスでインポート

function About() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.imageContainer}>
            <img
              src={profileImage} // インポートした画像を指定
              alt="プロフィール写真"
              style={styles.profileImage}
            />
          </div>
          <h1 style={styles.name}>田中智久</h1>
          <div style={styles.socialIcons}></div>
        </div>
        <div style={styles.info}>
          <InfoItem label="大学" content="公立諏訪東京理科大学" />
          <InfoItem label="学部/学科" content="工学部/情報応用工学科" />
          <InfoItem label="趣味" content="ゲーム,筋トレ,釣り,深夜ドライブ,中古車探し" details="筋トレはほぼ毎日ジムに行っています" />
          <InfoItem label="参加プロジェクト" content="SUWA RPGプロジェクト,VitaLink" details="地域活性化を目的としたRPG開発プロジェクトです。富士見の病院の患者やカルテの管理をするアプリ開発を行うプロジェクトです" />
          <InfoItem label="その他" content="URBAN SOPHIST 代表" details="自身で設立したファッションブランドです。自分が代表になっています。" />
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, content, details }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div style={styles.infoItem}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={styles.label}>{label}</span>
        <span style={styles.content}>{content}</span>
        {details && (
          <button style={styles.detailButton} onClick={toggleDetails}>
            {showDetails ? "閉じる" : "詳細"}
          </button>
        )}
      </div>
      {showDetails && details && (
        <div style={styles.details}>{details}</div>
      )}
    </div>
  );
}

const styles = {
  section: {
    backgroundColor: "#E3E3E3",
    color: "white",
    padding: "40px 20px",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  header: {
    marginBottom: "40px",
  },
  imageContainer: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto 10px",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "2em",
    margin: "10px 0",
    color: "black", // 名前の色を黒に設定
    textTransform: "uppercase", // 大文字にする
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  icon: {
    color: "white",
    textDecoration: "none",
  },
  info: {
    textAlign: "left",
  },
  infoItem: {
    padding: "15px 0",
    borderBottom: "1px solid #3b82f6",
    transition: "all 0.3s ease", // アニメーションを追加
  },
  label: {
    fontWeight: "bold",
    width: "20%",
    color: "black", // ラベルの色を黒に設定
    textTransform: "uppercase", // 大文字にする
  },
  content: {
    width: "60%",
    color: "black", // コンテンツの色を黒に設定
    textTransform: "uppercase", // 大文字にする
  },
  detailButton: {
    backgroundColor: "#1e40af",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "4px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  },
  details: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#E3E3E3",
    color: "black", // 詳細の文字色を黒に設定
    borderRadius: "4px",
    width: "100%",
    textTransform: "uppercase", // 大文字にする
    transition: "max-height 0.3s ease",
    overflow: "hidden",
  },
};

export default About;
