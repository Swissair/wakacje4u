const Sleeping = () => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="images/img_bed_3.jpg"
              alt="Image"
              className="img-fluid"
              style={{ marginBottom: 5 }}
            />
          </div>
          <div className="col-lg-6">
            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
              <h2 className="mb-5">Spanie</h2>
              <p>
                Apartament zapewnia spanie na komfortowym dwuosobowym łóżku o
                szerokości 160 cm oraz wygodnej, rozkłądanej i wyposażonej we
                włoski stelaż sofie. Sofa ma 140 cm szerokości.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <img src="images/img_sofa.jpg" alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sleeping;
