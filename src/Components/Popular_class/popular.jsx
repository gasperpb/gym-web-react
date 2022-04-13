import Popular2 from "../../Images/gallery2.png";
import Popular3 from "../../Images/gallery3.png";
import Popular4 from "../../Images/gallery4.png";
import Popular1 from "../../Images/gallery5.png";
import "./popular.css";

const Popular = () => {
  return (
    <>
      <div className="container popular">
        <div className="content">
          <h6> Popular Classes </h6>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="box">
              <img src={Popular1} className="img-fluid" alt="..." />
              <h6> Easy Coding</h6>
            </div>
          </div>
          <div className="offset-sm-2 col-sm-5">
            <div className="box">
              <img src={Popular2} className="img-fluid" alt="..." />
              <h6> Easy Coding</h6>
            </div>
          </div>
          <div className=" col-sm-5">
            <div className="box">
              <img src={Popular3} className="img-fluid" alt="..." />
              <h6> Easy Coding</h6>
            </div>
          </div>
          <div className="offset-sm-2 col-sm-5">
            <div className="box">
              <img src={Popular4} className="img-fluid" alt="..." />
              <h6> Easy Coding</h6>
            </div>
          </div>
          <div className=" col-sm-5">
            <div className="box">
              <img src={Popular4} className="img-fluid" alt="..." />
              <h6> Easy Coding</h6>
            </div>
          </div>
          <div className="offset-sm-2 col-sm-5">
            <div className="box">
              <img src={Popular4} className="img-fluid" alt="..." />
              <h6> Easy Coding</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Popular;
