import { NavLink } from "react-router-dom";

function TopicsBar({ techId, topicId, topicOrder, basePath = "/learn", title = "Topics" }) {
  return (
    <div className="topics-bar">
      <span className="topic-title">{title}:</span>

      {topicOrder.map((id) => (
        <NavLink
          key={id}
          to={`${basePath}/${techId}/${id}`}
          className={({ isActive }) =>
            `topic-link ${isActive || id === topicId ? "active" : ""}`
          }
        >
          {id
            .split("-")
            .map((p) => p[0]?.toUpperCase() + p.slice(1))
            .join(" ")}
        </NavLink>
      ))}
    </div>
  );
}

export default TopicsBar;
