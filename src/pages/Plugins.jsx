function Plugins(){
    return (
        <div className="container">

        <div className="card-deck mx-auto">

            <div className="card">
                <div className="card-body">
                    <div className="jumbotron">
                        <h1 className="display-4">RAWKUS RAWRAY!</h1>
                        <p className="lead">A simple Chorus/Delay plugin</p>
                        <hr className="my-4" />
                        <p> This one is for <a href="https://www.instagram.com/roryattwell/?hl=en-gb"> my friend Rory </a>
                            <br />
                            To create your own, check out the course <a href="https://www.kadenze.com/courses/advanced-audio-plugin-development/info"> Advanced Audio Plugin Development at Kadenze Academy. </a> 
                            <br />
                            <br />
                            <img src="RawkusRawray.png" className="img-fluid" />
                        </p>
                        <p className="lead">
                          <a className="btn btn-primary btn-lg" href="RAWKUSRAWRAY.vst3" download role="button">Download VST3</a>
                        </p>
                      </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Plugins