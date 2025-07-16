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
      level: 3,
    },
    {
      name: "JavaScript",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      description: "授業内で履修済みReactの基礎になるため自主的に勉強した。",
      level: 3,
    },
    {
      name: "Node.js",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      description: "APIを用いてDiscordと連携したメモアプリを開発。OpenAI APIとNotion APIを使用し、Discord Botからメモができるようにした。",
      level: 3,
      link:"https://note.com/jazzy_crane4942/n/n3ef1392d08f1"
    },
    {
      name: "Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      description: "また、大学の学生証（FeliCa対応）を用いた入退室管理システムを開発。Sony RC‑S380 NFCリーダー + pyscard で学生証のUIDを読み取り、入退室ログをGUI（tkinter）とCSVファイルで管理する仕組みを実装しました",
      level: 3,
      link:"https://note.com/jazzy_crane4942/n/n3a1714506d2e"
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
      <h3 style={styles.skillName}>
        {skill.link ? (
          <a href={skill.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
            {skill.name}
          </a>
        ) : (
          skill.name
        )}
      </h3>
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
  link: {
  color: "#60a5fa",
  textDecoration: "none",
  }
};

export default Skills;
