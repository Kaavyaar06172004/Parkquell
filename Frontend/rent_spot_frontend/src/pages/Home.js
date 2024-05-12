import React from "react";
import "./../css/home.scss";

function Home() {
  return (
    <div>
      <div className="banner">
        <div className="overlay">
          <h1>
            Looking for parking? <br />{" "}
            <span>You've landed at the right place</span>
          </h1>
        </div>
      </div>

      <div className="container mt-5">
        <section className="my-5">
          <h2>How ParkQuell Works</h2>

          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <div className="card p-4">
                <img
                  src="./map.avif"
                  className="services-card-icon"
                  alt=""
                ></img>
                <div className="mt-4">
                  <h3>Search</h3>
                  <p className="mt-3">
                    Search for a parking spot according to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="card p-4">
                <img
                  src="./book.png"
                  className="services-card-icon"
                  alt=""
                ></img>
                <div className="mt-4">
                  <h3>Book</h3>
                  <p className="mt-3">
                    Reserve Parking spot and pay desired amount!
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="card p-4">
                <img
                  src="./parking.png"
                  className="services-card-icon"
                  alt=""
                ></img>
                <div className="mt-4">
                  <h3>Park</h3>
                  <p className="mt-3">
                    Park your car safely with <strong>ParlQuell</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-5">
          <h2 className="mt-5">Testimonials</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="testimonial-card p-3 rounded text-center">
                <img src="./profile-1.jpeg" alt="user avatar" />
                <p className="mt-4 mb-3">
                  "Living in a bustling city like Mumbai, finding a parking spot
                  used to be a daily nightmare. Thanks to the ParkQuell app, my
                  life has become so much easier! Now, I can effortlessly book a
                  parking spot in advance, saving me valuable time and
                  eliminating the stress of circling around endlessly in search
                  of parking. The app's intuitive interface and seamless booking
                  process make it a must-have for anyone navigating India's
                  crowded streets. Highly recommended!"
                </p>
                <span>
                  <strong>Muqeemudeen M</strong> Manager at Google
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-card p-3 rounded text-center">
                <img src="./profile-1.webp" alt="user avatar" />
                <p className="mt-4 mb-3">
                  "As a frequent traveler, I rely on the ParkQuell app whenever
                  I'm on the road in India. Whether it's for a quick stop in the
                  city or a long-term parking solution at the airport, this app
                  has never let me down. With its wide network of parking
                  facilities across the country, I can always find a convenient
                  and secure spot for my vehicle, no matter where my journey
                  takes me. Efficient, reliable, and incredibly convenient –
                  this app has truly revolutionized the way I park!"
                </p>
                <span>
                  <strong>Saif</strong> Co-founder at Tim Hortons
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
