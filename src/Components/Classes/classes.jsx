import ClassImg from "../../Images/team1.png";
import "./classe.css";
const Classes = () => {
  return (
    <>
      {/* <h1>Classes Section Start</h1> */}
      <section className="classes">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <img src={ClassImg} className="img-fluid" alt="" />
            </div>
            <div className="col-sm-5">
              <h6>Classes</h6>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, assumenda veniam sapiente perferendis accusantium
                  fugit soluta, et saepe repellendus facere natus, inventore
                  porro ipsum eos quas suscipit excepturi voluptatibus sed.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, assumenda veniam sapiente perferendis accusantium
                  fugit soluta, et saepe repellendus facere natus, inventore
                  porro ipsum eos quas suscipit excepturi voluptatibus sed.
                </p>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, assumenda veniam sapiente perferendis accusantium
                  fugit soluta, et saepe repellendus facere natus, inventore
                  porro ipsum eos quas suscipit excepturi voluptatibus sed.
                </p>
                <button className="btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Classes;
