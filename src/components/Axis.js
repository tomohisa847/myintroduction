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
    label: "自動車業界(システム)",
    events: [
      { title: "自動車が大好き", description: "毎日中古車を探したり、良くドライブに行きます。" },
      { title: "自動車業界に行きたい", description: "自身の勉強していることを自動車業界で活用して貢献したいから" },
      { title: "大学の授業で",description: "組み込みシステムの存在を知りこれなら自動車業界に自身の勉強分野で貢献できると考えたから。"},
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
