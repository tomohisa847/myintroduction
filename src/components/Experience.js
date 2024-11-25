import React, { useState } from "react";
import SuwaRPG1 from "./img/experience/SuwaRPG (1).jpg";
import SuwaRPG2 from "./img/experience/SuwaRPG (2).jpg";
import SuwaRPG3 from "./img/experience/SuwaRPG (3).jpg";

const experiencesData = [
  {
    name: "SUWARPGプロジェクト",
    images: [SuwaRPG1, SuwaRPG2, SuwaRPG3],
    description: [
      { title: "プロジェクト概要", content: "SUWARPGプロジェクトは、諏訪市の観光資源を活用したご当地RPGを開発・運用し、地域の魅力を発信することを目的とした取り組みです。現在もゲームの開発が進行中であり、ストーリーやキャラクターの設計、ゲームイベントの実装に注力しています。" },
      { title: "使用技術", content: "JavaScript,RPGツクールMZ" },
      { title: "結果", content: "これまでに、諏訪市役所でのプレゼンテーションを通じて、プロジェクトへの協力を得ることに成功しました。この協力により、地域資源を活用したゲーム内容を展開する基盤を築くことができました。プレゼンテーションの際の様子を捉えた画像を添付しています。" },
      { title: "今後の展望と苦労", content: "これまでの苦労として諏訪大社の使用許可などを取得するのに苦労しました。また今後は地域イベントでのRPGゲームの告知や地域企業の参入を目指して活動しています。"},
    ],
    link: "https://github.com/Kotaro0722/SuwaRPG",
  },
  {
    name: "VitaLinkプロジェクト",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    description: [
      { title: "プロジェクト概要", content: "VitaLinkプロジェクトは、富士見の病院におけるカルテ管理や患者情報を効率的に管理するためのアプリケーションを開発する取り組みです。このプロジェクトは、医療現場の業務効率化と患者データの安全で正確な管理を目指して発足しました。" },
      { title: "使用技術", content: "React,Firebase,TypeScript" },
      { title: "苦労した点", content: "このプロジェクトは私にとって初めてのチーム開発であり、当初は足並みが揃わずに苦労しました。特に自身の進捗が遅れる場面があり、チームに迷惑をかけることもありました。しかし、技術力の高い先輩方のフォローを受けながら進めることで、自分の課題を改善し、開発スキルを着実に向上させることができました。"},
      { title: "今後の展望", content: "今後はどのようにしてこのシステムを導入するのかチーム内で話し合っています。例:作った機能のモジュール化など"}
    ],
    link: "https://github.com/Kotaro0722/VitaLink",
  },
  {
    name: "URBAN SOPHIST設立",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    description: [
      {title: "プロジェクト概要",content: "自身でブランドを設立して商品企画からブランドコンセプト、またオンライン販売まで行いました。"},
      {title: "苦労した点",content: "商品を企画する際にどのような商品を顧客に届けたいかをブランドコンセプトに合うように作成するのが困難だった。また販売ストアのUIの選定などかなり気を使った。"},
      {title: "今後の展望",content: "今後は顧客獲得のためインスタグラムの投稿をつづけまたチラシ配りなどを行おうと考えている。"}
    ]
  }
];

function Experience() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>経験</h2>
      <div style={styles.experiencesContainer}>
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ experience }) {
  const [showImages, setShowImages] = useState(false);
  const [showLink, setShowLink] = useState(false);

  return (
    <div style={styles.card}>
      <h3 style={styles.projectName}>{experience.name}</h3>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setShowImages(!showImages)}>
          {showImages ? "画像を隠す" : "画像を表示"}
        </button>
        {showImages && (
          <div style={styles.imageContainer}>
            {experience.images.map((image, index) => (
              <img key={index} src={image} alt={`${experience.name} ${index + 1}`} style={styles.image} />
            ))}
          </div>
        )}

        <Details description={experience.description} />

        {experience.link && (
          <button style={styles.button} onClick={() => setShowLink(!showLink)}>
            {showLink ? "リンクを隠す" : "リンクを表示"}
          </button>
        )}
        {showLink && experience.link && (
          <p style={styles.link}>
            <a href={experience.link} target="_blank" rel="noopener noreferrer">
              {experience.link}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

function Details({ description }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.detailsContainer}>
      {description.map((item, index) => (
        <div key={index} style={styles.detailsItem}>
          <button style={styles.detailsButton} onClick={() => toggleItem(index)}>
            {activeIndex === index ? "▲ " : "▼ "}
            {item.title}
          </button>
          {activeIndex === index && <p style={styles.detailsContent}>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#f0f4f8",
    color: "#333",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2em",
  },
  experiencesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "90vw",
    maxWidth: "800px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "#333",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
  },
  projectName: {
    fontSize: "1.5em",
    margin: "10px 0",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "0.9em",
    width: "100%",
    transition: "background-color 0.3s",
  },
  imageContainer: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  image: {
    width: "230px",
    borderRadius: "8px",
  },
  detailsContainer: {
    marginTop: "20px",
    width: "100%",
  },
  detailsItem: {
    marginBottom: "10px",
  },
  detailsButton: {
    backgroundColor: "#e0e0e0",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "left",
    width: "100%",
    cursor: "pointer",
    fontSize: "1em",
  },
  detailsContent: {
    marginTop: "5px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    fontSize: "0.9em",
    color: "#555",
  },
  link: {
    marginTop: "10px",
    fontSize: "0.9em",
    color: "#3b82f6",
  },
};

export default Experience;
