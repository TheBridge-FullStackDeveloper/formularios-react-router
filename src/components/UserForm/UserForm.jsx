import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserForm = () => {
  const initialValue = {
    name: "",
    email: "",
  };

  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!data.name) {
      setMessage("");
    } else if (data.name.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [data]);

  const handleInputChange = (e) => {
    setData({
      ...data, //me mantiene lo que ya hay en el formulario
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(initialValue);
    navigate("/");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Insert your name"
        onChange={handleInputChange}
        value={data.name}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Insert your email"
        onChange={handleInputChange}
        value={data.email}
      />
      <input type="submit" value="Send" disabled={btnDisabled} />
      <p>{message}</p>
    </form>
  );
};
