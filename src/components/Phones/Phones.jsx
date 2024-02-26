import axios from "axios";
import React, { useEffect, useState } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => setPhones(data.data.data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl">Phones: {phones.length}</h2>
    </div>
  );
};

export default Phones;
