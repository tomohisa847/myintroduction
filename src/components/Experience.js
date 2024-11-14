import React, { useState } from "react";

const experiencesData = [
  {
    name: "プロジェクトA",
    image: "https://via.placeholder.com/150", // プロジェクト画像のURL
    description: "プロジェクトAの詳細な説明がここに入ります。",
    link: "https://example.com",
  },
  {
    name: "プロジェクトB",
    image: "https://via.placeholder.com/150",
    description: "プロジェクトBの詳細な説明がここに入ります。",
    link: "https://example.com",
  },
  {
    name: "プロジェクトC",
    image: "https://via.placeholder.com/150",
    description: "プロジェクトCの詳細な説明がここに入ります。",
    link: null, // リンクがない場合
  },
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
  const [showImage, setShowImage] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showLink, setShowLink] = useState(false);

  return (
    <div style={styles.card}>
      <h3 style={styles.projectName}>{experience.name}</h3>

      <button style={styles.button} onClick={() => setShowImage(!showImage)}>
        {showImage ? "画像を隠す" : "画像を表示"}
      </button>
      {showImage && (
        <div style={styles.imageContainer}>
          <img src={experience.image} alt={experience.name} style={styles.image} />
        </div>
      )}

      <button style={styles.button} onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? "詳細を隠す" : "詳細を表示"}
      </button>
      {showDescription && <p style={styles.description}>{experience.description}</p>}

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
  );
}

const styles = {
  section: {
    padding: "20px",
    backgroundColor: "#f0f4f8",
    color: "#333",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2em",
  },
  experiencesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
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
  button: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px",
    fontSize: "0.9em",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#2563eb",
  },
  imageContainer: {
    marginTop: "10px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  description: {
    marginTop: "10px",
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
