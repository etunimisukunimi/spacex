import { useState, useEffect } from "react";

export function AdvantageBlock() {
  const [content, setContent] = useState();

  useEffect(() => {
    const prom = fetch("http://localhost:8080/advantage");

    prom
      .then((response) => response.json())
      .then((response) => setContent(response));
  }, []);
  console.log(content);

  return (
    <div className="advantageBlock">
      <button className="advantageSquare">{content?.statisticInfo}</button>
      <button className="advantageSquare">{content?.safetyInfo}</button>
      <button className="advantageSquare">{content?.yearInfo}</button>
      <button className="advantageSquare">{content?.daysInfo}</button>
    </div>
  );
}
