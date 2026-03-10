import { useState } from "react";

import Header from "../components/Header";
import TopicsBar from "../components/TopicsBar";
import Sidebar from "../components/Sidebar";

import ReactSection from "../sections/ReactSection";
import NodeSection from "../sections/NodeSection";
import MySQLSection from "../sections/MySQLSection";
import CSSSection from "../sections/CSSSection";

function MainPage() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="main-page">
      <Header />

      <TopicsBar />

      {/* Toggle Button */}
      <button
        className="toggle-btn"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? "Hide Tools" : "Show Tools"}
      </button>

      <div className="layout">
        {showSidebar && <Sidebar />}

        <main className="content">
          <ReactSection />
          <NodeSection />
          <MySQLSection />
          <CSSSection />
        </main>
      </div>
    </div>
  );
}

export default MainPage;
