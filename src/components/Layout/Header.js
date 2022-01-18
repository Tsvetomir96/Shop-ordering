import { Fragment } from "react/cjs/react.production.min";
import mealsHeroImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>

      <div className="main-image">
        <img src={mealsHeroImage} alt="Table full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
