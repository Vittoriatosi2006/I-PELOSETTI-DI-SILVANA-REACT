function NavbarMain() {
  return (
    <nav className="seconda-navbar">
      <img
        className="icona-principale"
        src="/icone-navbar/icona-principale.png"
        alt="logo"
      />

      <div className="nav-links">
        <button>Home</button>

        <button>Chi siamo</button>

        <select>
          <option>In cerca di casa</option>
          <option>Cani urgenti</option>
          <option>Cani in stallo al Nord</option>
          <option>Cani anziani adozione del cuore</option>
        </select>

        <button>Affido temporaneo</button>

        <button>Testimonianze</button>

        <select>
          <option>Come aiutarci</option>
          <option>Contatti</option>
          <option>Dona €1 al mese</option>
          <option>5 per mille</option>
        </select>
      </div>

      <button className="donazioni">Donazioni</button>
    </nav>
  );
}

export default NavbarMain;
