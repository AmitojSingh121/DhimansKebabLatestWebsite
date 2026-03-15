// src/pages/Menu.jsx
import React from "react";
import Card from "../components/Card";
import { pizzas } from "../data/menudata";

function Menu() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {pizzas.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Menu;
