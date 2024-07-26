import { NavLink } from "react-router-dom";
// import { Button } from "react-bootstrap";
import "../Home/home.scss"
import Featured from "../Home/featured"

const Home = () => {


  return (
<>
    <div className="container">
      <div className="grid">
        <div className="hero-section-data">
          <h1 className="">Design Your
            <br /> Comfort Zone </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
            Iusto, at sed omnis corporis doloremque possimus velit!
            <br/>Repudiandae nisi odit, aperiam odio ducimus, obcaecati
            <br/>libero et quia tempora excepturi quis alias?
          </p>
          <NavLink to="/products">
            <button className="button">SHOP NOW</button>
          </NavLink>
        </div>

        <div className="hero-section-image">
          <figure>
            <img
              src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
              alt="hero-section-photo"
              className="img-style"
            />
            {/* <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg" alt="person working" className="accent-img" /> */}
          </figure>
        </div>
      </div>
    </div>
    <Featured/>
    </>
  );
};
export default Home