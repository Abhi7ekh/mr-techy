import { useState } from "react";

import Header from "../components/Header";
import TopicsBar from "../components/TopicsBar";
import Sidebar from "../components/Sidebar";

import ReactSection from "../sections/ReactSection";
import NodeSection from "../sections/NodeSection";
import MySQLSection from "../sections/MySQLSection";
import CSSSection from "../sections/CSSSection";

function MainPage() {
  const [open, setOpen] = useState(true);
  const [topic, setTopic] = useState("intro");

  return (
    <div className="main-page">
      <Header />
      <TopicsBar />

      <div className="layout">
        <div className="sidebar-wrapper">
          <div className="sidebar-toggle" onClick={() => setOpen(!open)}>
            {open ? "❮" : "❯"}
          </div>

          <Sidebar className={open ? "sidebar open" : "sidebar closed"} />
        </div>

        <main className={`content ${open ? "sidebar-open" : "sidebar-closed"}`}>
          <ReactSection topic={topic} />
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
