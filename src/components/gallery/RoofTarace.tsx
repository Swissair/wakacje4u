const RoofTarace = () => {
  return (
    <>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="images/img_swimingpool_lake_view.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                <h2 className="mb-5">Taras dachowy z basenem</h2>
                <p>
                  Na dachu znajduje się ogólnodostępny taras z widokiem na
                  jezioro Jamno i otaczającą zieleń.
                </p>
                <p>
                  {" "}
                  W przygotowaniu jest również basen, który niedługo będzie
                  oddany do użytku gości apartamentu. Obecnie jest wyłączony z
                  użytkowania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="images/img_roof_view.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="images/img_immersive_swimming_pool.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoofTarace;
