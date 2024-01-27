const Info = () => {
  return (
    <div className="infos w-[82.5rem] flex justify-center items-center gap-16 border-y border-slate-200 my-6 py-3  md1360:w-[960px]  md1000:gap-5 md1000:text-sm md1000:w-[720px] min760:w-[500px] min760:px-10 min760:text-xs min500:px-16">
      <div className="item-1 flex items-center w-[27rem] gap-5 md1000:w-80">
        <i className="fa-regular fa-credit-card text-3xl text-lime-600"></i>
        <div className="flex flex-col gap-1">
          <p>Güvenli Ödeme</p>
          <p className="opacity-35">256bit SSL Sertifikası</p>
        </div>
      </div>

      <div className="item-2 flex items-center w-[27rem] gap-5 md1000:w-80">
        <i className="fa-solid fa-truck text-3xl text-lime-600"></i>
        <div className="flex flex-col gap-1">
          <p>Hızlı ve Zamanında</p>
          <p className="opacity-35">Siparişiniz 3 iş gününde kargolanır</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
