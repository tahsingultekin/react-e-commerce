import { useNavigate } from "react-router-dom";

const AllProductButton = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-36 mt-7 flex justify-center items-center">
      <button
        onClick={() => navigate("/products")}
        className=" py-2 px-4 cursor pointer transition-all text-white bg-black border border-slate-500 hover:bg-white hover:text-black"
      >
        TÜM ÜRÜNLERİMİZ &rarr;
      </button>
    </div>
  );
};

export default AllProductButton;
