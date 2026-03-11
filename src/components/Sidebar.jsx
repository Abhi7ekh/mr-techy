import { NavLink } from "react-router-dom";

function Sidebar({ technologies, techId, topicId, basePath = "/learn", title = "Technologies" }) {
  return (
    <aside className="sidebar" aria-label={title}>
      <h3 className="sidebar-title">{title}</h3>

      <ul className="sidebar-list">
        {technologies.map((t) => (
          <li key={t.id} className="sidebar-item">
            <NavLink
              to={`${basePath}/${t.id}/${topicId ?? t.topicOrder[0]}`}
              className={({ isActive }) =>
                `sidebar-link ${isActive || t.id === techId ? "active" : ""}`
              }
            >
              <span className="sidebar-icon" aria-hidden="true">
                {t.icon}
              </span>
              <span className="sidebar-label">{t.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
