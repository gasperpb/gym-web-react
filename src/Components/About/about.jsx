import AboutImg from "../../Images/about2.png";
import "./about.css";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container"></div>
        <div className="row">
          <div className="col-md-5">
            <h6>
              About <span>A </span> <span>RENA</span>
            </h6>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium repellat, molestias quisquam sapiente aliquid quidem
              quod rerum maxime sed ut id eaque omnis asperiores magnam
              repellendus itaque odit facilis. Id.
            </p>
            <button class="btn" link="https://github.com/">
              Read More
            </button>
          </div>

          <div class="offset-sm-2 col-sm-5">
            <img src={AboutImg} className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
