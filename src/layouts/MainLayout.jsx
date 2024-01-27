import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[120rem]">{children}</div>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
