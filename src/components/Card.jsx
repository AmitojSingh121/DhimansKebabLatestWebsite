// import React from 'react'
// import image1 from '../assests/image1.jpg';
// import { useDispatch } from 'react-redux';
// import { AddItem } from '../Redux/cartSlice';
// import { toast } from "react-toastify";


// function Card({name, image , ingredient , sizes , Prices , Mini, Media, Maxi, Party , Minifood, Mediafood, Maxifood, Partyfood , bebita , ingri , newingri , paopita , bttn ,  buttonn , Showbuttonn , showPriceButtons, id , DonerPrice }) {
//   const hideAddToCart =
//   name === "LAMB SEEKH PIZZA" ||
//   name === " FRANGO SEEKH PIZZA";

//   let dispatch = useDispatch();
//   const cleanName = name?.trim();


//   return (
//     <div className='w-[400px] h-[580px] bg-white p-4 rounded-lg  flex flex-col gap-5'>
//         {/* This div for my image */}
//        <div className='w-[100%] h-[100%] overflow-hidden rounded-lg '>
//             <img src={image1  || "/fallback.png"} alt="Pizza Margreta Image" className='w-[100%] h-[100%] object-cover hover:scale-110 transition-all duration-300'/>
//        </div>

//         {/* This div for my image name  */}
//         <div className='text-2xl font-semibold '>
//              {name} 
//             <span>{DonerPrice}</span> 
//             {/* {!Showbuttonn && (
//                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline mx-12'>
//                        {buttonn}
//                 </button>
//             )} */}

//             {!Showbuttonn && (
//   <button
//     className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline mx-12'
//     onClick={() =>
//       dispatch(
//         AddItem({
//           id: id,
//           name: name,
//           price: Number(Prices), // 👈 IMPORTANT
//           image: image1,
//           qty: 1,
//         })
//       )
//     }
//   >
//     {buttonn}
//   </button>
// )}
//         </div>

//         {/* This div for ingredient */}
//         <div>
//             {ingredient}
//         </div>
//        <div>{bebita}</div>
//         {ingri}
//         <br/>
//         {newingri}
//         {/* Size and Price Text  */}

//         <div className='flex flex-row justify-center items-center mr-8 gap-12 text-lg font-semibold'>
//             <h4 className='mr-10'>{sizes}</h4>
//             <h4 className='mr-9'>{Prices}</h4>
//         </div>

//         {/* This div for sizes , prices , add to cart + button */}
//         {/* 1st  */}
//         <div className='w-full flex justify-between items-center'>
//             <p className='text-large font-bold' >{Mini}</p>
//             <div className='mx-auto text-xl'>{}
//               {Minifood !== "Not Available" && (
//     <button 

//       onClick={() => {
//         dispatch(
//           AddItem({
//             id: `${id}-mini`,
//             name: `(Mini)`,
//             image: image1,
//             qty: 1,
//           })
//         );
//         toast.success(
//           `${cleanName} Mini – ${Minifood} added 🛒`
//         );
//       }}
//     >
//       {Minifood}
//     </button>
//   )}

//     </div>

//             {showPriceButtons && (
//                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() =>{ console.log("Clicked" ,id , name ) ; dispatch(AddItem({ id: `${id}-mini`,productId:id, name: `${name} Mini`, price:Number(Minifood.replace("€", "")),  image:image1 , qty:1 }))
//                    toast.success(`${name} added to cart 🛒`);
//                 }}>  {/* Updated: Includes price and size */}
//                        {bttn}
//                 </button>
//             )}
//         </div>

//         {/* 2nd  */}
//         <div className='w-full flex justify-between items-center'>
//             <p className='text-large font-bold'>{Media}</p>

//             <div className='mx-auto text-xl'>{Mediafood}</div>

//             {showPriceButtons && (
//                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() =>{ console.log("Clicked" ,id , name ) ; dispatch(AddItem({ id:`${id}-media` , name: name + Media, price:Number(Minifood.replace("€", "")), image:image1 , qty:1  }))
//                     toast.success(`${name} added to cart 🛒` );
//                } }>  {/* Updated */}
//                        {bttn}
//                 </button>
//             )}
//         </div>

