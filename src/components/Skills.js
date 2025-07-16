import React from "react";

function Skills() {
  const skillsData = [
    {
      name: "React",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: "このWebサイトを作成するのに使用しました。",
      level: 3,
    },
    {
      name: "C言語",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
      description: "低レベルのプログラミングとアルゴリズムに使用しています。",
      level: 3,
    },
    {
      name: "C#",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      description: "ゲーム開発やWindowsアプリケーションで使用しています。",
      level: 3,
    },
    {
      name: "C++",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      description: "クラスベースでゲームを授業内で開発しました。クラスの概念やクラス継承グローバル変数やローカル変数などを学びました。",
      level: 4,
    },
    {
      name: "JavaScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      description: "授業内で履修済みReactの基礎になるため自主的に勉強した。",
      level: 3,
    },
    {
      name: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      description: "データ分析とスクリプト作成に使用しています。",
      level: 3,
    },
    {
      name: "HTML/CSS",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      description: "ウェブページの構築に使用しています。",
      level: 3,
    },
    {
      name: "Python Flask",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
      description: "バックエンドのWebアプリケーション開発に使用しています。",
      level: 3,
    },
    {
      name: "Java",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      description: "授業のモバイルデバイス開発に使用しました。",
      level: 2,
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>スキル</h2>
      <div style={styles.skillsContainer}>
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div style={styles.card}>
      <img src={skill.image} alt={skill.name} style={styles.skillImage} />
      <h3 style={styles.skillName}>{skill.name}</h3>
      <div style={styles.rating}>
        {"★".repeat(skill.level)}
        {"☆".repeat(5 - skill.level)}
      </div>
      <p style={styles.skillDescription}>{skill.description}</p>
    </div>
  );
}

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#1e3a8a",
    color: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2em",
  },
  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#334155",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    border: "1px solid #3b82f6",
  },
  skillImage: {
    width: "80px",
    height: "80px",
    marginBottom: "10px",
  },
  skillName: {
    fontSize: "1.5em",
    margin: "10px 0",
  },
  rating: {
    fontSize: "1.7em",
    color: "#FFD700", // 星を黄色にする
    marginBottom: "10px",
  },
  skillDescription: {
    fontSize: "0.9em",
  },
};

export default Skills;
