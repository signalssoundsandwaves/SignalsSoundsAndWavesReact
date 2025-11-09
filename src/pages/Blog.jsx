import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="container">
      <div className="card-deck mx-auto">
        <div className="card">
          <div className="card-body">
            <div className="row">

              <div className="col-lg-10 col-md-10 mx-auto">
                <div className="post-preview">
                  <a href="final_updated_9.23.pdf">
                    <h2 className="post-title">
                      Digital Filter Design: Linear Phase vs Minimum Phase FIR
                    </h2>
                    <h6 className="post-subtitle">
                      BIRMINGHAM CITY UNIVERSITY
                      1st Class BSc (Hons) Sound Engineering and Production
                    </h6>
                  </a>
                  <p className="post-meta">
                    Posted by <a href="#">Signals Sounds and Waves</a> on 3/12/2019
                  </p>
                </div>
              </div>

              <div className="col-lg-10 col-md-10 mx-auto">
                <div className="post-preview">
                  <Link to="/DAFX">
                    <h2 className="post-title">
                      Digital Audio Effects: Matlab
                    </h2>
                    <h6 className="post-subtitle">
                      BIRMINGHAM CITY UNIVERSITY
                      1st Class BSc (Hons) Sound Engineering and Production
                    </h6>
                  </Link>
                  <p className="post-meta">
                    Posted by <a href="#">Signals Sounds and Waves</a> on 3/12/2019
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
