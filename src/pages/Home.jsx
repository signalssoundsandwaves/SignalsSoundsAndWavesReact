import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container my-5">
      {/* First row of cards */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <img
                src="/wim_linkedin.jpeg"
                alt="Card image"
                className="img-fluid float-end mb-3"
              />
              <h4 className="card-title">About Signals Sounds And Waves</h4>
              <p className="card-text">
                Signals, Sounds and Waves is written by me, William Eden. At university I completed a degree in Sound
                Engineering and Production and achieved a 1st; since then I have worked across a variety of different media.
                I felt that a website could act as a portfolio for some of the work I have done and would be a good way of
                solidifying some of the concepts I have learnt. I hope this to be an informative and intuitive read.
              </p>
              <Link to="/Cv" className="card-link">My CV..</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Why Signals Sounds And Waves?</h4>
              <p className="card-text">
                Signals, Sounds and Waves — sounds snappy right? Well, there's more to it than that. Here I'll talk about
                what the terms mean in the context of a typical recording setup, and link to lots of useful information.
              </p>
              <Link to="/Why" className="card-link">Read more..</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Plugins!</h4>
              <p className="card-text">
                Here you will find various plugins that I have developed. Please download and enjoy — any feedback or QA is much appreciated.
              </p>
              <Link to="/Plugins" className="card-link">Read more..</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="my-5"></div>

      {/* Second row of cards */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Gaussian Splatting</h4>
              <img
                src="/Gaussian.png"
                alt="Card image"
                className="img-fluid float-end mb-3"
              />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">What is a Gaussian Splat?</h4>
              <Link to="/GaussianSplatting" className="card-link">Read more..</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Splat-aloguing</h4>
              <p className="card-text">
                <a
                  href="https://splatology.myportfolio.com/splatalogue"
                  className="card-link"
                >
                  Here
                </a>{' '}
                you will find collections that I have splatted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
