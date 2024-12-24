import heroImg from "./assets/hero.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            aperiam quam quae quibusdam amet odio nam eligendi? Ducimus,
            laboriosam quas quis, odio a qui nulla, nesciunt minima similique id
            rerum?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman in the browser" className="img" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
