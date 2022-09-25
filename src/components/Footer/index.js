import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="d-flex align-items-center justify-content-center p-1">
      <a href="https://github.com/ommarkhawaja1" class='icon'>
        <FaGithub size={40}></FaGithub>
      </a>
      <a href="https://www.linkedin.com/in/ommar-khawaja-84579a235/" class='icon'>
        <FaLinkedinIn size={40}></FaLinkedinIn>
      </a>
      <a href="mailto: ommarkhawaja1@gmail.com" class='icon'>
        <AiOutlineMail size={40}></AiOutlineMail>
      </a>
    </footer>
  );
}

export default Footer;
