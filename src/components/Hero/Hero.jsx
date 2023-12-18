import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*Left Side */}
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
        </div>
        {/*Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
