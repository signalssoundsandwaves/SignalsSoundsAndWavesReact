// src/pages/Why.jsx
function Why() {
  return (
    <div className="container my-5">

      {/* Card for the entire content */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">

              <h1 className="mb-4">Why Signals Sounds and Waves?</h1>

              {/* Sounds Section */}
              <div className="mb-4">
                <h4>Sounds</h4>
                <p>
                  We all know what sound is, you can't avoid it. In fact, there is a whole industry devoted to
                  trying to do just that — sound isolation can be expensive and it's actually really hard to do.
                </p>
                <p>
                  An important thing I'd like to point out is that sound is a physical occurrence which happens in
                  the real world: something has to move to create sound waves. The speakers on your computer can make
                  sound waves, but sound waves cannot be made by software or with any amount of fancy coding.
                </p>
                <p>
                  <strong><cite>So what makes sound?</cite></strong>
                  <br />
                  Vibrations.. When an object vibrates, energy is passed on to air particles surrounding the
                  object making them vibrate; in turn they vibrate, bumping into neighboring particles, causing a
                  domino effect until particles are vibrating at our ear drums. Notice in the animation that although
                  there is the illusion of continual forward motion, the red dots in the animation show how the particles
                  always remain relative to their stationary position. There are moments when the particles are densely
                  populated <cite>(compression)</cite> and moments when they are sparsely populated <cite>(rarefaction)</cite>.
                  Here's a link to a site which explains it more thoroughly — I particularly like the earthworm analogy:
                </p>
                <p>
                  <a href="https://waitbutwhy.com/2016/03/sound.html">
                    https://waitbutwhy.com/2016/03/sound.html
                  </a>
                </p>
                <img src="red-dot.gif" id="reddot" className="img-fluid mb-3" alt="Red dot animation" />
              </div>

              {/* Waves Section */}
              <div className="mb-4">
                <h4>Waves</h4>
                <p>
                  Something I found really interesting in the last link was the claim that the usual graphed
                  representation of a sound wave isn't how sound works at all. The earthworm moves in a similar motion
                  to a <cite>'real'</cite> sound wave — movement through 'compression' and 'rarefaction'. This is called a
                  <cite>longitudinal wave</cite>, as its vibrations occur along one axis.
                </p>
                <p>
                  It's not that easy to graph a longitudinal wave without it looking more like a transverse wave.
                  An example of a transverse wave would be the movement of a guitar string — the vibrations in a guitar
                  string moving up and down whilst played are at right angles to the direction the sound wave travels.
                </p>
                <img src="slinky.gif" id="slinky" className="img-fluid mb-3" alt="Slinky wave animation" />
                <img src="planewave_modified_todouble1.gif" id="wave" className="img-fluid mb-3" alt="Plane wave animation" />
              </div>

              {/* Signals Section */}
              <div className="mb-4">
                <h4>Signals</h4>
                <p>
                  The definition of a 'Signal' on Wikipedia is:
                </p>
                <figure>
                  <blockquote cite="https://en.wikipedia.org/wiki/Signal">
                    "..a function that conveys information about a phenomenon"
                  </blockquote>
                  <figcaption>
                    —Wiki, <cite>https://en.wikipedia.org/wiki/Function_(mathematics)</cite>
                  </figcaption>
                </figure>
                <p>
                  Mathematically, this can be represented as a sine wave, where X denotes time and Y denotes amplitude.
                  <br />
                  <cite>Analog</cite> signals are continuous in time and amplitude, whereas <cite>Digital</cite> signals
                  are a discrete set of amplitudes in time.
                </p>
                <p>
                  <img src="original_signal-768x576.png" id="original_signal" className="img-fluid" alt="Original analog signal" /> fig 1. Original signal
                </p>
                <p>
                  <img src="time_sampled_signal-768x576.png" id="time_sampled_signal" className="img-fluid" alt="Sampled signal" /> fig 2. Sampled signal
                </p>
                <p>
                  <img src="quantised_signal_time-768x576.png" id="quantised_signal_time" className="img-fluid" alt="Quantised signal" /> fig 3. Quantised signal
                </p>
                <p>
                  Figure 1 depicts an analog signal, a sine wave with continuous time on x-axis and amplitude on y-axis.
                  To represent this digitally, the ADC takes discrete samples (Figure 2) and quantises the amplitude (Figure 3),
                  which is dictated by the bit rate.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Why;
