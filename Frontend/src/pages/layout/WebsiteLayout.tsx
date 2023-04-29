import React from 'react'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from "react";

const WebsiteLayout = () => {
    const [aboutMe, setaboutMe] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/api/aboutme")
        .then((response) => response.json())
        .then((data) => setaboutMe(data));
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Giao diện</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#/Admin">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Admin/Projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Admin/Categorys">Categorys</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Admin/Skills">Skill</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Admin/AboutMe">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Admin/Testmonial">Testmonial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Admin/Contacts">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/Admin/Blogs">Blogs</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        


            <main>
                <Outlet />
            </main>
            <div className="container">
        <footer className="footer">       
            <p className="mb-0">Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a  href="">Zuwno</a></p>
            <div className="social-links text-right m-auto ml-sm-auto">
                <a  href="" className="link"><i className="ti-facebook"></i></a>
                <a  href="" className="link"><i className="ti-twitter-alt"></i></a>
                <a  href="" className="link"><i className="ti-google"></i></a>
                <a  href="" className="link"><i className="ti-pinterest-alt"></i></a>
                <a  href="" className="link"><i className="ti-instagram"></i></a>
                <a  href="" className="link"><i className="ti-rss"></i></a>
            </div>
        </footer>
    </div>
        </div>
    )
}

export default WebsiteLayout