//         {/* 3rd  */}
//         <div className='w-full flex justify-between items-center'>
//             <p className='text-large font-bold'>{Maxi}</p>

//             <div className='mx-auto text-xl'>{Maxifood}</div>

//             {showPriceButtons&& (
//                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() =>{ console.log("Clicked" ,id , name ) ; dispatch(AddItem({  id: `${id}-maxi`,          // ✅ FIXED
//                   name: `${name} ${Maxi}`,   // ✅ CLEAN NAME
//                     price: Number(Mediafood.replace("€", "")),   // ✅ NUMBER
//                       image: image1,
//                       qty: 1 }))
//                      toast.success(`${name} added to cart 🛒`);
//                       }}>  {/* Updated */}

//                        {bttn}
//                 </button>
//             )}
//         </div>

//         {/* 4th  */}
//         <div className='w-full flex justify-between items-center'>
//             <p className='text-large font-bold'>{Party}</p>

//             <div className='mx-auto text-xl'>{Partyfood}</div>
//             {showPriceButtons && (
//                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() => dispatch(AddItem({ id:`${id}-party`, name: `${name}${Party}` + Party, price:Number(Partyfood.replace("€", "").trim()), image:image1 , qty:1}))
            
//                 }> {/* Updated */}
//                        {bttn}
//                 </button>
//             )}
//         </div>

//           {/* ================= KEBAB / DONER (SINGLE PRICE) ================= */}
//     {/* ================= KEBAB / DONER (SINGLE PRICE) ================= */}
// {/* ================= KEBAB / DONER (SINGLE PRICE) ================= */}
// {!showPriceButtons &&  !hideAddToCart&& 
// (
//   <button
//     className="bg-yellow-500 w-full p-3 rounded-lg text-xl font-bold mt-4"
//     onClick={() => 
//       { console.log("Clicked" ,id , name ) 
//       dispatch(
//         AddItem({
//           id: id,
//           name: name,
//           price: Number(paopita),
//           image: image,
//           qty: 1,
//         }))
//        toast.success(`${name} added to cart 🛒`);

// }}>
//     Add to Cart
//   </button>
// )}

//     </div>
//   )
// }

// export default Card


// // import React from "react";
// // import { useDispatch } from "react-redux";
// // import { AddItem } from "../Redux/cartSlice";

// // function Card({
// //   id,
// //   name,
// //   image1,
// //   ingredient,
// //   sizes,
// //   Prices,

// //   Mini,
// //   Media,
// //   Maxi,
// //   Party,

// //   Minifood,
// //   Mediafood,
// //   Maxifood,
// //   Partyfood,

// //   bebita,
// //   ingri,
// //   newingri,
// //   paopita,

// //   showPriceButtons,
// //   bttn,
// // }) {
// //   const dispatch = useDispatch();

// //   return (
// //     <div className="w-[400px] h-[580px] bg-white p-4 rounded-lg flex flex-col gap-4">
      
// //       {/* IMAGE */}
// //       <div className="w-full h-[250px] overflow-hidden rounded-lg">
// //         <img
// //           src={image1}
// //           alt={name}
// //           className="w-full h-full object-cover hover:scale-110 transition-all"
// //         />
// //       </div>

// //       {/* NAME */}
// //       <h2 className="text-2xl font-semibold">
// //         {name} <span>{paopita}</span>
// //       </h2>

// //       <p>{ingredient}</p>
// //       <p>{bebita}</p>
// //       {ingri}
// //       {newingri}

// //       {/* SIZE HEADER */}
// //       {showPriceButtons && (
// //         <div className="flex justify-between font-semibold mt-2">
// //           <span>{sizes}</span>
// //           <span>{Prices}</span>
// //         </div>
// //       )}

