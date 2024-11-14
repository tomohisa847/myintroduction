import React, { useState } from "react";

const experiencesData = [
  {
    name: "プロジェクトA",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    description: "プロジェクトAの詳細な説明がここに入ります。",
    link: "https://example.com",
  },
  {
    name: "プロジェクトB",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    description: "プロジェクトBの詳細な説明がここに入ります。",
    link: "https://example.com",
  },
  {
    name: "プロジェクトC",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    description: "プロジェクトCの詳細な説明がここに入ります。",
    link: null,
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
  const [showImages, setShowImages] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
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
    display: "flex", // 横並びにする
    gap: "10px", // 画像間のスペース
    justifyContent: "center",
  },
  image: {
    width: "230px", // 固定幅で3枚表示が美しくなるように設定
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
