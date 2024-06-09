import { Link } from "react-router-dom";
import "/src/assets/css/aos.css";
import "/src/assets/css/style.css";

const Home = () => {
  // const imageUrl = new URL(
  //   IMG_BASE_URL.toString() + "hero_bg_lake_view_1.jpg",
  //   import.meta.url
  // );

  // dev http://localhost:5173/images/hero_bg_lake_view_1.jpg

  // for dev
  // const imageUrl = new URL("/images/hero_bg_lake_view_1.jpg", import.meta.url);

  // for production
  const imageUrl = new URL("/images/hero_bg_lake_view_1.jpg", import.meta.url);

  // console.log(imageUrl);

  return (
    <>
      {/* <img src={imageUrl.href} alt="test" /> */}
      <div
        className="site-blocks-cover overlay"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-8 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="mb-4">Twój apartament nad morzem i jeziorem</h1>
              <p className="mb-5">Unieście, Sea & Lake, ul. Sosnowy Las 15</p>
              <p>
                <Link to="/gallery" className="btn btn-primary px-5 py-3">
                  Zdjęcia
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="featured-property-half d-flex">
          <h1>Hello</h1>
        </div>
      </div>

      <div className="bg-primary" data-aos="fade">
        <div className="container">
          <h1>TEST</h1>
        </div>
      </div> */}
    </>
  );
};

export default Home;
