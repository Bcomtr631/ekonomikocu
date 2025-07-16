import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

// Backend API'nizin URL'si
const API_URL = 'https://ekonomikocu.net/api/auth'; // BURAYI DEĞİŞTİRDİK

  useEffect(( ) => {
    const loadUser = async () => {
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
        // Daha sonra kullanıcı profilini çekecek bir API endpoint'i ekleyeceğiz
        // Şimdilik sadece token varlığını kontrol ediyoruz
        setUser({ isAuthenticated: true }); 
      } else {
        setUser(null);
      }
      setLoading(false);
    };
    loadUser();
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      console.error(err.response.data.message);
      throw err.response.data.message;
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await axios.post(`${API_URL}/register`, { username, email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      console.error(err.response.data.message);
      throw err.response.data.message;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setUser(null);
    axios.defaults.headers.common["x-auth-token"] = null;
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
