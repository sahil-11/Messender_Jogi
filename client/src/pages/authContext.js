import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    console.log(inputs);
    const res = await axios.post("http://localhost:9000/api/signin", inputs, {
      withCredentials: true
    });

    setCurrentUser(res.data)
  };

  const deleteC = async (complaintId) => {
    console.log(complaintId);
    const res = await axios.delete("http://localhost:9000/api/delete/complaint/" + complaintId, {
      withCredentials: true
    });

    setCurrentUser(res.data)
  };

  const resolve = async (complaintId) => {
    console.log(complaintId);
    const res = await axios.put("http://localhost:9000/api/resolve/" + complaintId, {
      withCredentials: true
    });

    setCurrentUser(res.data)
  };

  const loginChief = async (inputs) => {
    console.log(inputs);
    const res = await axios.post("http://localhost:9000/api/chief/signin", inputs, {
      withCredentials: true
    });

    setCurrentUser(res.data)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, loginChief, resolve, deleteC }}>
      {children}
    </AuthContext.Provider>
  );
};