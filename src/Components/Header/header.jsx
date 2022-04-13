import HeaderImg from "../../Images/h1_hero.png";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="img">
          <img src={HeaderImg} alt="" />
        </div>
        <div className="Overlay"></div>
        <div className="Content">
          <h6>É tudo sobre o que você pensa</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            tempore totam est impedit excepturi fugit, explicabo hic. Possimus
            optio soluta cupiditate! Maiores tenetur quam voluptates saepe eius
            nisi dolorum molestiae.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  );
};
export default Header;
