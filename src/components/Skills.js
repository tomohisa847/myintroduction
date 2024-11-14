import React from "react";

function Skills() {
  const skillsData = [
    {
      name: "React",
      image: "https://reactjs.org/logo-og.png", // 各スキルの画像URL
      description: "このポートフォリオを作成した言語です。",
      level: 4,
    },
    {
      name: "TypeScript",
      image: "https://www.typescriptlang.org/icons/icon-512x512.png",
      description: "新規開発ではTypeScriptを使用しています。",
      level: 3,
    },
    {
      name: "Styled-Components",
      image: "https://styled-components.com/logo.png",
      description: "CSS in JSのためのライブラリです。",
      level: 4,
    },
    {
      name: "Material-UI",
      image: "https://material-ui.com/static/logo.png",
      description: "React用のコンポーネントライブラリです。",
      level: 3,
    },
    {
      name: "Laravel",
      image: "https://laravel.com/img/logotype.min.svg",
      description: "PHP用のMVCフレームワークです。",
      level: 4,
    },
    {
      name: "PHP",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      description: "バックエンド開発に使用しています。",
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
    fontSize: "1.2em",
    color: "#FFD700", // 星を黄色にする
    marginBottom: "10px",
  },
  skillDescription: {
    fontSize: "0.9em",
  },
};

export default Skills;
