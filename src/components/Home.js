import './Home.css';
const Home = () => {
  return (
    <div className="homePage flexCent">
      <div id="left" className="half flexCent">
        <div className="food"></div>
      </div>
      <div id="right" className="half flexCentCol">
        <div className="signInBox">
          <a href="#">Sign In.</a>
        </div>
        <div style={{height: '90%', width:'100%'}} className="flexCentCol">
          <h1 style={{ textAlign: 'left' }}>You like food, We got food. </h1>
          <h3 style={{ textAlign: 'center' }}>
            Well, we don't directly sell food but we got a whole list of other
            people that do sell food and you're welcome to peruse it we'll just
            take a little off the top.
          </h3>
          <button className="getStarted">Get Started.</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
