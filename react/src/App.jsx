import React, { useState, useEffect } from "react";
import { FaGithub, FaEnvelope, FaGlobe, FaMoon, FaSun } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      {/* Cabeçalho */}
      <header className="header" data-aos="fade-down">
        <div className="header-background">
          <h1 className="logo" data-aos="zoom-in">Luizfelippe.Dev</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">Sobre</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
          </button>
        </div>
      </header>

      {/* Seção Sobre */}
      <section id="about" className="about-section" data-aos="fade-right">
        <div className="neon-border">
          <h2>Sobre Mim</h2>
          <p>
            Sou desenvolvedor full-stack com 2 anos de experiência acadêmica,
            especializado em criar interfaces modernas e sistemas backend eficientes.
          </p>
        </div>
      </section>

      {/* Seção Projetos */}
      <section id="projects" className="projects-section" data-aos="fade-up">
        <h2 className="section-title">Meus Projetos</h2>
        <div className="projects-grid">
          {/* Projeto Público */}
          <div className="project-card neon-border" data-aos="zoom-in">
            <h3>Projeto 1</h3>
            <p>Projeto em Desenvolvimento.</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} /> Ver no GitHub
            </a>
          </div>
          
          {/* Projeto Privado */}
          <div className="project-card neon-border" data-aos="zoom-in">
            <h3>Projeto Privado</h3>
            <p>Este projeto é privado e não possui link público disponível.</p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaGlobe size={24} color="gray" title="Privado" />
              <span style={{ fontSize: "1rem", color: "gray" }}>Acesso restrito</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contact" className="contact-section" data-aos="fade-left">
        <h2 className="section-title">Entre em Contato</h2>
        <div className="contact-buttons">
          <a href="mailto:luizfelippeandrade@outlook.com" className="contact-button">📧 Enviar Email</a>
          <a href="https://discord.gg/8M6P9vNcgE" className="contact-button">💬 Discord</a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2024 Luiz Felippe. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
