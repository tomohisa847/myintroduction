import React, { useEffect, useState } from "react";
import "./Axis.css";

const timelineData = [
  {
    label: "ベンチャー気質のある企業",
    events: [
      { title: "成長する意欲", description: "何に対しても挑戦し勢いがある会社が自身の気質に合っているため" },
      {title: "自主的に学習する", description: "与えられて学習することもいいがやはり自発的に勉強することが一番身につくためベンチャー気質のある企業ではその風潮が強いから。"},
    ],
  },
  {
    label: "世の中を自分で良くしたい",
    events: [
      { title: "自分が携わったもので", description: "世の中に自分が作ったもので貢献したい。自分が広めたもので貢献したい。" },
      { title: "世の中に必要なものだけど目立たないもの", description: "人の役に立って社会に貢献したい。目立たなくてきつくても。" },
      { title: "大学の授業で",description: "自身が学んだ技術の知識を生かして社会に貢献できる。"},
    ],
  },
  {
    label: "若手がリーダーとなり活躍している",
    events: [
      { title: "リーダになりたい", description: "3年以内に会社で何かしらのプロダクトマネージャーやプロジェクトリーダーを務めたいから" },
      { title: "責任の重要性", description: "責任を伴うことは自身の経験において成果を上げてきたから" },
    ],
  },
];

function Axis() {
  return (
    <section className="axis-section">
      <h2 className="axis-title">就活の軸</h2>
      <div className="timeline-container">
        {timelineData.map((timeline, index) => (
          <SingleTimeline key={index} timeline={timeline} />
        ))}
      </div>
    </section>
  );
}

function SingleTimeline({ timeline }) {
  return (
    <div className="timeline">
      <span className="timeline-label">{timeline.label}</span>
      {timeline.events.map((event, index) => (
        <TimelineItem key={index} title={event.title} description={event.description} index={index} />
      ))}
    </div>
  );
}

function TimelineItem({ title, description, index }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // 表示された場合にアニメーションを再適用
      } else {
        setIsVisible(false); // 画面外に出た場合にリセット
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
    const element = document.querySelector(`.timeline-item-${title.replace(/\s/g, "-")}-${index}`);
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [title, index]);

  return (
    <div className={`timeline-item timeline-item-${title.replace(/\s/g, "-")}-${index} ${isVisible ? "visible" : ""}`}>
      <div className="popup">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Axis;
