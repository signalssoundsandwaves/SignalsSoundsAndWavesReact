function Contact() {
  return (
    <div className="container">
      <div className="card-deck mx-auto">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-md-10 mx-auto">
                <div className="well well-sm">
                  <form
                    className="form-horizontal"
                    method="POST"
                    action="https://formspree.io/xrgyjoqo"
                  >
                    <fieldset>
                      <legend className="text-center">Contact us</legend>

                      {/* Name input */}
                      <div className="form-group">
                        <label className="col-md-3 control-label" htmlFor="name">
                          Name
                        </label>
                        <div className="col-md-9">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="form-group">
                        <label className="col-md-3 control-label" htmlFor="email">
                          Your E-mail
                        </label>
                        <div className="col-md-9">
                          <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Your email"
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* Message body */}
                      <div className="form-group">
                        <label className="col-md-3 control-label" htmlFor="message">
                          Your message
                        </label>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Please enter your message here..."
                            rows="5"
                          />
                        </div>
                      </div>

                      {/* Form actions */}
                      <div className="form-group">
                        <div className="col-md-12 text-right">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            id="button"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
