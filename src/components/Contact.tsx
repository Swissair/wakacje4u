import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import StaySelector from "./StaySelector";

const Contact = () => {
  const imageUrl = new URL("/images/hero_bg_boats_1b.jpg", import.meta.url);

  return (
    <>
      <div
        className="site-blocks-cover inner-page-cover overlay"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-7 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="text-white">Skontaktuj się</h1>
              <p>Sprawdź dostępność apartamentu i zarezerwuj pobyt</p>
            </div>
          </div>
        </div>
      </div>

      <StaySelector />

      <div className="site-section-sm border-bottom">
        <div className="container">
          <div className="row">
            <div className="p-4 bg-white">
              <h3 className="h5 text-black mb-3">Dane kontaktowe</h3>
            </div>
          </div>
          <div className="row">
            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold text-black">Adres</p>
              <p className="mb-4 text-black">Wakacje 4U Piotr Skirski</p>
            </div>

            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold text-black">Telefon</p>
              <p className="mb-4">(+48) 788795764</p>
            </div>

            <div className="p-4 mb-3 bg-white">
              <p className="mb-0 font-weight-bold text-black">Email</p>
              <p className="mb-0">
                <a
                  href="mailto:wakacje4u@gmail.com?subject=Rezerwacja apartamentu w Unieściu&body=Jestem zainteresowany wynajęciem apartamentu w terminie od ... do ..."
                  title="Rezerwacja apartamentu w Unieściu"
                >
                  wakacje4u@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
