function Ztransform() {
    return (
        <div className="container my-5">
            {/* Card for the entire content */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h2>The Z Transform</h2>

                            <p>
                                The Discrete Fourier Transform (DFT) analyzes which frequencies are
                                present in a signal by evaluating it on the <strong>unit circle</strong>{" "}
                                in the complex plane.
                            </p>

                            <p>
                                The <strong>Z-transform</strong> is a more general tool. Instead of
                                restricting ourselves to points on the unit circle, the Z-transform
                                allows us to evaluate a signal at <em>any point</em> in the complex
                                plane.
                            </p>

                            <p>
                                It is defined as:
                            </p>

                            <p>
                                <strong>
                                    X(z) = Σ x[n] z<sup>-n</sup>
                                </strong>
                            </p>

                            <p>
                                Here, z is a complex number that can be written as:
                            </p>

                            <p>
                                <strong>z = r e<sup>jω</sup></strong>
                            </p>

                            <p>
                                This means every point in the complex plane has:
                            </p>

                            <ul>
                                <li>
                                    A <strong>magnitude</strong> r (distance from the origin)
                                </li>
                                <li>
                                    An <strong>angle</strong> ω (rotation around the origin)
                                </li>
                            </ul>

                            <div className="text-center my-4">
                                <img
                                    src="/a_clean_technical_diagram_of_the_complex_z_plane.png"
                                    alt="Complex Z Plane showing unit circle and DFT region of convergence"
                                    className="img-fluid"
                                    style={{ maxWidth: "600px" }}
                                />
                            </div>

                            <h4>How It Relates to the DFT</h4>

                            <p>
                                The <strong>unit circle</strong> is the set of points where |z| = 1.
                                When we restrict the Z-transform to this circle:
                            </p>

                            <p>
                                <strong>z = e<sup>jω</sup></strong>
                            </p>

                            <p>
                                we obtain the <strong>Discrete-Time Fourier Transform (DTFT)</strong>.
                                When we sample specific points on that circle, we get the{" "}
                                <strong>DFT</strong>.
                            </p>

                            <p>
                                In other words:
                            </p>

                            <p>
                                <strong>
                                    Z-transform → DTFT (unit circle) → DFT (sampled points)
                                </strong>
                            </p>

                            <h4>Intuition</h4>

                            <ul>
                                <li>On the unit circle: pure oscillation (frequency analysis).</li>
                                <li>Inside the circle (|z| &lt; 1): components decay over time.</li>
                                <li>Outside the circle (|z| &gt; 1): components grow over time.</li>
                            </ul>

                            <p>
                                The Z-transform therefore tells us not only what frequencies are
                                present, but also whether parts of a system grow, decay, or remain
                                stable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ztransform;
