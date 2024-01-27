import Cart from "../Cart/Cart";
import HeaderMobileMenu from "./HeaderMobileMenu";
import { CurrencyFormat } from "../../utils/CurrencyFormat";
import { useHeaderLogic } from "./useHeaderLogic";

import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { SingleContext } from "../../context/SingleProductProvider";

const Header = () => {
  const {
    navigate,
    searchInput,
    categoryProducts,
    hoverActive,
    searchResults,
    wrapperRef,
    selectedSuggestionIndex,
    handleCategoryLeave,
    handleSearchInputChange,
    handleSearchSubmit,
    handleCategoryClick,
    categories,
    fetchCategories,
    handleCategoryHover,
    setIsSearchActive,
    isAutocompleteVisible,
    showAutocomplete,
    hideAutocomplete,
    isSearchActive,
    toggleSearch,
    isLoadingResults,
    searchInputRef,
    searchPanelRef,
    setSearchInput,
    showDrawer,
    drawerOpen,
    onClose,
  } = useHeaderLogic();
  const { allProduct } = useContext(SingleContext);

  // Arama çubuğuna odaklanıldığında autocomplete göster
  const handleInputFocus = async () => {
    await fetchCategories();
    showAutocomplete();
  };

  // Arama formu submit edildiğinde autocomplete gizle
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit();
    hideAutocomplete();
  };

  // Mobil ekran için gereken işlevler
  const handleMobilSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchInput;

    navigate("/search-results", {
      state: { searchQuery: query },
    });

    setIsSearchActive(false);
    setSearchInput("");
  };

  return (
    <div className="header-wrapper  w-full flex items-center justify-center h-28 sticky top-0 z-50 bg-white min760:h-20">
      <div className="container h-28  relative flex items-center justify-between md1360:w-[960px] md1000:w-[720px] min760:h-20 min760:w-[500px] min500:w-[380px]">
        <div className="mobile-wrapper hidden md1360:block">
          <div className="mobile hidden w-auto gap-5 h-auto md1360:flex md1360:items-center d1360:justify-center md1000:justify-center">
            <div className="mobile-menu-sidebar">
              <div className="menu-bar flex flex-col justify-center items-center">
                <span className="font-thin text-xs min760:hidden">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-12 h-12 cursor-pointer min760:w-8"
                  onClick={showDrawer}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              <HeaderMobileMenu
                drawerOpen={drawerOpen}
                onClose={onClose}
                allProduct={allProduct}
              />
            </div>

            <div className="search-bar  flex flex-col justify-center items-center md1360:hidden min760:block">
              {isSearchActive ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer min760:w-5"
                    onClick={toggleSearch}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <div className="search-bar  flex flex-col justify-center items-center md1360:hidden min760:block">
                    {isSearchActive ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer min760:w-5"
                          onClick={toggleSearch}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>

                        <AnimatePresence>
                          {isSearchActive && (
                            <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5 }}
                              ref={searchPanelRef}
                              className=" bg-white fixed top-0 left-0 right-0 bottom-0 z-[1000]"
                            >
                              <form
                                onSubmit={handleMobilSearchSubmit}
                                className=" h-12 mt-5 px-5 py-2 flex items-center gap-10"
                              >
                                <input
                                  type="text"
                                  placeholder="Arama"
                                  ref={searchInputRef}
                                  value={searchInput}
                                  onChange={handleSearchInputChange}
                                  className="w-full h-full border  px-5 outline-none text-xs tracking-wide font-light bg-[#EFEFEF]"
                                />
                                <button
                                  type="submit"
                                  className="text-xs text-zinc-600"
                                >
                                  Ara
                                </button>
                                <div
                                  className="close-button text-xs text-zinc-600 cursor-pointer"
                                  onClick={() => setIsSearchActive(false)}
                                >
                                  Kapat
                                </div>
                              </form>
                              {searchInput && !isLoadingResults && (
                                <div className="search-results-container w-screen h-screen flex flex-col items-start  px-5 overflow-y-auto">
                                  <h2 className="my-5">
                                    {`"${searchInput}"`} ile ilgili sonuçlar
                                  </h2>
                                  {searchResults.map((result, index) => (
                                    <div
                                      key={index}
                                      className="search-result-item w-full flex tracking-wide mb-5 px-3 py-2 text-xs border cursor-pointer transition-all hover:shadow-md hover:scale-105"
                                      onClick={() =>
                                        navigate(`/product/${result.id}`)
                                      }
                                    >
                                      <div className="w-16 h-16 mr-5">
                                        <img
                                          src={result.thumbnail}
                                          alt={result.title}
                                          className="w-full h-full"
                                        />
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="text-gray-400 ">
                                          {result.title}
                                        </span>
                                        <div className="flex flex-col mt-3 gap-1">
                                          <span className="font-thin ">
                                            {result.description.substring(
                                              0,
                                              75
                                            )}
                                            ..
                                          </span>
                                          <span className="  text-gray-400">
                                            {CurrencyFormat(result.price)}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer min760:w-5"
                        onClick={toggleSearch}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    )}
                  </div>
                  <AnimatePresence>
                    {isSearchActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className=" bg-white fixed top-0 left-0 right-0 bottom-0 z-50"
                      >
                        <div className="h-14 px-5 py-2 bg-white">
                          <input
                            type="text"
                            placeholder="Arama"
                            ref={searchInputRef}
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            className="w-full h-full border border-black px-5 outline-none text-sm tracking-wide font-light"
                          />
                        </div>
                        {searchInput && !isLoadingResults && (
                          <div className="search-results-container w-screen h-screen flex flex-col items-start  px-5 overflow-y-auto">
                            <h2 className="my-5">
                              {`"${searchInput}"`} ile ilgisi sonuçlar
                            </h2>
                            {searchResults.map((result, index) => (
                              <div
                                key={index}
                                className="search-result-item w-full flex tracking-wide mb-5 px-3 py-2 text-xs border cursor-pointer transition-all hover:shadow-md hover:scale-105"
                              >
                                <div className="w-16 h-16 mr-5">
                                  <img
                                    src={result.thumbnail}
                                    alt={result.title}
                                    className="w-full h-full"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-gray-400 ">
                                    {result.title}
                                  </span>
                                  <div className="flex flex-col mt-3">
                                    <span className="font-thin ">
                                      {result.description.substring(0, 75)}..
                                    </span>
                                    <span className="  text-gray-400">
                                      {CurrencyFormat(result.price)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer min760:w-5"
                  onClick={toggleSearch}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        <form
          ref={wrapperRef}
          onSubmit={handleFormSubmit}
          className="min760:hidden "
        >
          <div className="search-bar relative flex  items-center w-64 h-16 md1000:w-36">
            <div className="search-wrapper flex">
              <input
                type="text"
                placeholder="Arama"
                className=" w-52 h-9  border-b border-slate-700 outline-none font-light tracking-wide placeholder:text-[13px] placeholder:text-slate-500 md1000:w-36 md1000:placeholder:text-xs"
                value={searchInput}
                onChange={handleSearchInputChange}
                onFocus={handleInputFocus}
              />
              <button
                type="submit"
                className="flex justify-center items-center border-b border-slate-700 md1000:w-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
            {isAutocompleteVisible &&
              searchInput.length > 0 &&
              searchResults.length > 0 && (
                <div className="autocomplete-dropdown flex absolute top-14 left-0 w-[50rem] max-h-[34rem]  z-50  tracking-wide rounded-xl shadow-x md1000:w-[30rem]">
                  {/* Kategoriler Bölümü */}
                  <div className="categories bg-[url('/background_auto.png')] bg-cover bg-center overflow-y-auto min-w-56 px-3 pt-1 rounded-xl">
                    <div className="my-2 font-semibold">Kategoriler</div>
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => handleCategoryHover(category)}
                        // onMouseEnter={fetchCategories}
                        onMouseLeave={handleCategoryLeave}
                        className="mt-2 ml-5 cursor-pointer capitalize text-zinc-800 text-sm hover:opacity-75"
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                  {/* Ürünler Bölümü */}

                  <div className="product-wrapper w-[50rem] px-8 flex flex-col bg-white rounded-xl">
                    <h1 className="w-full min-h-16 flex items-center font-semibold">
                      {/* Başlık içeriği */}
                      {hoverActive ? "Kategori Ürünleri" : "Arama Sonuçları"}
                    </h1>

                    <div className="product-item-container overflow-y-auto flex flex-wrap gap-3 py-2">
                      {(hoverActive
                        ? categoryProducts
                        : searchResults.slice(0, 6)
                      ).map((product, index) => (
                        <div
                          key={product.id}
                          className={`product-item shadow w-40 h-52 flex items-center justify-center border py-1 cursor-pointer hover:bg-slate-200 ${
                            index === selectedSuggestionIndex && !hoverActive
                              ? "bg-slate-200"
                              : ""
                          }`}
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          <div className="item-info flex flex-col justify-center items-start w-full h-full">
                            <div className="px-8">
                              <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-24 h-24 rounded-md"
                              />
                            </div>
                            <div className="pl-3 mt-3">
                              <div className="font-thin text-sm">
                                {product.title.length > 17
                                  ? `${product.title.substring(0, 16)}...`
                                  : product.title}
                              </div>
                              <div className="mt-2">
                                {CurrencyFormat(product.price)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </form>
        <div
          className="logo w-52 h-24 cursor-pointer flex justify-center items-center md1360:w-36 md1360:h-16  md1000:w-28 min760:h-12"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" className="w-full h-full object-cover" />
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
