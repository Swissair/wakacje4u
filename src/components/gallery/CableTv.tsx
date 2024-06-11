const CableTv = () => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="images/img_tv.jpg" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
              <h2 className="mb-5"> Wi-Fi i Kablówka</h2>
              <p>
                Darmowe Wi-Fi umożliwia relaks z Netflixem lub pracę zdalną.
              </p>
              <p>
                Apartament wyposażony jest w 65 calowy telewizor z około 110
                kanałami TV.
              </p>
              <p>
                Pełna lista programów dostępna jest na{" "}
                <a
                  href="https://www.tkk.net.pl/index.php/telewizja-cyfrowa/"
                  target="blank"
                >
                  {" "}
                  stronie{" "}
                </a>{" "}
                Telewizji Kablowej Koszalin - pakiet Srebrny.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CableTv;
