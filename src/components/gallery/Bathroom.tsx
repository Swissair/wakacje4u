import SiteSection from "../common/SiteSection";

const Bathroom = () => {
  return (
    <>
      <SiteSection>
        <div className="col-lg-6">
          <img
            src="images/img_bathroom_1.jpg"
            alt="Image"
            className="img-fluid"
            style={{ marginBottom: 5 }}
          />
        </div>
        <div className="col-lg-6">
          <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
            <h2 className="mb-5">Łazienka</h2>
            <p>
              Łazienka z niskoprogowym prysznicem z klasyczną słuchawką oraz
              deszczownicą.
            </p>
            <p>W zabudowie znajduje się pralka</p>
            <p>Zapewniamy ręczniki i suszarkę</p>
          </div>
        </div>

        <div className="col-lg-6">
          <img
            src="images/img_bathroom_shower.jpg"
            alt="Image"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6">
          <img
            src="images/img_bathroom_shower_2.jpg"
            alt="Image"
            className="img-fluid"
            style={{ marginBottom: 5 }}
          />
        </div>

        <div className="col-lg-6">
          <img
            src="images/img_washing_machine.jpg"
            alt="Image"
            className="img-fluid"
          />
        </div>
      </SiteSection>
    </>
  );
};

export default Bathroom;
