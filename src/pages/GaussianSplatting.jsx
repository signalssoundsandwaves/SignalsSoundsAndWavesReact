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
              A Gaussian distribution, otherwise known as the normal distribution, is a smooth mathematical function.
              Rather than sharp edges or jagged shapes, it forms a soft bell curve.
              <br /><br />
              <img src="normal_curve.jpg" alt="Normal distribution curve" className="img-fluid d-block mx-auto" />
              <br /><br />
              What makes this curve so useful is how often it appears in nature. If we measure the heights of many
              individuals, most values cluster around an average, with fewer and fewer values the further we move away
              from that centre. The Gaussian describes this pattern mathematically.
              <br /><br />
              In computer graphics, this smooth falloff is extremely useful. Instead of representing something with
              hard edges, we can represent it as a soft region of influence that fades gradually outward — much like
              light or density in the real world.
              <br /><br />
              Great video from StatQuest here:{" "}
              <a href="https://www.youtube.com/watch?v=rzFX5NWojp0l">
                https://www.youtube.com/watch?v=rzFX5NWojp0l
              </a>
              <br /><br />
            </p>

            <h4>The Rendering Problem: Perspective and Occlusion</h4>
            <br />
            <p>
              Before explaining splatting, we need to understand the core problem of rendering.
              <br /><br />
              When we convert a 3D scene into a 2D image, we must solve two fundamental problems:
              <br /><br />
              <strong>1. Perspective</strong> — From what viewpoint are we looking at the scene? Objects further
              away should appear smaller. Parallel lines may converge. The 3D world must be projected correctly
              onto a flat screen.
              <br /><br />
              <strong>2. Occlusion</strong> — Which objects are visible, and which are hidden behind others?
              If one object sits in front of another, the one behind should not be visible.
              <br /><br />
              Two major rendering approaches solve these problems in different ways: Rasterization and Ray Tracing.
            </p>

            <h4>Rasterization vs Ray Tracing</h4>
            <br />

            <br /><br />
              <img src="rasterVsray.jpg" alt="rasterVsray" className="img-fluid d-block mx-auto" />
              <br /><br />
            <p>
              <strong>Rasterization</strong> begins with the geometry in the scene (usually triangles).
              Each triangle is projected onto the screen according to perspective rules, and the pixels it covers
              are filled in. Depth buffers are used to determine occlusion — whichever triangle is closest to the
              camera at a pixel wins.
              <br /><br />
              This approach is <em>object-centric</em>: it loops over objects first, then determines which pixels
              they affect.
              <br /><br />
              <strong>Ray Tracing</strong> works in the opposite direction. It begins with the image.
              For every pixel on the screen, a ray is cast into the 3D scene. The renderer calculates what that ray
              intersects first, solving both perspective and occlusion by simulating how light travels.
              <br /><br />
              This approach is <em>image-centric</em>: it loops over pixels first, then searches for geometry.
              <br /><br />
              Rasterization is extremely fast and ideal for real-time graphics.
              Ray tracing is more physically accurate but computationally expensive. If you have ever used blender think of Eevee render engine (raster) versus Cycles render engine (ray tracing). Ray tracing is more commonly used for offline rendering, such as in movies or high-quality stills.
              <br /><br />
              The following{" "}
              <a href="https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm.html">
                link
              </a>{" "}
              describes the two processes; pay attention to the pseudo code for each algorithm.
              <br /><br />
              Notice the outer and inner loops: the outer loop in ray tracing iterates over all pixels
              ('image centric'), while the outer loop in rasterization iterates over all triangles
              ('object centric').
            </p>

            <br /><br />

            <h4>A Splat</h4>
            <br />
            <p>
              Traditional rasterization renders hard-edged triangles.
              A <strong>splat</strong> is different.
              <br /><br />
              <img src="gausian.jpg" alt="splat" className="img-fluid d-block mx-auto" />
              <br /><br />
              <br /><br />
              Instead of projecting a sharp triangle onto the screen, we project a soft blob.
              Think of throwing a small drop of paint onto a surface — it spreads out smoothly rather
              than forming crisp edges.
              <br /><br />
              Mathematically, that soft blob is often represented using a Gaussian function.
              <br /><br />
              When rendered, each blob contributes colour to nearby pixels, with influence that fades
              smoothly from its centre outward. Occlusion is handled by depth ordering and blending
              these blobs correctly.
            </p>

            <h4>Gaussian Splatting</h4>
            <br />
            <p>
              Gaussian Splatting represents a 3D scene as thousands or even millions of small 3D Gaussians.
              <br /><br />
              Each Gaussian has:
              <br />
              • A position in 3D space  
              <br />
              • A size and orientation  
              <br />
              • A colour  
              <br />
              • An opacity  
              <br /><br />
              During rendering, each 3D Gaussian is projected into screen space according to perspective rules.
              It becomes a 2D elliptical Gaussian that “splats” onto nearby pixels.
              <br /><br />
              The renderer blends many overlapping splats together while resolving depth so that closer
              splats occlude those behind them.
              <br /><br />
              In this way, Gaussian Splatting combines ideas from rasterization (projecting primitives
              onto the screen) with smooth volumetric representations more commonly associated with
              ray-based rendering.
              <br /><br />
              Instead of rendering triangles, we render soft, volumetric blobs — and together,
              they reconstruct a detailed 3D scene in real time.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default GaussianSplatting;