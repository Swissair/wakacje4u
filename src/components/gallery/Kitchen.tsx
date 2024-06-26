import DashedUnorderedList from "../common/DashedUnorderedList";
import SiteSection from "../common/SiteSection";

const Kitchen = () => {
  const kitchenUtensils: string[] = [
    "Czajnik elektryczny",
    "Talerze",
    "Sztućce",
    "Szklanki, kubki, kieliszki i lampki do wina",
    "Garnki, patelnie, miski i inne przybory do gotowania"
  ];

  return (
    <SiteSection>
      <div className="col-lg-6">
        <img
          src="images/img_kitchen_2.jpg"
          alt="Aneks kuchenny"
          className="img-fluid"
          style={{ marginBottom: 5 }}
        />
      </div>
      <div className="col-lg-6">
        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
          <h2 className="mb-5">Aneks kuchenny</h2>
          <p>
            Funkcjonalna kuchnia wyposażona w płytę indukcyjną, zmywarkę i
            lodówko-zamrażarkę w zabudowie.
          </p>
          <p>
            <span>Dodatkowe wyposażenie:</span>
            <ul
              className="list-unstyled"
              style={{ textAlign: "left" }}
              title="Dodatkowe wyposażenie"
            ></ul>
            <DashedUnorderedList listItems={kitchenUtensils} />
          </p>
        </div>
      </div>

      <div className="col-lg-6 ">
        <img
          src="images/img_dishwasher.jpg"
          alt="Image"
          className="img-fluid"
        />
      </div>
    </SiteSection>
  );
};

export default Kitchen;
