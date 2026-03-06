function InfoCards() {
  return (
    <div className="tre-card">
      {/* CARD 1 */}
      <div className="card-affido">
        <img
          src="/foto-card/icona-affido.svg"
          alt="Icona affido temporaneo"
          className="icona-affido"
        />

        <div className="card-contenuto1">
          <div className="affido-titolo">Affido temporaneo/stallo</div>

          <div className="affido-testo">
            Con l’affido temporaneo (o stallo) potrai prenderti cura
            dell’animale e
            <strong> fargli conoscere il calore di una casa</strong> e la vita
            in un ambiente sano in attesa di un’adozione definitiva.
          </div>

          <button className="affido-bottone">Scopri come fare</button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="card-stallo">
        <img
          src="/foto-card/icona-stallo.svg"
          alt="Icona stallo"
          className="icona-stallo"
        />

        <div className="card-contenuto2">
          <div className="stallo-titolo">Stallo con possibile adozione</div>

          <div className="stallo-testo">
            Se ti dovessi innamorare del tuo pelosetto in affidamento, anche se
            hai scelto il percorso dell’affido temporaneo, puoi sempre
            <strong> decidere di adottarlo definitivamente!</strong>
          </div>

          <button className="stallo-bottone">Leggi di più</button>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="card-aiutaci">
        <img
          src="/foto-card/icona-aiutaci.svg"
          alt="Icona aiutaci"
          className="icona-aiutaci"
        />

        <div className="card-contenuto3">
          <div className="aiutaci-titolo">Aiutaci con i social</div>

          <div className="aiutaci-testo">
            <span>
              Puoi aiutarci dedicando qualche ora durante la settimana a
            </span>

            <strong> far conoscere i nostri pelosetti sul web!</strong>

            <span>
              {" "}
              Il nostro obiettivo è trovare casa, anche temporanea, a queste
              anime bisognose.
            </span>
          </div>

          <button className="aiutaci-bottone">Unisciti a noi</button>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
