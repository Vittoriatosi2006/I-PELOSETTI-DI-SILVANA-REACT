function NavbarTop() {
  return (
    <nav className="prima-navbar">
      <div className="container-nav">
        <div className="email-wrapper">
          <img
            className="icona-email"
            src="/icone-navbar/icona-email.svg"
            alt="email"
          />

          <span className="email">ipelosettidisilvanaonlus@gmail.com</span>
        </div>

        <div className="social">
          <a href="#">
            <img src="/icone-navbar/icona-facebook.svg" alt="facebook" />
          </a>

          <a href="#">
            <img src="/icone-navbar/icona-instagram.svg" alt="instagram" />
          </a>

          <a href="#">
            <img src="/icone-navbar/icona-linkedin.svg" alt="linkedin" />
          </a>

          <a href="#">
            <img src="/icone-navbar/icona-x.svg" alt="x" />
          </a>

          <a href="#">
            <img src="/icone-navbar/icona-tiktok.svg" alt="tiktok" />
          </a>

          <a href="#">
            <img src="/icone-navbar/icona-youtube.svg" alt="youtube" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarTop;