// //       {/* ================= PIZZA (SIZE BASED) ================= */}
// //       {showPriceButtons && (
// //         <>
// //           {/* MINI */}
// //           <div className="flex justify-between items-center">
// //             <span>{Mini}</span>
// //             <span>{Minifood}</span>
// //             <button
// //               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
// //               onClick={() =>
// //                 dispatch(
// //                   AddItem({
// //                     id: `${id}-mini`,
// //                     name: `${name} ${Mini}`,
// //                     price: Number(Minifood),
// //                     image: image1,
// //                     qty: 1,
// //                   })
// //                 )
// //               }
// //             >
// //               {bttn}
// //             </button>
// //           </div>

// //           {/* MEDIA */}
// //           <div className="flex justify-between items-center">
// //             <span>{Media}</span>
// //             <span>{Mediafood}</span>
// //             <button
// //               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
// //               onClick={() =>
// //                 dispatch(
// //                   AddItem({
// //                     id: `${id}-media`,
// //                     name: `${name} ${Media}`,
// //                     price: Number(Mediafood),
// //                     image: image1,
// //                     qty: 1,
// //                   })
// //                 )
// //               }
// //             >
// //               {bttn}
// //             </button>
// //           </div>

// //           {/* MAXI */}
// //           <div className="flex justify-between items-center">
// //             <span>{Maxi}</span>
// //             <span>{Maxifood}</span>
// //             <button
// //               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
// //               onClick={() =>
// //                 dispatch(
// //                   AddItem({
// //                     id: `${id}-maxi`,
// //                     name: `${name} ${Maxi}`,
// //                     price: Number(Maxifood),
// //                     image: image1,
// //                     qty: 1,
// //                   })
// //                 )
// //               }
// //             >
// //               {bttn}
// //             </button>
// //           </div>

// //           {/* PARTY */}
// //           <div className="flex justify-between items-center">
// //             <span>{Party}</span>
// //             <span>{Partyfood}</span>
// //             <button
// //               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
// //               onClick={() =>
// //                 dispatch(
// //                   AddItem({
// //                     id: `${id}-party`,
// //                     name: `${name} ${Party}`,
// //                     price: Number(Partyfood),
// //                     image: image1,
// //                     qty: 1,
// //                   })
// //                 )
// //               }
// //             >
// //               {bttn}
// //             </button>
// //           </div>
// //         </>
// //       )}

    
// //     </div>
// //   );
// // }

// // export default Card;

// import React, {useState } from "react";
// import image1 from "../assests/image1.jpg";
// import { useDispatch } from "react-redux";
// import { AddItem } from "../Redux/cartSlice";
// import { toast } from "react-toastify";

// function Card({
//   id,
//   name,
//   ingredient,
//   sizes,
//   Prices,

//   Mini,
//   Media,
//   Maxi,
//   Party,

//   Minifood,
//   Mediafood,
//   Maxifood,
//   Partyfood,
// }) {
//   const dispatch = useDispatch();

//   const [selectedSize, setSelectedSize] = useState(null);
//   const [selectedIngredients, setSelectedIngredients] = useState([]);

//   const ingredientsList = [
//     "Kebab Sauce",
//     "Mozzarella",
//     "Oregano",
//     "Seekh Kebab",
//     "Onion",
//   ];

//   const toggleIngredient = (item) => {
//     if (selectedIngredients.includes(item)) {
//       setSelectedIngredients(
//         selectedIngredients.filter((i) => i !== item)
//       );
//     } else {
//       setSelectedIngredients([...selectedIngredients, item]);
//     }
//   };

//   const handleAdd = (size, priceText) => {
//     dispatch(
//       AddItem({
//         id: `${id}-${size}`,
//         name: `${name} (${size})`,
//         price: Number(priceText.replace("€", "")),
//         image: image1,
//         qty: 1,
//         ingredients: size === "mini" ? selectedIngredients : [],
//       })
//     );

//     toast.success(`${name} (${size}) added 🛒`);
//   };

//   return (
//     <div className="w-[400px] bg-white p-4 rounded-lg flex flex-col gap-4">
      
//       {/* IMAGE */}
//       <div className="w-full h-[230px] overflow-hidden rounded-lg">
//         <img
//           src={image1}
//           alt={name}
//           className="w-full h-full object-cover hover:scale-110 transition-all"
//         />
//       </div>

