import { useContext } from "react";
import { Result } from "antd";
import { AuthContext } from "../../context/AuthProvider";

/*
You can use this credentials to login site
username: 'kminchelle',
password: '0lelplR',
*/

const Login = () => {
  const {
    handleLogin,
    handleChange,
    getUserInfo,
    userInfo,
    isSuccess,
    countdown,
    errors,
  } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* isSuccess durumuna göre içerik gösterimi */}
      {isSuccess ? (
        // isSuccess true ise (giriş başarılıysa) bu blok gösterilir
        <Result
          status="success"
          title={
            <div className="my-8 text-3xl tracking-wide">
              Merhaba
              <span className="text-orange-500 px-5">
                {getUserInfo.firstName} {getUserInfo.lastName}
              </span>
              Hoşgeldiniz
            </div>
          }
          subTitle={
            <div className="text-lg tracking-wide">
              {countdown} Saniye Sonra Anasayfaya Yönlendirileceksiniz
            </div>
          }
        />
      ) : (
        <div className="flex flex-col items-center min760:w-[500px] min500:w-[350px]">
          <div className="bg-white w-[27rem] h-20 text-sm border border-orange-200 tracking-wide min500:w-[350px] min500:text-xs">
            <h2 className="capitalize border-b border-orange-200 h-12 py-2 pl-5 font-semibold min500:text-center">
              giriş yapabilmek için gerekli olan kullanıcı bilgileri
            </h2>
            <div className="grid grid-cols-2 py-2 min500:grid-cols-3">
              <div className="flex justify-end min500:justify-center min500:col-span-2 ">
                <span className="mr-3 font-bold">Kullanıcı Adı:</span>
                <span className="text-slate-500">kminchelle</span>
              </div>
              <div className="flex justify-start ml-7 min500:ml-0">
                <span className="mr-3 font-bold ">Şifre:</span>
                <span className="text-slate-500">0lelplR</span>
              </div>
            </div>
          </div>
          <form
            className="bg-white w-[27rem] h-96 py-10 tracking-wide border flex justify-center items-center flex-col text-xs shadow-lg min500:w-[350px]"
            onSubmit={handleLogin}
          >
            <h2 className="capitalize text-center font-bold text-2xl">
              üye girişi
            </h2>
            <div className="flex flex-col items-center gap-7 py-5">
              <div className="w-96 h-auto flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Kullanıcı Adı"
                  className="outline-none border p-3 w-full tracking-wider min500:w-[300px]"
                  name="username"
                  value={userInfo.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-3">{errors.username}</p>
                )}
              </div>
              <div className="w-96 h-auto flex flex-col items-center">
                <input
                  required
                  type="password"
                  placeholder="Şifre"
                  className="outline-none border p-3  w-full tracking-wider min500:w-[300px]"
                  name="password"
                  value={userInfo.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-3">{errors.password}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="capitalize w-96 h-12 flex justify-center items-center bg-black text-white hover:bg-slate-800 tracking-wider min500:w-[300px]"
            >
              giriş yap
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
