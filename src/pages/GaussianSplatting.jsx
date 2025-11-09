// src/pages/GaussianSplatting.jsx
function GaussianSplatting() {
  return (
    <div className="container">
      <div className="card-deck mx-auto">
        <div className="card">
          <div className="card-body">

            <h1>What is a 'Gaussian Splat'?</h1>
            <br />

            <h4>A Gaussian</h4>
            <br />
            <p>
              A Gaussian distribution, otherwise known as the normal distribution, is a function. This isn't like the squiggly type of signals we typically see in audio; 
              it's more of a bell shape (another name for it is the bell curve).
              <br />
              <br />
              <img src="normal_curve.jpg" alt="Card image" className="img-fluid" />
              <br />
              <br />
              What is so interesting and so useful to statisticians about this bell curve is how often it crops up in nature. 
              If we graph the heights of men in the UK, the more measurements we take from different individuals, the more a pattern will emerge. 
              We will find that the majority of men's heights converge on an average height, and this average height specifies a point of symmetry in our function. 
              There will be both taller and shorter people than the average height, but the more they deviate from the average, the fewer examples there will be. 
              When we measure things, this distribution occurs over and over again. It is fundamental to the way we read the world, and so perfect for volumetric capture and computer graphics. 
              Great video from StatQuest here: 
              <a href="https://www.youtube.com/watch?v=rzFX5NWojp0l">https://www.youtube.com/watch?v=rzFX5NWojp0l</a>
              <br />
              <br />
            </p>

            <h4>A Splat</h4>
            <br />
            <p>
              The splatting part of the name relates to how a 3D asset is rendered to the screen.
              <br />
              <br />
              Ultimately this comes down to a perspective and visibility problem: what is our perspective on the 3D object and what parts of the 3D object are visible to us.
              <br />
              <br />
              Two algorithms that seek to solve the perspective and visibility problems are 'Ray Tracing' and 'Rasterization'.
              <br />
              <br />
              Rasterization is an old technique essential for 3D computer graphics, while Ray Tracing is newer and requires greater computation (GPUs). 
              It aligns closely with how the human eye works and does a very good job rendering objects with complex lighting conditions and reflections.
              <br />
              <br />
              The following <a href="https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm.html">
                link
              </a> describes the two processes; pay attention to the pseudo code for each algorithm.
              <br />
              <br />
              Notice the outer and inner loops: the outer loop in ray tracing iterates over all pixels ('image centric'), while the outer loop in rasterization iterates over all triangles ('object centric').
              <br />
              <br />
              Rasterization...
            </p>

            <figure>
              <blockquote cite="https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm.html">
                "..starts with the geometry and works its way back to the image, as opposed to the ray tracing approach, which begins with the image and works its way into the scene."
              </blockquote>
              <figcaption>—Scratchapixel,
                <cite>
                  https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm.html
                </cite>
              </figcaption>
            </figure>
            <br />
            <br />

          </div>
        </div>
      </div>
    </div>
  );
}

export default GaussianSplatting;
