function HeroCards() {
  return (
    <main>
      <div className="container-card">
        <div className="card">
          <img src="/foto-card/card1.jpg" alt="card1" />

          <div className="card-text">
            <h2>Una cosa per ogni pelosetto</h2>

            <h3>
              <strong>
                I Pelosetti di Silvana è un’organizzazione di volontariato
              </strong>{" "}
              che, con passione e dedizione, si impegna ogni giorno a offrire
              supporto e trovare una casa per tutti quei pelosetti che sono
              stati lasciati soli.
            </h3>

            <button className="adotta">Adotta un pelosetto</button>
          </div>
        </div>

        <div className="card">
          <img src="/foto-card/card2.jpg" alt="card2" />

          <div className="card-text">
            <h2>Fai la differenza con una donazione.</h2>

            <h3>
              Ogni storia per noi è un pezzo di cuore.
              <strong> Aiutaci a prendercene cura!</strong>
            </h3>

            <button className="dona-ora">Dona ora</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroCards;