//       {/* NAME */}
//       <h2 className="text-2xl font-semibold">{name}</h2>

//       {/* INGREDIENT TEXT */}
//       <p className="text-sm text-gray-600">{ingredient}</p>

//       {/* SIZE HEADER */}
//       <div className="flex justify-between font-semibold mt-2">
//         <span>{sizes}</span>
//         <span>{Prices}</span>
//       </div>

//       {/* ================= MINI ================= */}
//       <div className="flex justify-between items-center">
//         <span className="font-bold">{Mini}</span>

//         <div className="flex items-center gap-3">
//           <span>{Minifood}</span>
//           <button
//             className="bg-yellow-500 px-3 py-1 rounded-md font-semibold"
//             onClick={() => {
//               setSelectedSize("mini");
//               handleAdd("mini", Minifood);
//             }}
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {/* MINI INGREDIENTS */}
//       {selectedSize === "mini" && (
//         <div className="border p-3 rounded-md">
//           <h4 className="font-semibold mb-2">Choose Ingredients</h4>

//           {ingredientsList.map((item) => (
//             <label key={item} className="flex items-center gap-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={selectedIngredients.includes(item)}
//                 onChange={() => toggleIngredient(item)}
//               />
//               {item}
//             </label>
//           ))}
//         </div>
//       )}

//       {/* ================= MEDIA ================= */}
//       <div className="flex justify-between items-center">
//         <span className="font-bold">{Media}</span>

//         <div className="flex items-center gap-3">
//           <span>{Mediafood}</span>
//           <button
//             className="bg-yellow-500 px-3 py-1 rounded-md font-semibold"
//             onClick={() => handleAdd("media", Mediafood)}
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {/* ================= MAXI ================= */}
//       <div className="flex justify-between items-center">
//         <span className="font-bold">{Maxi}</span>

//         <div className="flex items-center gap-3">
//           <span>{Maxifood}</span>
//           <button
//             className="bg-yellow-500 px-3 py-1 rounded-md font-semibold"
//             onClick={() => handleAdd("maxi", Maxifood)}
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {/* ================= PARTY ================= */}
//       <div className="flex justify-between items-center">
//         <span className="font-bold">{Party}</span>

//         <div className="flex items-center gap-3">
//           <span>{Partyfood}</span>
//           <button
//             className="bg-yellow-500 px-3 py-1 rounded-md font-semibold"
//             onClick={() => handleAdd("party", Partyfood)}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React, { useState, useEffect } from "react";
import image1 from "../assests/image1.jpg";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/cartSlice";
import { toast } from "react-toastify";
import { LuVegan } from "react-icons/lu";

