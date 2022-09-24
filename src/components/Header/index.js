import React, { useState } from "react";
import Nav from "../Navigation";
import About from "../pages/About";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header className="d-flex align-items-center justify-content-between p-3">
        <h1 aref="/">Ommar Khawaja</h1>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      </header>
      <main>
        <About></About>
      </main>
    </>
  );
}