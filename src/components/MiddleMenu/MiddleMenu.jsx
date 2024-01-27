import ContainerLayout from "../../layouts/ContainerLayout";
import { useHeaderLogic } from "../Header/useHeaderLogic";

const MiddleMenu = () => {
  const { handleCategoryClick } = useHeaderLogic();
  return (
    <div className="flex justify-center items-center">
      <ContainerLayout>
        <div className="top-container w-full flex justify-center gap-5 bg-[#FAFAFA] p-7 md1360:w-[960px] md1360:border  md1000:w-[720px] md1000:border min760:w-[500px]">
          <div className="col-1">
            <div
              className="w-96 h-[30.8rem] md1360:w-64 md1360:h-80 md1000:w-80 md1000:h-96 min760:w-48 min760:h-80 min500:w-36 min500:h-48"
              onClick={() => handleCategoryClick("Mens-Shoes")}
            >
              <img
                className="cursor-pointer hover:grayscale transition-all w-full h-full"
                src={"/bottom-menu-img/img-1.png"}
                alt=""
              />
            </div>
          </div>
          <div className="col-2 flex flex-col gap-3 md1000:hidden">
            <div
              className="w-[25rem] h-[15rem] md1360:w-60 md1360:h-[9.6rem]"
              onClick={() => handleCategoryClick("Groceries")}
            >
              <img
                className="cursor-pointer hover:grayscale transition-all hover:scale-105  w-full h-full"
                src={"/bottom-menu-img/img-2.png"}
                alt=""
              />
            </div>

            <div
              className="w-[25rem] h-[15rem] md1360:w-60 md1360:h-[9.6rem]"
              onClick={() => handleCategoryClick("Womens-Dresses")}
            >
              <img
                className="cursor-pointer hover:grayscale hover:scale-105 transition-all w-full h-full"
                src={"/bottom-menu-img/img-4.png"}
                alt=""
              />
            </div>
          </div>
          <div className="col-3 ">
            <div
              className="w-96 h-[30.8rem] md1360:w-64 md1360:h-80 md1000:w-80 md1000:h-96 min760:w-48 min760:h-80 min500:w-36 min500:h-48"
              onClick={() => handleCategoryClick("Smartphones")}
            >
              <img
                className="cursor-pointer hover:grayscale transition-all  w-full h-full"
                src={"/bottom-menu-img/img-3.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default MiddleMenu;
