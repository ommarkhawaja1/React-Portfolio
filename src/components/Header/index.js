import React, { useState } from "react";
import Nav from "../Navigation";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const Page = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header className="d-flex align-items-center justify-content-between p-3">
        <h1 aref="/">Alexus Gray</h1>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      </header>
      <main>
        <Page />
      </main>
    </>
  );
}
