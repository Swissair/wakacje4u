import { useState } from "react";
import { addDays } from "date-fns";
import { pl } from "date-fns/locale";
import { DateRange } from "react-date-range";
import { IRange, toIsoRange } from "../models/Domain";
import { getDaysWithinRange } from "../models/DateHelpers";
import { isMobile } from "react-device-detect";

const StaySelector = () => {
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [unavailableDates] = useState<Date[]>(
    getDaysWithinRange({
      startDate: new Date("2024-06-22T14:48:00.000Z"),
      endDate: new Date("2024-07-07T14:48:00.000Z"),
      key: "selection",
    })
  );
  const minStay = useState<number>(5);

  const [isSelectionValid, setIsSelectionValid] = useState<boolean>(true);

  const setSelectedDates = (ranges: IRange[]) => {
    const range = ranges[0];
    const daysWithinSelectedRange = getDaysWithinRange(range);
    if (daysWithinSelectedRange.length < minStay[0]) {
      setIsSelectionValid(false);
    } else {
      setIsSelectionValid(true);
      setSelectedRange([toIsoRange(range)]);
    }
  };

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

            <h5 className="h5 text-black mb-3">Cennik</h5>
            <ul>
              <li className="">czerwiec  2024 - 240 zł brutto za noc</li>
              <li className="">lipiec i sierpień 2024 - 390 zł brutto za noc</li>
              <li className="">wrzesień 2024 - 240 zł brutton za noc</li>
              <li className="">
                Późniejsze terminy są jeszcze niedostępne.
              </li>
            </ul>

            {!isSelectionValid && (
              <p className="mb-4 text-black">
                Wybrany okres jest krótszy niż minimalny czas pobytu -{" "}
                {minStay[0]} dni
              </p>
            )}
          </div>

          <DateRange
            dateDisplayFormat={"d MMMM yyyy"}
            disabledDates={unavailableDates}
            minDate={new Date()}
            locale={pl}
            months={3}
            direction={isMobile ? "vertical" : "horizontal"}
            editableDateInputs={false}
            // onChange={(item) => setState([item.selection])}
            onChange={(item) => setSelectedDates([item.selection as IRange])}
            moveRangeOnFirstSelection={false}
            ranges={selectedRange}
          />
        </div>
      </div>
    </div>
  );
};

export default StaySelector;
