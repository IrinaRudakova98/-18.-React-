import "./styles.css";
import IMG from "..//..//..//images/happy-bean.png"

export const NotFound = () => {
  return (
    <div className="not_found_container">
      <h1>Такой страницы нет...</h1>
      <img src={IMG} alt="" />
      
    </div>
  );
};