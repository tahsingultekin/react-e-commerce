import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[120rem] md1360:w-[1000px] md1000:w-[760] min760:w-[500px] min500:w-[380px]">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node,
};
