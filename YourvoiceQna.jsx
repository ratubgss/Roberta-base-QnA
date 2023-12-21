import React from "react";

const YourvoiceQna = () => {
  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header-text-tanya">
            <h1>
              Hi, Im <span>Yourvoice Chat</span>
              <br />
            </h1>
            <p>What's in your heads?</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="questions">
            <form>
              <input
                type="textarea"
                name="Information"
                placeholder="input context ..."
                required
              />
              <input
                type="textarea"
                name="Question"
                placeholder="input question ..."
                required
              />
              <button type="submit" className="btn">
                Generate
              </button>
            </form>
          </div>
          <div className="answer">
            <textarea name="Answer" rows="10" placeholder="..." readOnly />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>©YourvoiceIdn - 2023</p>
      </div>
    </div>
  );
};

export default YourvoiceQna;
