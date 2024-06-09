import SiteSection from "../common/SiteSection";

const Kitchen = () => {
  return (
    <SiteSection>
      <div className="col-lg-6">
        <img
          src="images/img_kitchen_2.jpg"
          alt="Kuchnia"
          className="img-fluid"
          style={{ marginBottom: 5 }}
        />
      </div>
      <div className="col-lg-6">
        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
          <h2 className="mb-5">Kuchnia</h2>
          <p>
            Funkjonalna kuchnia wyposażona w płytę indukcyjną, zmywarkę i
            lodówkę w zabudowie.
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
