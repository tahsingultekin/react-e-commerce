import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [getUserInfo, setGetUserInfo] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("userToken") || "");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = { username: "", password: "" };

    if (userInfo.username !== "kminchelle" || userInfo.username === "") {
      errors.username = "Kullanıcı adı 'kminchelle' olmalıdır.";
      isValid = false;
    }
    if (userInfo.password !== "0lelplR") {
      errors.password = "Şifre '0lelplR' olmalıdır.";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      // Kullanıcı girişi için API isteği
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userInfo.username,
          password: userInfo.password,
        }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("userToken", data.token); // Token'ı localStorage'a kaydet
        setToken(data.token);

        // Kullanıcı bilgilerini almak için API isteği
        const profileResponse = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: { Authorization: `Bearer ${data.token}` },
        });
        const profileData = await profileResponse.json();
        setGetUserInfo(profileData);
        setIsSuccess(true); // Başarılı girişi belirle
      }
    } catch (error) {
      console.error("Giriş sırasında hata:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setToken(token);
      setIsSuccess(true);

      const fetchUserInfo = async () => {
        try {
          const response = await fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          });
          const userData = await response.json();
          setGetUserInfo(userData);
        } catch (error) {
          console.error("Kullanıcı bilgileri alınırken hata:", error);
        }
      };

      fetchUserInfo();
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isSuccess && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (isSuccess && countdown === 0) {
      // navigate('/'); // Anasayfaya yönlendir
      navigate("/");
    }
    return () => clearTimeout(timer);
  }, [isSuccess, countdown, navigate]);

  const logout = () => {
    setIsLoggingOut(true); // Çıkış yapılıyor bilgisini aktif et

    setTimeout(() => {
      localStorage.removeItem("userToken"); // localStorage'dan token'ı sil
      setToken("");
      setIsSuccess(false);
      setIsLoggingOut(false);
      window.location.href = "/"; // Anasayfaya yönlendir
    }, 2000); // 2 saniye sonra çıkış yap ve anasayfaya yönlendir
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleChange,
        getUserInfo,
        isSuccess,
        countdown,
        userInfo,
        logout,
        isLoggingOut,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
