import PropTypes from "prop-types";
import { Drawer } from "antd";

import { useCategoriesLogic } from "../Categories/useCategoriesLogic";
import { useNavigate } from "react-router-dom";

const HeaderMobileMenu = ({ drawerOpen, onClose }) => {
  const { categories } = useCategoriesLogic();
  const navigate = useNavigate();
  return (
    <div className="hidden md1360:block">
      <Drawer
        title="Kapat"
        placement="left"
        closable={true}
        onClose={onClose}
        open={drawerOpen}
        width="50%"
        className="hidden md1360:block"
      >
        <h1 className="capitalize my-5 text-xl font-semibold">
          ürün kategorilerimiz
        </h1>
        {categories.map((category) => {
          return (
            <div key={category} className="w-40">
              <div
                key={category}
                className="mb-3 capitalize cursor-pointer tracking-wider transition-all hover:text-orange-600 hover:scale-105 w-40 "
                onClick={() => navigate(`/categories/${category}`)}
              >
                {category}
              </div>
            </div>
          );
        })}
      </Drawer>
    </div>
  );
};

HeaderMobileMenu.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default HeaderMobileMenu;
