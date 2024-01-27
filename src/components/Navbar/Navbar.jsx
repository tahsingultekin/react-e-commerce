import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" bg-white  tracking-wider border-y border-slate-300 sticky top-24 z-30 md1360:text-xs md1360:hidden">
      <div className="max-w-6xl relative  mx-auto py-6  h-10 flex justify-center items-center">
        <ul className="flex gap-10 capitalize font-semibold text-xs ">
          <li className="menu-item group hover:opacity-100  ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Smartphones")}
            >
              smartphones
            </a>
            <div className="dropdown-menu-wrapper invisible max-w-6xl  opacity-100 group-hover:opacity-100 group-hover:visible ">
              <ul className="dropdown-menu-content shadow-md  max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-4 ">
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Cellphones
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Apple
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Generale Mobile
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Honor
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Huawei
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Infinix
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Samsung
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Realme
                    </li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Tablets
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Apple
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Generale Mobile
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Honor
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Huawei
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Smartphones")}
                    >
                      Samsung
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-2">
                  <div
                    className="w-60 h-80 "
                    onClick={() => navigate("/categories/Smartphones")}
                  >
                    <img
                      src="../../../public/navbar-photos/smartphones/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Smartphones")}
                  >
                    <img
                      src="../../../public/navbar-photos/smartphones/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item  group hover:opacity-100 ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Laptops")}
            >
              laptops
            </a>
            <div className="dropdown-menu-wrapper  invisible opacity-100 group-hover:opacity-100 group-hover:visible">
              <ul className="dropdown-menu-content shadow-md  max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-6 ">
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Gamer Laptops
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Acer
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Asus
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Casper
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Lenova
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Msi
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      HP
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Huawei
                    </li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Headphones & microphones
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Anker
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Bang & Olufsen
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Steelseries
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      choice
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      oppo
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      realme
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      jbl
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      hyperx
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      beats
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      marshall
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      TCL
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      urbanears
                    </li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Tablets
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Apple
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Generale Mobile
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Honor
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Huawei
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Laptops")}
                    >
                      Samsung
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-3">
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Laptops")}
                  >
                    <img
                      src="../../../public/navbar-photos/laptops/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Laptops")}
                  >
                    <img
                      src="../../../public/navbar-photos/laptops/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item  group hover:opacity-100 ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Fragrances")}
            >
              fragrances
            </a>
            <div className="dropdown-menu-wrapper  invisible opacity-100 group-hover:opacity-100 group-hover:visible">
              <ul className="dropdown-menu-content shadow-md  max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-6 ">
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Mens Parfume
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      EDP Parfume
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      EDT Parfume
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Deodorant
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Deo Stick
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Roll-On
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Shower Gel
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      After Shave
                    </li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Womens Parfume
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      EDP Parfume
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      EDT Parfume
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Deodorant
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Deo Stick
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Roll-On
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Shower Gel
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Body Lotion
                    </li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      featured brands
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Carolina Herrera
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Giorgio Armani
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Fragrances")}
                    >
                      Tom Ford
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-3">
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Fragrances")}
                  >
                    <img
                      src="../../../public/navbar-photos/fragrances/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Fragrances")}
                  >
                    <img
                      src="../../../public/navbar-photos/fragrances/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item  group hover:opacity-100 ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Skincare")}
            >
              skincare
            </a>
            <div className="dropdown-menu-wrapper  invisible opacity-100 group-hover:opacity-100 group-hover:visible">
              <ul className="dropdown-menu-content shadow-md  max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-6 ">
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      All Skincare
                    </li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Moisturizers
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Night Creams
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Face Oils
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Mists & Essences
                    </li>
                    <li className="list-item-second">BB & CC Cream</li>
                  </ul>
                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Treatments
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Face Serums
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Blemish & Acne Treatments
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Facial Peels
                    </li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Cleansers
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Face Wash & Cleansers
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Exfollators
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Makeup Removers
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Face Wipes
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Skincare")}
                    >
                      Toners
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-3">
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Skincare")}
                  >
                    <img
                      src="../../../public/navbar-photos/skincare/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Skincare")}
                  >
                    <img
                      src="../../../public/navbar-photos/skincare/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item  group hover:opacity-100 ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Groceries")}
            >
              groceries
            </a>
            <div className="dropdown-menu-wrapper  invisible opacity-100 group-hover:opacity-100 group-hover:visible">
              <ul className="dropdown-menu-content shadow-md  max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-6 ">
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Grocery
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Dietary & Lifestyle Shop
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Game Time
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Valentine`s Day Food & Gifts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Recipes
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Everyday Meals
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Fresh Food
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Grocery & Essentials
                    </li>
                  </ul>
                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Fresh Produce
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Peak Season Produce
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Fresh Fruit
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Fresh Vegetable
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Organic Produce
                    </li>
                  </ul>
                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Grocery Deals
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Shop All
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Deals under $5
                    </li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin px-5">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Dairy & Eggs
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Shop All
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Cheese
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Milk
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Cream & Creamers
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Yogurt
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Eggs
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Butter & Margarine
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Sour Cream & Chilled Dips
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Biscuits, Cookies, Doughs & Crusts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Cheese Buying Guide
                    </li>
                  </ul>
                </li>
                <li className="col-span-1 px-2">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Breakfast & Cereal
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Shop All
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      The Cereal Shop
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Pancakes & Waffles
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Breakfast Breads
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Outmeal & Grits
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Toaster Pastries and Grab & Go
                    </li>
                  </ul>
                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Baking
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Shop All
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Baking Deals
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Baking Ingredients
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Groceries")}
                    >
                      Easy to Make
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-3">
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Groceries")}
                  >
                    <img
                      src="../../../public/navbar-photos/groceries/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Groceries")}
                  >
                    <img
                      src="../../../public/navbar-photos/groceries/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item  group hover:opacity-100 ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Furniture")}
            >
              furniture
            </a>
            <div className="dropdown-menu-wrapper  invisible opacity-100 group-hover:opacity-100 group-hover:visible">
              <ul className="dropdown-menu-content shadow-md  max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-6 ">
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Indoor
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Sectional Sofas
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Stand-alone Sofas
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Armchairs
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Ottomans
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Chaise longue/Dormeuse
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Tables
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Dining chairs/Chairs
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Stools
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Accessories
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Coffee and Side tables
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Bookshelves/Cabinets
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Beds/Bed accessories
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Sofa beds
                    </li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin px-5">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Outdoor
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Sectional sofas
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Stand-alone sofas
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Armchairs
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Ottomans
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Daybeds
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Tables
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Dining chairs/Chairs
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Accessories
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Coffee and Side tables
                    </li>
                  </ul>
                </li>
                <li className="col-span-1 px-2">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Browse by setting
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Al fresco dining
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Lounge
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Pool side
                    </li>
                  </ul>
                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Inspirations
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      In & Out
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Rural Refuge
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Loft Life
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Furniture")}
                    >
                      Pool With a View
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-3">
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Furniture")}
                  >
                    <img
                      src="../../../public/navbar-photos/furniture/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Furniture")}
                  >
                    <img
                      src="../../../public/navbar-photos/furniture/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item  group hover:opacity-100 ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Mens-Shirts")}
            >
              mens shirts
            </a>
            <div className="dropdown-menu-wrapper  invisible opacity-100 group-hover:opacity-100 group-hover:visible">
              <ul className="dropdown-menu-content shadow-md  max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-6 ">
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Style
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Formal Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Business Casual Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Casual Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Short Sleeve Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Non-Iron Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Luxury Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Evening Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Collarless Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Polos
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      T-Shirts
                    </li>
                  </ul>
                  <ul className="font-thin mt-10">
                    <li className="list-item-first">Sale</li>
                    <li className="list-item-second">Shirt Sale</li>
                  </ul>
                </li>
                <li className="col-span-1">
                  <ul className="font-thin px-5">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Colour
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      White Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Blue Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Printed Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Uberty Print Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Check Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Stripe Shirts
                    </li>
                  </ul>
                </li>
                <li className="col-span-1 px-2">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Fit
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Classic Fit Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Slim Fit Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Extra Slim Fit Shirts
                    </li>
                  </ul>
                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Fabric
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Twill Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Stretch Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Oxford Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Poplin Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Flannel Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Linen Shirts
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Shirts")}
                    >
                      Egyptian Cotton Shirts
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-3">
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Mens-Shirts")}
                  >
                    <img
                      src="../../../public/navbar-photos/mens-shirts/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Mens-Shirts")}
                  >
                    <img
                      src="../../../public/navbar-photos/mens-shirts/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item  group hover:opacity-100 ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Mens-Watches")}
            >
              mens watches
            </a>
            <div className="dropdown-menu-wrapper  invisible opacity-100 group-hover:opacity-100 group-hover:visible">
              <ul className="dropdown-menu-content shadow-md  max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-6 ">
                <li className="col-span-1">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Watches
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Shop All
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Smartwatches
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Stainless Steel Watches
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Leather Watches
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Automatic Watches
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Watch Straps
                    </li>
                  </ul>
                </li>
                <li className="col-span-1 px-5">
                  <ul className="font-thin ">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Bags
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Shop All
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Work Bags
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Backpacks
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Travel Bags
                    </li>
                  </ul>
                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Jewelry
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Shop All
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Bracelets
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Necklaces
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Rings
                    </li>
                  </ul>
                </li>
                <li className="col-span-1 px-2">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Wallets
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Shop All
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Bifold Wallets
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Card Cases
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      Trifold Wallets
                    </li>
                  </ul>

                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      ACCESSORIES
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      BELTS
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      SUNGLASSES
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      NEW ARRIVALS
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      BEST SELLERS
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      GIFTS
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Mens-Watches")}
                    >
                      GIFT CARDS
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-3">
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Mens-Watches")}
                  >
                    <img
                      src="../../../public/navbar-photos/mens-watches/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Mens-Watches")}
                  >
                    <img
                      src="../../../public/navbar-photos/mens-watches/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item  group hover:opacity-100 ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Womens-Shoes")}
            >
              womens shoes
            </a>
            <div className="dropdown-menu-wrapper  invisible opacity-100 group-hover:opacity-100 group-hover:visible">
              <ul className="dropdown-menu-content shadow-md  max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-6 ">
                <li className="col-span-1 px-3">
                  <ul className="font-thin mb-6">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      New Arrivals
                    </li>
                  </ul>
                  <ul className="font-thin border-y py-7 border-slate-300">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Bridal
                    </li>
                  </ul>
                </li>
                <li className="col-span-1 px-5">
                  <ul className="font-thin ">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Collections
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      The Winter Collection
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      The Flower Collection
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      The Drop Heel
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Jimmy Choo / Jean Paul
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Gaultier
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Diamond Collection
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Pearl Edit
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Evening Glamour
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      The Icons
                    </li>
                  </ul>
                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Apparel
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      All Apparel
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Swimwear
                    </li>
                  </ul>
                </li>
                <li className="col-span-1 px-2">
                  <ul className="font-thin">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Shoes
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      All Shoes
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Pumps
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Boots
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Sandals
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Sneakers
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Flats
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Wedges
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Platforms
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Mules
                    </li>
                    <li
                      className="list-item-second"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Bridal
                    </li>
                  </ul>

                  <ul className="font-thin mt-10">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Handbags
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      All Handbags
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Clutch Bags
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Shoulder Bags
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Mini Bags
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Tote Bags
                    </li>
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Womens-Shoes")}
                    >
                      Evening Bags
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-3">
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Womens-Shoes")}
                  >
                    <img
                      src="../../../public/navbar-photos/womens-shoes/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Womens-Shoes")}
                  >
                    <img
                      src="../../../public/navbar-photos/womens-shoes/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-item  group hover:opacity-100 ">
            <a
              href="#"
              className=" after:border-b-[10px] after:border-transparent after:pb-[0.85rem] hover:border-b-[10px] hover:border-black hover:pb-[0.85rem]"
              onClick={() => navigate("/categories/Sunglasses")}
            >
              sunglasses
            </a>
            <div className="dropdown-menu-wrapper invisible opacity-100 group-hover:opacity-100 group-hover:visible">
              <ul className="dropdown-menu-content shadow-md   max-w-6xl border-t border-slate-300 min-w-full absolute b top-12 left-0  px-5 py-10 bg-white grid grid-cols-6 ">
                <li className="col-span-1 ">
                  <ul className="font-thin ">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Women
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Prescription Sunglasses
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Best Sellers
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Designer Sunglasses
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      On Sale
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Ray-Ban
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Shop All Sunglasses
                    </li>
                  </ul>
                </li>
                <li className="col-span-1 px-5">
                  <ul className="font-thin ">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Men
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Prescription Sunglasses
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Best Sellers
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Designer Sunglasses
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      On Sale
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Ray-Ban
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Shop All Sunglasses
                    </li>
                  </ul>
                </li>
                <li className="col-span-1 px-2">
                  <ul className="font-thin ">
                    <li
                      className="list-item-first"
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Special Lenses
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Sports & Safety
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Kids' Glasses
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Transitions® Lenses
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Polarized
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Clip-Ons
                    </li>
                    <li
                      className="list-item-second "
                      onClick={() => navigate("/categories/Sunglasses")}
                    >
                      Progressives
                    </li>
                  </ul>
                </li>
                <li className="flex gap-3 col-span-3">
                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Sunglasses")}
                  >
                    <img
                      src="../../../public/navbar-photos/sunglasses/img-1.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>

                  <div
                    className="w-60 h-80 cursor-pointer"
                    onClick={() => navigate("/categories/Sunglasses")}
                  >
                    <img
                      src="../../../public/navbar-photos/sunglasses/img-2.avif"
                      alt="smartphone"
                      className=" w-full h-full object-cover object-center"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
