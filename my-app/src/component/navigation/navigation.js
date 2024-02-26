import { useState, useEffect } from "react";
import { NavigationButton } from "./navigationButton";

export function Navigation() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const prom = fetch("http://localhost:8080/navigation");

    prom
      .then((response) => response.json())
      .then((response) => setList(response));
  }, []);

  return (
    <div>
      <nav className="menu">
        <ul className="navigationUl">
          {list.map(({ title, href }) => (
            <li>
              <NavigationButton href={href}>{title}</NavigationButton>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
