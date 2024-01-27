import { useContext } from "react";
import { SingleContext } from "../../context/SingleProductProvider";

const FilterMenu = () => {
  const { sortBy, handlePerPageChange, handleSortChange, perPage } =
    useContext(SingleContext);

  return (
    <div className="filter-wrapper w-full h-16 my-3 border-y-2 flex justify-between items-center px-3 md1360:w-[1000px] md1360:px-10 md1000:w-[760px] min760:w-[500px] min500:w-[370px] ">
      <div className="icons flex gap-5 text-xl min760:hidden">
        <i className="fa-solid fa-table-cells cursor-pointer"></i>
        <i className="fa-solid fa-list cursor-pointer"></i>
      </div>
      <div className="input-group flex gap-10">
        <div className="sort-by min500:flex min500:flex-col ">
          <label
            htmlFor="sort"
            className="text-[#575757] bg-[#EEEEEE] text-xs px-3 py-1"
          >
            Sırala:
          </label>
          <select
            onChange={handleSortChange}
            value={sortBy}
            className=" text-[#575757] border border-[#EEEEEE] bg-white text-xs px-3 outline-none"
            id="sort"
          >
            <option value="name-asc">Ürün Adı (A - Z)</option>
            <option value="name-desc">Ürün Adı (Z - A)</option>
            <option value="price-desc">{`Ucuzdan > Pahalıya`}</option>
            <option value="price-asc">{`Pahalıdan > Ucuza`}</option>
          </select>
        </div>
        <div className="per-page min500:flex min500:flex-col min500:items-center">
          <label
            htmlFor="perPage"
            className="text-[#575757] bg-[#EEEEEE] text-xs px-3 py-1"
          >
            Göster:
          </label>
          <select
            onChange={handlePerPageChange}
            value={perPage}
            className=" text-[#575757] border border-[#EEEEEE] bg-white text-xs px-3 outline-none"
            id="perPage"
          >
            <option className="" value="8">
              8
            </option>
            <option className="" value="12">
              12
            </option>
            <option className="" value="25">
              25
            </option>
            <option className="" value="50">
              50
            </option>
            <option className="" value="75">
              75
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
