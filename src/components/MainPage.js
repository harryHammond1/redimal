import React from "react";
import "./MainPage.css";

const MainPage = () => {
  const filters = [
    { to: "/r/popular", text: "Popular" },
    { to: "/r/random", text: "Random" },
    { to: "/r/top", text: "Top" },
  ];
  return (
    <div className="mainpage">
      <div className="filters">
        <ul>
          {filters.map((filter) => (
            <li>
              <a style={{ color: "salmon" }} href={filter.to}>
                {filter.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
