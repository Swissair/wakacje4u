const Location = () => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="images/img_map.jpg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
              <h2 className="mb-5">Lokalizacja</h2>
              <p>
                Apartament znajduje się w odległości około 50 metrów od jeziora
                oraz 400 metrów od zejścia na plażę.
              </p>
              <p>
                Tuż przy Sea & Lake prowadzi trasa rowerowa wiodąca do Mielna i
                dookoła jeziora. Więcej tras znajdziesz na{" "}
                <a
                  href="https://www.komoot.com/pl-pl/discover/gmina_Mielno/@54.2755566,16.1378744/tours?sport=hike&map=true&max_distance=13000"
                  target="blank"
                >
                  stronie
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
