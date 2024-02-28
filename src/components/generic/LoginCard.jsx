import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AmazonLogoImg from "../../assets/Amazon_logo_black.svg";

function LoginCard({ children }) {
  return (
    <>
      <Link to="/">
        <img src={AmazonLogoImg} alt="Amazon" className="w-24 h-8 fill-black" />
      </Link>
      <div className="w-96 p-4 flex-col flex gap-2 border-gray-400 border rounded-xl scale-90">
        {children}
      </div>
    </>
  );
}

LoginCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export { LoginCard };
