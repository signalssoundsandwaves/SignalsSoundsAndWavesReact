import { BlockMath, InlineMath } from "react-katex";

function FFT() {
  return (
    <div className="container my-5">
      <h2>Fourier Analysis</h2>

      <h3>Discrete Fourier Transform (DFT)</h3>

      <p>
        Most real-world sounds are complex. A musical note, a voice, or a clap
        is not just a single tone — it is made up of many different frequencies
        all added together.
      </p>

      <p>
        The simplest possible frequency components are <strong>sine</strong> and{" "}
        <strong>cosine</strong> waves.
      </p>

      <p>
        The <strong>Discrete Fourier Transform (DFT)</strong> finds those
        building blocks inside a digital signal.
      </p>

      <p><strong>Definition:</strong></p>

      <BlockMath math={`X[k] = \\sum_{n=0}^{N-1} x[n] e^{-j \\frac{2\\pi}{N} kn}, \\quad k=0,1,\\dots,N-1`} />

      <p>Using Euler’s formula:</p>

      <BlockMath math={`e^{j\\theta} = \\cos(\\theta) + j\\sin(\\theta)`} />

      <p>
        The complex exponential represents both sine and cosine waves at once.
        The complex plane lets us measure magnitude and phase of each frequency.
      </p>
    </div>
  );
}

export default FFT;