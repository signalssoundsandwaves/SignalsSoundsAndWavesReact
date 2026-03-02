// src/pages/SignalsSoundsWaves.jsx
function SignalsSoundsWaves() {
  return (
    <div className="container my-5">

      {/* Card for the entire content */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">

              <h1 className="mb-4">Why Signals, Sounds and Waves?</h1>

              {/* Sounds Section */}
              <div className="mb-4">
                <h4>Sounds</h4>
                <p>
                  We all know what sound is — it’s impossible to avoid. In fact, there’s an entire
                  industry dedicated to trying to block it out. Sound isolation is expensive,
                  and doing it well is surprisingly difficult.
                </p>
                <p>
                  Sound is a physical phenomenon. It exists in the real world and requires motion.
                  Something has to move to create sound waves. Your computer speakers can produce
                  sound because their components vibrate — but software alone cannot create sound
                  without something physical moving.
                </p>
                <p>
                  <strong>So what actually makes sound?</strong>
                  <br />
                  Vibrations.
                </p>
                <p>
                  When an object vibrates, it transfers energy to the surrounding air particles,
                  causing them to vibrate as well. These particles collide with neighboring particles,
                  passing the energy along in a chain reaction until the vibrations reach our eardrums.
                </p>
                <p>
                  Although animations often show sound as something moving forward, the particles
                  themselves do not travel with the wave. They oscillate back and forth around
                  their original positions. At certain moments, particles are crowded together
                  (<cite>compression</cite>), and at others, they are spread apart (<cite>rarefaction</cite>).
                </p>
                <p>
                  If you’d like a deeper explanation, this article gives a great visual analogy
                  (especially the earthworm example):
                </p>
                <p>
                  <a
                    href="https://waitbutwhy.com/2016/03/sound.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://waitbutwhy.com/2016/03/sound.html
                  </a>
                </p>

                <img
                  src="red-dot.gif"
                  id="reddot"
                  className="img-fluid mb-3"
                  alt="Red dot animation showing compression and rarefaction"
                />
              </div>

              {/* Waves Section */}
              <div className="mb-4">
                <h4>Waves</h4>
                <p>
                  One interesting point from that article is that the typical graphed
                  representation of a sound wave is not literally what is happening in the air.
                </p>
                <p>
                  Sound in air is a <cite>longitudinal wave</cite>, meaning the vibrations occur
                  in the same direction the wave travels — through compressions and rarefactions,
                  much like the motion of an earthworm.
                </p>
                <p>
                  However, we often draw sound waves as smooth curves that resemble
                  <cite> transverse waves</cite>. In a transverse wave, the motion of the medium
                  is perpendicular (at right angles) to the direction of travel. A good example
                  is a vibrating guitar string: the string moves up and down, while the sound
                  it produces travels outward through the air.
                </p>
                <p>
                  Graphing longitudinal waves directly is difficult, so we commonly use
                  transverse-style sine waves to represent changes in pressure over time.
                </p>

                <img
                  src="slinky.gif"
                  id="slinky"
                  className="img-fluid mb-3"
                  alt="Slinky demonstrating longitudinal wave motion"
                />
                <img
                  src="planewave_modified_todouble1.gif"
                  id="wave"
                  className="img-fluid mb-3"
                  alt="Plane wave representation"
                />
              </div>

              {/* Signals Section */}
              <div className="mb-4">
                <h4>Signals</h4>
                <p>
                  Wikipedia defines a “signal” as:
                </p>
                <figure>
                  <blockquote cite="https://en.wikipedia.org/wiki/Signal">
                    “A function that conveys information about a phenomenon.”
                  </blockquote>
                  <figcaption>
                    — Wikipedia,{" "}
                    <cite>
                      <a
                        href="https://en.wikipedia.org/wiki/Signal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Signal
                      </a>
                    </cite>
                  </figcaption>
                </figure>
                <p>
                  The simplest signal is a sine wave, the x-axis represents time and the y-axis represents amplitude.
                </p>
                <p>
                  An <cite>analog</cite> signal is continuous in both time and amplitude.
                  A <cite>digital</cite> signal, however, is discrete. It consists of samples
                  taken at specific moments in time, with amplitudes rounded to a finite
                  set of possible values.
                </p>

                <p>
                  <img
                    src="original_signal-768x576.png"
                    id="original_signal"
                    className="img-fluid"
                    alt="Original analog signal"
                  />{" "}
                  fig 1. Original analog signal
                </p>

                <p>
                  <img
                    src="time_sampled_signal-768x576.png"
                    id="time_sampled_signal"
                    className="img-fluid"
                    alt="Time sampled signal"
                  />{" "}
                  fig 2. Sampled signal
                </p>

                <p>
                  <img
                    src="quantised_signal_time-768x576.png"
                    id="quantised_signal_time"
                    className="img-fluid"
                    alt="Quantised digital signal"
                  />{" "}
                  fig 3. Quantised signal
                </p>

                <p>
                  Figure 1 shows an analog signal — continuous in time and amplitude.
                  To represent it digitally, an Analog-to-Digital Converter (ADC)
                  takes discrete time samples (Figure 2) and then quantizes the amplitude
                  into specific levels (Figure 3). The number of available levels is
                  determined by the bit depth.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SignalsSoundsWaves;