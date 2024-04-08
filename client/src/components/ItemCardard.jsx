import React from "react";

const ItemCard = ({ image, description, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={image} alt="Item" className="w-full h-32 object-cover mb-4" />
      <p className="text-gray-800 font-semibold">{description}</p>
      <p className="text-gray-600 mt-2">Price: ${price}</p>
    </div>
  );
};

export default ItemCard;
