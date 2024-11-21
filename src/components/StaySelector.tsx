const StaySelector = () => {

  return (
    <div className="site-section-sm">
      <div className="container">
        <div className="row">
          <div className="p-4 bg-white">
            <h5 className="h5 text-black mb-3">Dostępne terminy</h5>

            <p className="mb-4 text-black">
              Terminy niedostępne są wyszarzone na poniższym kalendarzu. Obecnie
              nie możemy przyjąć pobytów krótszych niż 5 noclegów.
            </p>
            <p>
              W dniu przyjazdu, jeżeli nie ustalono indywidualnie, apartament
              gotowy jest do przyjecia gości od godziny 16.
            </p>
            <p>
              Jeżeli nie ustalono indywidualnie, apartament musi być opuszczony
              do godziny 11.
            </p>
            <p>
              Opłata rezerwacyjna: 20% całości kwoty należnej za cały pobyt do
              zapłaty w dniu dokonania rezerwacji. Całość za pobyt do zapłaty do
              5 dni przed pobytem. Bezpłatne anulowanie rezerwacji możliwe do 5
              dni przed rozpoczęciem pobytu.
            </p>
            <p>
              Pobieramy 300 złotych depozytu na poczet pokrycia ewentualnych
              szkód.
            </p>

            <a href="files/Wakacje4U_Polityka_Prywatnosci.pdf" target="_blank">
              Polityka prywatności.
            </a>

            <p className="mb-4 text-black">
              Aby zerezerwować pobyt proszę o telefon lub wysłanie emaila na
              adres{" "}
              <a
                href="mailto:wakacje4u@gmail.com?subject=Rezerwacja apartamentu w Unieściu&body=Jestem zainteresowany wynajęciem apartamentu w terminie od ... do ..."
                title="Rezerwacja apartamentu w Unieściu"
              >
                wakacje4u@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaySelector;
