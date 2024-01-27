import Line from "../../utils/Line";

const Footer = () => {
  const date = new Date();
  const currentDate = date.getFullYear();

  return (
    <footer className="footer w-[82.5rem] bg-[#1A1F2B] text-slate-300 text-sm   tracking-wide md1360:text-xs md1360:w-[960px] md1000:w-[720px] min760:w-[500px] min500:w-[380px]">
      <div className="informations grid grid-rows-1 grid-cols-5 divide-x md1360:grid-rows-2 md1360:grid-cols-2 min500:grid-rows-3 min500:grid-cols-2">
        <div className="col-1 px-3 py-5 md1360:pl-16 min760:pl-5 min500:pl-2">
          <h1>
            <b className=" text-white text-[15px]">İLETİŞİM BİLGİLERİMİZ</b>
          </h1>
          <br />
          <address className="item-1 leading-[1.3rem]">
            <p>
              <b className="mr-2 text-white ">Mağaza:</b>Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ab natus laboriosam sunt
            </p>
            <br />
            <p>
              <b className="mr-2 text-white">Fabrika:</b>Lorem, ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <br />
            <p>
              <b className="mr-2 text-white">Telefon:</b>0222 222 2222
            </p>
            <br />
            <div>
              <b className="mr-2 text-white">E-Posta:</b>
              <a href="mailto:info@sariönder.com.tr">lorem@ipsum.com.tr</a>
            </div>
          </address>
        </div>
        <div className="col-2 px-3 py-5 md1360:pl-16 min760:pl-5 min500:pl-3">
          <h1 className="relative">
            <b className=" text-white text-[16px]">Kurumsal</b>
            <Line />
          </h1>
          <br />
          <ul className="item-2 leading-10 text-slate-400">
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">Saklama Koşulları</a>
            </li>
            <li>
              <a href="#">Ödeme Seçenekleri</a>
            </li>
            <li>
              <a href="#">Güvenli Gıda Beratı</a>
            </li>
            <li>
              <a href="#">İletişim</a>
            </li>
          </ul>
        </div>
        <div className="col-3 px-3 py-5 md1360:pl-16 min760:pl-5 min500:pl-2">
          <h1 className="relative">
            <b className=" text-white text-[16px]">Müşteri Hizmetleri</b>
            <Line />
          </h1>
          <br />
          <ul className="item-3 leading-10 text-slate-400">
            <li>
              <a href="#">Müşteri Hizmetleri</a>
            </li>
            <li>
              <a href="#">Satış Noktalarımız</a>
            </li>
            <li>
              <a href="#">Destek Talepleri</a>
            </li>
            <li>
              <a href="#">Havale Bildirim</a>
            </li>
            <li>
              <a href="#">Sıkça Sorulan Sorular</a>
            </li>
          </ul>
        </div>
        <div className="col-4 px-3 py-5 md1360:pl-16 min760:pl-5 min500:pl-3">
          <h1 className="relative">
            <b className=" text-white text-[16px]">Önemli Bilgiler</b>
            <Line />
          </h1>
          <br />
          <ul className="item-3 leading-10 text-slate-400">
            <li>
              <a href="#">Güvenli Alışveriş</a>
            </li>
            <li>
              <a href="#">İade Şartları</a>
            </li>
            <li>
              <a href="#">Kargo ve Teslimat Şartları</a>
            </li>
            <li>
              <a href="#">Gizlilik Şartları</a>
            </li>
            <li>
              <a href="#">Hesap Numaralarımız</a>
            </li>
            <li>
              <a href="#">KVKK Aydınlatma Metni</a>
            </li>
          </ul>
        </div>
        <div className="col-5 px-3 py-5 md1360:pl-16 min760:pl-5 min500:pl-8 min500:col-span-2 min500:border-t">
          <h1 className="relative">
            <b className=" text-white text-[16px]">E-BÜLTEN ABONELİĞİ</b>
            <Line />
          </h1>
          <br />
          <p className="text-slate-400">
            E-Bülten`e kayıt olarak kampanyalardan haberdar olabilirsiniz.{" "}
          </p>
          <br />

          <form className="w-10/12">
            <div className="input-box relative h-10 w-44">
              <input
                type="text"
                placeholder="E-Posta Adresiniz"
                className=" outline-none text-black p-2 w-full h-full "
              />

              <div className="absolute h-full w-7 top-0 right-0">
                <button className="tooltip text-blue-500 hover:text-lime-500">
                  <span className="tooltiptext">Abone ol</span>
                  <i className="fa-solid fa-envelope text-xl leading-10"></i>
                </button>
              </div>
            </div>
            <br />
            <div className="check-box">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              <a href="#" target="_blank">
                <b className="text-red-300">Gizlilik Şartları</b>
              </a>
              `nı okudum ve kabul ediyorum.
            </div>
            <br />
            <div className="social-icons text-3xl flex  gap-5">
              <i className="fa-brands fa-instagram hover:text-red-400 cursor-pointer"></i>
              <i className="fa-brands fa-whatsapp hover:text-green-500 cursor-pointer"></i>
              <i className="fa-solid fa-barcode cursor-pointer hover:text-slate-200"></i>
            </div>
          </form>
        </div>
      </div>
      <div className="copyright  flex justify-between items-center bg-black text-slate-400 px-3 py-5 min760:h-36">
        <p>
          Copyright {currentDate} © Lorem ipsum dolor sit amet consectetur | Tüm
          Hakları Saklıdır.
        </p>
        <div className="icons flex gap-5">
          <i className="fa-brands fa-cc-visa text-3xl cursor-pointer hover:text-slate-50"></i>
          <i className="fa-brands fa-cc-mastercard text-3xl cursor-pointer hover:text-slate-50"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
