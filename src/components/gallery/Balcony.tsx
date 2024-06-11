import SiteSection from "../common/SiteSection";

const Balcony = () => {
  return (
    <SiteSection>
      <div className="col-lg-6">
        <img src="images/img_balcony.jpg" alt="Image" className="img-fluid" />
      </div>
      <div className="col-lg-6">
        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
          <h2 className="mb-5">Balkon</h2>
          <p>
            Przestronny balkon z widokiem na brzozowy las i częściowym widokiem
            na jezioro Jamno.
          </p>
          <p>
            {" "}
            Zrelaksuj się w wygodnym fotelu, rozkoszuj się kawą i lekturą
            słuchając śpiewu ptaków lub zjedz posiłek na świeżym poowietrzu.
          </p>
        </div>
      </div>

      <div className="col-lg-6">
        <img
          src="images/img_balcony_trees.jpg"
          alt="Image"
          className="img-fluid"
        />
      </div>
    </SiteSection>
  );
};

export default Balcony;