function Card({
  id,
  name,
  ingredient,
  foodCategory,
  food_image,
  paopitaprice,
  sizes,
  Prices,
  DonerPrice,
  
  food_ingri,
  food_bebita,
  food_newingri,

  Mini,
  Media,
  Maxi,
  Party,

  Minifood,
  Mediafood,
  Maxifood,
  Partyfood,

  ingredientsBySize, // 👈 NEW
  ingredients = [],
  comboPrice,
}) {
  const dispatch = useDispatch();
  const drinks = [
{ name:"Coca-Cola", price:2 },
{ name:"Coca-Cola Zero 33cl", price:2 },
{ name:"Sumol Annanas 0.33cl", price:2 },
{ name:"Frutea Manga e Maracuja 33cl", price:2 },
{ name:"Brazil Guarana 0.33cl", price:2 },
{ name:"Sprite Limao 33cl", price:2 },
{ name:"Fanta Laranja 33cl", price:2 },
{ name:"Maaza Mango lata", price:2 }
];

  // 🔴 YAHAN PASTE KARNA HAI 👇
const [comboType, setComboType] = useState("without"); // without | with
const [selectedDrink, setSelectedDrink] = useState("");
const [description, setDescription] = useState("");

// baaki states
const [selectedSize, setSelectedSize] = useState(null);
const [selectedPrice, setSelectedPrice] = useState("");
const [selectedIngredients, setSelectedIngredients] = useState([]);

// Salada ingredients state (all checked by default)
const [selectedSaladIngredients, setSelectedSaladIngredients] = useState(
  ingredients || []
);

const toggleSaladIngredient = (item) => {
  setSelectedSaladIngredients((prev) =>
    prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
  );
};

const addSaladToCart = () => {
  dispatch(
    AddItem({
      id: `${id}`,
      name: name,
      price: Number(paopitaprice),
      image: image1,
      qty: 1,
      ingredients: selectedSaladIngredients,
    })
  );
  toast.success(`${name} added 🛒`);
};

  // 🔹 category flags
  const isPizza = foodCategory === "Pizza";
  const isKebab = foodCategory === "Kebab";

// Mamamia
  const hideMiniOptions =
  name === "Pizza Mamamia" && selectedSize === "Mini";

  // Quatro
  const hideQuatroOptions = 
  name === "Pizza Quatro Estações" && selectedSize === "Mini";

  // Napoli
  const hideNapoliOptions =   
  name === "Pizza Napoli" && selectedSize === "Mini";

  //Tropical
  const hideTropicalOptions =   
  name === "Pizza Tropical" && selectedSize === "Mini";

  // Fantasia
  const hideFantasiaOptions = 
  name === "Pizza Fantasia" && selectedSize === "Mini";

  //Calzone (Fechade)
  const hideCalzone = 
  name === "Pizza Calzone (Fechade)" && selectedSize === "Mini";

  //Calzone (Fechade)
  const hideCalzonez = 
  name === "Pizza Calzone (Fechade)" && selectedSize === "Party";

  //Pizza Especial
  const hidePizzaEspecial = 
  name === "Pizza Especial" && selectedSize === "Mini";


useEffect(() => {
  if (!selectedSize) return;

  setSelectedIngredients(
    ingredientsBySize?.[selectedSize] || []
  );
}, [selectedSize, ingredientsBySize]);

  // ✅ Toggle ingredient
  const toggleIngredient = (item) => {
    if (selectedIngredients.includes(item)) {
      setSelectedIngredients(
        selectedIngredients.filter((i) => i !== item)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, item]);
    }
  };

  // ✅ FINAL ADD TO CART
  const addToCart = () => {
    if (!selectedSize) {
      toast.error("Please select size");
      return;
    }

    dispatch(
      AddItem({
        id: `${id}-${selectedSize}`,
        name: `${name} (${selectedSize})`,
        price: Number(selectedPrice.replace("€", "")),
        image: image1,
        qty: 1,
        ingredients: selectedIngredients,
      })
    );

    toast.success(`${name} added 🛒`);

    // reset after add
    setSelectedSize(null);
    setSelectedIngredients([]);
    setSelectedPrice("");
  };

  // 🔹 ADD TO CART (Kebab)
 const addKebabToCart = () => {

const drinkPrice = 2

const finalPrice =
comboType === "with"
? Number(comboPrice)
: Number(paopitaprice) + (selectedDrink ? drinkPrice : 0)

dispatch(
AddItem({
id: `${id}-${comboType}`,
name,
image: image1,
price: finalPrice,
qty: 1,
comboType,
drink: selectedDrink,
ingredients: selectedIngredients,
description
})
)

toast.success(`${name} added 🛒`)
setSelectedIngredients([])

}
return (
    <div className="w-[380px] bg-white p-4 rounded-lg flex flex-col gap-4">
      {/* IMAGE */}
      <div className="w-full h-[220px] overflow-hidden rounded-lg">
        <img
          src={image1}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-all"
        />
      </div>

      {/* NAME */}
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        {name}
        {foodCategory === "Vegitarian" && (
          <LuVegan className="text-green-500 w-6 h-6" title="Vegan" />
        )}
            <p className="font-semibold text-lg ">{DonerPrice}</p>
      </h2>
      
       {/* ================= KEBAB INFO (NO SIZE) ================= */}
{isKebab && (
  <>    
      {/* INGREDIENT TEXT */}
    <p className="text-sm">{food_ingri}</p>
    <p className="text-sm text-gray-600">{food_newingri}</p>
    <p className=" text-gray-600 text-xl">{ingredient}</p>
    <p className="text-sm">{food_bebita}</p>
  </>
)}

      {/* SIZE HEADER */}
    {/* ================= PIZZA SIZES ONLY ================= */}
{isPizza && (
  <>
    {/* SIZE HEADER */}
    <div className="flex justify-between font-semibold">
      <span>{sizes}</span>
      <span>{Prices}</span>
    </div>

    {/* SIZE BUTTONS */}
    <button
      className={`p-2 rounded border ${
        selectedSize === "Mini" ? "bg-yellow-400" : ""
      }`}
      onClick={() => {
        setSelectedSize("Mini");
        setSelectedPrice(Minifood);
      }}
    >
      Mini ({Minifood})
    </button>

    <button
      className={`p-2 rounded border ${
        selectedSize === "Media" ? "bg-yellow-400" : ""
      }`}
      onClick={() => {
        setSelectedSize("Media");
        setSelectedPrice(Mediafood);
      }}
    >
      Media ({Mediafood})
    </button>

    <button
      className={`p-2 rounded border ${
        selectedSize === "Maxi" ? "bg-yellow-400" : ""
      }`}
      onClick={() => {
        setSelectedSize("Maxi");
        setSelectedPrice(Maxifood);
      }}
    >
      Maxi ({Maxifood})
    </button>

    <button
      className={`p-2 rounded border ${
        selectedSize === "Party" ? "bg-yellow-400" : ""
      }`}
      onClick={() => {
        setSelectedSize("Party");
        setSelectedPrice(Partyfood);
      }}
    >
      Party ({Partyfood})
    </button>
  </>
)}
      {/* ================= INGREDIENTS ================= */}
      {selectedSize && !hideMiniOptions && !hideQuatroOptions && !hideNapoliOptions && !hideTropicalOptions && !hideFantasiaOptions && !hideCalzone && !hideCalzonez  && !hidePizzaEspecial &&(
        <div className="border p-3 rounded-md">
          <h4 className="font-semibold mb-2">
            Choose Ingredients ({selectedSize})
          </h4>
            
          {ingredientsBySize[selectedSize]?.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 text-sm"
            >
              <input
                type="checkbox"
                checked={selectedIngredients.includes(item)}
                onChange={() => toggleIngredient(item)}
              />
              {item}
            </label>
          ))}
        </div>
      )}
      
      {/* Ingrediends for Salada Mista  */} 

     {ingredients && ingredients.length > 0 && (
      <div className="border p-3 rounded-md mt-2">
        <h4 className="font-semibold mb-2">Choose Ingredients</h4>
        {ingredients.map((ing, index) => (
          <label key={index} className="flex gap-2 text-sm items-center">
            <input
              type="checkbox"
              checked={selectedSaladIngredients.includes(ing)}
              onChange={() => toggleSaladIngredient(ing)}
            />
            {ing}
          </label>
        ))}
      </div>
    )}

    {/* Add to Cart for Saladas */}
    {foodCategory === "Saladas" && ingredients && ingredients.length > 0 && (
      <button
        className="bg-yellow-500 p-3 rounded-lg text-lg font-bold w-full mt-2"
        onClick={addSaladToCart}
      >
        Add to Cart
      </button>
    )}

    {/* Add to Cart for Saladas */}
    {foodCategory === "Vegitarian" && ingredients && ingredients.length > 0 && (
      <button
        className="bg-yellow-500 p-3 rounded-lg text-lg font-bold w-full mt-2"
        onClick={addSaladToCart}
      >
        Add to Cart
      </button>
    )}
      
      {/* ================= ADD TO CART Used Only Kebab ================= */}
      {selectedSize && !hideMiniOptions && !hideQuatroOptions && !hideNapoliOptions && !hideTropicalOptions && !hideFantasiaOptions && !hideCalzone && !hideCalzonez && !hidePizzaEspecial &&(
        <button
          className="bg-yellow-500 p-3 rounded-lg text-lg font-bold"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      )}
      

      {/* ================= KEBAB ================= */}
{isKebab && (
  <>
    {/* 🔹 COMBO TYPE */}
    <div className="border p-3 rounded-md">
      <h4 className="font-semibold mb-2">Select Option</h4>

      <label className="flex gap-2">
        <input
          type="radio"
          name={`combo-${id}`}
          checked={comboType === "without"}
          onChange={() => setComboType("without")}
        />
        Without Combo
      </label>

      <label className="flex gap-2">
        <input
          type="radio"
          name={`combo-${id}`}
          checked={comboType === "with"}
          onChange={() => setComboType("with")}
        />
        With Combo
      </label>
    </div>

    {/* 🔹 INGREDIENTS
    {ingredients?.length > 0 && (
      <div className="border p-3 rounded-md">
        <h4 className="font-semibold mb-2">Choose Ingredients</h4>
        {ingredients.map((item) => (
          <label key={item} className="flex gap-2 text-sm">
            <input
              type="checkbox"
              checked={selectedIngredients.includes(item)}
              onChange={() => toggleIngredient(item)}
            />
            {item}
          </label>
        ))}
      </div>
    )} */}  

    {/* 🔹 DRINKS (ONLY WITH COMBO – FREE) */}
    {/* {comboType === "with" && (
      <div className="border p-3 rounded-md">
        <h4 className="font-semibold mb-2">Select Drink (Free)</h4>

        {["Coca-Cola", "Coca-Cola Zero 33cl", "Sumol Annanas 0.33cl", "Frutea Manga e Maracuja 33cl" ,"Brazil Guarana 0.33cl" , "Sprite Limao 33cl" , "Fanta Laranja 33cl" , "Maaza Mango lata "].map((drink) => (
          <label key={drink} className="flex gap-2 text-sm">
            <input
              type="radio"
              name={`drink-${id}`}
              checked={selectedDrink === drink}
              onChange={() => setSelectedDrink(drink)}
            />
            {drink}
          </label>
        ))}
      </div>
    )} */}

    {/* New Drink (Only With andf Without Combo Free ) */}
    {/* 🔹 DRINKS */}
{/* <div className="border p-3 rounded-md">

<h4 className="font-semibold mb-2">
{comboType === "with" ? "Select Drink (Free)" : "Select Drink"}
</h4>

{drinks.map((drink) => (

<label key={drink.name} className="flex justify-between text-sm">

<div className="flex gap-2">
<input
type="radio"
name={`drink-${id}`}
checked={selectedDrink === drink.name}
onChange={()=>setSelectedDrink(drink.name)}
/>

{drink.name}
</div>

{/* PRICE CONDITION */}
{/* {comboType === "without" && (
<span>€{drink.price}</span>
)}
</label>
))}
</div> */}

<div className="border p-3 rounded-md">

<h4 className="font-semibold mb-2">
{comboType === "with" ? "Select Drink (Free)" : "Select Drink"}
</h4>

{drinks.map((drink)=>(
<label key={drink.name} className="flex justify-between text-sm">

<div className="flex gap-2">
<input
type="radio"
name={`drink-${id}`}
checked={selectedDrink === drink.name}
onChange={()=>setSelectedDrink(drink.name)}
/>

{drink.name}
</div>

{comboType === "without" && (
<span>€{drink.price}</span>
)}

</label>
))}

</div>

    {/* 🔹 DESCRIPTION */}
    <textarea
      className="border p-2 rounded-md text-sm"
      placeholder="Add description (optional)"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

    {/* 🔹 ADD TO CART */}
    <button
      className="bg-yellow-500 p-3 rounded-lg font-bold"
      onClick={addKebabToCart}
    >
      Add to Cart 
      {comboType === "with" ? comboPrice : paopitaprice}
    </button>
  </>
)}
    </div>
  );
}
      
    {/* </div>
  );
} */}



export default Card;
