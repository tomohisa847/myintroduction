import React, { useEffect, useState } from "react";
import "./Axis.css";

const timelineData = [
  {
    label: "軸1",
    events: [
      { title: "イベントA1", description: "イベントA1の詳細説明です。" },
      { title: "イベントA2", description: "イベントA2の詳細説明です。" },
    ],
  },
  {
    label: "軸2",
    events: [
      { title: "イベントB1", description: "イベントB1の詳細説明です。" },
      { title: "イベントB2", description: "イベントB2の詳細説明です。" },
    ],
  },
  {
    label: "軸3",
    events: [
      { title: "イベントC1", description: "イベントC1の詳細説明です。" },
      { title: "イベントC2", description: "イベントC2の詳細説明です。" },
    ],
  },
];

function Axis() {
  return (
    <section className="axis-section">
      <h2 className="axis-title">ポートフォリオ</h2>
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
