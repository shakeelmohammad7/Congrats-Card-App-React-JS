const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="inner-bg-container">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h2 className="heading">Kiran V</h2>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology, <br></br>
        Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
