import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TopicsBar from "../components/TopicsBar";

import DocArticle from "../features/learn/components/DocArticle";
import { techById, technologies } from "../features/learn/content";

export default function LearnPage() {
  const { techId, topicId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeTech = techById[techId];
  const safeTopicId = useMemo(() => {
    if (!activeTech) return null;
    const candidate = topicId ?? activeTech.topicOrder[0];
    return activeTech.topics[candidate] ? candidate : activeTech.topicOrder[0];
  }, [activeTech, topicId]);

  if (!activeTech) return <Navigate to="/learn/react/introduction" replace />;
  if (!safeTopicId) return <Navigate to={`/learn/${activeTech.id}/${activeTech.topicOrder[0]}`} replace />;

  const topic = activeTech.topics[safeTopicId];

  return (
    <div className="main-page">
      <Header />
      <TopicsBar
        basePath="/learn"
        techId={activeTech.id}
        topicId={safeTopicId}
        topicOrder={activeTech.topicOrder}
      />

      <div className="layout">
        <div className={`sidebar-wrapper ${sidebarOpen ? "open" : "closed"}`}>
          <div className="sidebar-toggle" onClick={() => setSidebarOpen((o) => !o)}>
            {sidebarOpen ? "❮" : "❯"}
          </div>
          <Sidebar
            basePath="/learn"
            techId={activeTech.id}
            topicId={safeTopicId}
            technologies={technologies}
          />
        </div>

        <main className={`content ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
          <div className="page-actions">
            <Link className="back-link" to="/">
              ← Back to Home
            </Link>
          </div>
          <DocArticle techLabel={activeTech.label} topic={topic} />
        </main>
      </div>
    </div>
  );
}

