import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TopicsBar from "../components/TopicsBar";

import DocArticle from "../features/learn/components/DocArticle";
import { aptitudeAreas, aptitudeById } from "../features/aptitude/content";

export default function AptitudePage() {
  const { areaId, topicId } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeArea = aptitudeById[areaId];
  const safeTopicId = useMemo(() => {
    if (!activeArea) return null;
    const candidate = topicId ?? activeArea.topicOrder[0];
    return activeArea.topics[candidate] ? candidate : activeArea.topicOrder[0];
  }, [activeArea, topicId]);

  if (!activeArea) return <Navigate to="/aptitude/quantitative/introduction" replace />;
  if (!safeTopicId)
    return (
      <Navigate to={`/aptitude/${activeArea.id}/${activeArea.topicOrder[0]}`} replace />
    );

  const topic = activeArea.topics[safeTopicId];

  return (
    <div className="main-page">
      <Header />
      <TopicsBar
        basePath="/aptitude"
        title="Sections"
        techId={activeArea.id}
        topicId={safeTopicId}
        topicOrder={activeArea.topicOrder}
      />

      <div className="layout">
        <div className={`sidebar-wrapper ${sidebarOpen ? "open" : "closed"}`}>
          <div className="sidebar-toggle" onClick={() => setSidebarOpen((o) => !o)}>
            {sidebarOpen ? "❮" : "❯"}
          </div>
          <Sidebar
            basePath="/aptitude"
            title="Aptitude"
            techId={activeArea.id}
            topicId={safeTopicId}
            technologies={aptitudeAreas}
          />
        </div>

        <main className={`content ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
          <div className="page-actions">
            <Link className="back-link" to="/">
              ← Back to Home
            </Link>
          </div>
          <DocArticle techLabel={activeArea.label} topic={topic} />
        </main>
      </div>
    </div>
  );
}

