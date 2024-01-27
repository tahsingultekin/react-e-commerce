import PropTypes from "prop-types";

const ContainerLayout = ({ children }) => {
  return <div className=" max-w-[82.5rem]">{children}</div>;
};

export default ContainerLayout;

ContainerLayout.propTypes = {
  children: PropTypes.node,
};
