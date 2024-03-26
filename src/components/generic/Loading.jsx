import LoadingImg from "../../assets/loading-circle.svg";
import Proptypes from "prop-types";

function Loading({ size }) {
  return (
    <img className={`animate-spin ${size}`} src={LoadingImg} alt="Loading..." />
  );
}

Loading.propTypes = {
  size: Proptypes.string,
};

export { Loading };
