// // import React from 'react'
// // import image1 from '../assests/image1.jpg';
// // import { useDispatch } from 'react-redux';
// // import { AddItem } from '../Redux/cartSlice';
// // import { toast } from "react-toastify";


// // function Card({name, image , ingredient , sizes , Prices , Mini, Media, Maxi, Party , Minifood, Mediafood, Maxifood, Partyfood , bebita , ingri , newingri , paopita , bttn ,  buttonn , Showbuttonn , showPriceButtons, id , DonerPrice }) {
// //   const hideAddToCart =
// //   name === "LAMB SEEKH PIZZA" ||
// //   name === " FRANGO SEEKH PIZZA";

// //   let dispatch = useDispatch();
// //   const cleanName = name?.trim();


// //   return (
// //     <div className='w-[400px] h-[580px] bg-white p-4 rounded-lg  flex flex-col gap-5'>
// //         {/* This div for my image */}
// //        <div className='w-[100%] h-[100%] overflow-hidden rounded-lg '>
// //             <img src={image1  || "/fallback.png"} alt="Pizza Margreta Image" className='w-[100%] h-[100%] object-cover hover:scale-110 transition-all duration-300'/>
// //        </div>

// //         {/* This div for my image name  */}
// //         <div className='text-2xl font-semibold '>
// //              {name} 
// //             <span>{DonerPrice}</span> 
// //             {/* {!Showbuttonn && (
// //                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline mx-12'>
// //                        {buttonn}
// //                 </button>
// //             )} */}

// //             {!Showbuttonn && (
// //   <button
// //     className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline mx-12'
// //     onClick={() =>
// //       dispatch(
// //         AddItem({
// //           id: id,
// //           name: name,
// //           price: Number(Prices), // 👈 IMPORTANT
// //           image: image1,
// //           qty: 1,
// //         })
// //       )
// //     }
// //   >
// //     {buttonn}
// //   </button>
// // )}
// //         </div>

// //         {/* This div for ingredient */}
// //         <div>
// //             {ingredient}
// //         </div>
// //        <div>{bebita}</div>
// //         {ingri}
// //         <br/>
// //         {newingri}
// //         {/* Size and Price Text  */}

// //         <div className='flex flex-row justify-center items-center mr-8 gap-12 text-lg font-semibold'>
// //             <h4 className='mr-10'>{sizes}</h4>
// //             <h4 className='mr-9'>{Prices}</h4>
// //         </div>

// //         {/* This div for sizes , prices , add to cart + button */}
// //         {/* 1st  */}
// //         <div className='w-full flex justify-between items-center'>
// //             <p className='text-large font-bold' >{Mini}</p>
// //             <div className='mx-auto text-xl'>{}
// //               {Minifood !== "Not Available" && (
// //     <button 

// //       onClick={() => {
// //         dispatch(
// //           AddItem({
// //             id: `${id}-mini`,
// //             name: `(Mini)`,
// //             image: image1,
// //             qty: 1,
// //           })
// //         );
// //         toast.success(
// //           `${cleanName} Mini – ${Minifood} added 🛒`
// //         );
// //       }}
// //     >
// //       {Minifood}
// //     </button>
// //   )}

// //     </div>

// //             {showPriceButtons && (
// //                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() =>{ console.log("Clicked" ,id , name ) ; dispatch(AddItem({ id: `${id}-mini`,productId:id, name: `${name} Mini`, price:Number(Minifood.replace("€", "")),  image:image1 , qty:1 }))
// //                    toast.success(`${name} added to cart 🛒`);
// //                 }}>  {/* Updated: Includes price and size */}
// //                        {bttn}
// //                 </button>
// //             )}
// //         </div>

// //         {/* 2nd  */}
// //         <div className='w-full flex justify-between items-center'>
// //             <p className='text-large font-bold'>{Media}</p>

// //             <div className='mx-auto text-xl'>{Mediafood}</div>

// //             {showPriceButtons && (
// //                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() =>{ console.log("Clicked" ,id , name ) ; dispatch(AddItem({ id:`${id}-media` , name: name + Media, price:Number(Minifood.replace("€", "")), image:image1 , qty:1  }))
// //                     toast.success(`${name} added to cart 🛒` );
// //                } }>  {/* Updated */}
// //                        {bttn}
// //                 </button>
// //             )}
// //         </div>

// //         {/* 3rd  */}
// //         <div className='w-full flex justify-between items-center'>
// //             <p className='text-large font-bold'>{Maxi}</p>

// //             <div className='mx-auto text-xl'>{Maxifood}</div>

// //             {showPriceButtons&& (
// //                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() =>{ console.log("Clicked" ,id , name ) ; dispatch(AddItem({  id: `${id}-maxi`,          // ✅ FIXED
// //                   name: `${name} ${Maxi}`,   // ✅ CLEAN NAME
// //                     price: Number(Mediafood.replace("€", "")),   // ✅ NUMBER
// //                       image: image1,
// //                       qty: 1 }))
// //                      toast.success(`${name} added to cart 🛒`);
// //                       }}>  {/* Updated */}

// //                        {bttn}
// //                 </button>
// //             )}
// //         </div>

// //         {/* 4th  */}
// //         <div className='w-full flex justify-between items-center'>
// //             <p className='text-large font-bold'>{Party}</p>

// //             <div className='mx-auto text-xl'>{Partyfood}</div>
// //             {showPriceButtons && (
// //                 <button className='bg-yellow-500 w-8 h-8 rounded-full text-lg font-bold outline px-2' onClick={() => dispatch(AddItem({ id:`${id}-party`, name: `${name}${Party}` + Party, price:Number(Partyfood.replace("€", "").trim()), image:image1 , qty:1}))
            
// //                 }> {/* Updated */}
// //                        {bttn}
// //                 </button>
// //             )}
// //         </div>

// //           {/* ================= KEBAB / DONER (SINGLE PRICE) ================= */}
// //     {/* ================= KEBAB / DONER (SINGLE PRICE) ================= */}
// // {/* ================= KEBAB / DONER (SINGLE PRICE) ================= */}
// // {!showPriceButtons &&  !hideAddToCart&& 
// // (
// //   <button
// //     className="bg-yellow-500 w-full p-3 rounded-lg text-xl font-bold mt-4"
// //     onClick={() => 
// //       { console.log("Clicked" ,id , name ) 
// //       dispatch(
// //         AddItem({
// //           id: id,
// //           name: name,
// //           price: Number(paopita),
// //           image: image,
// //           qty: 1,
// //         }))
// //        toast.success(`${name} added to cart 🛒`);

// // }}>
// //     Add to Cart
// //   </button>
// // )}

// //     </div>
// //   )
// // }

// // export default Card


// // // import React from "react";
// // // import { useDispatch } from "react-redux";
// // // import { AddItem } from "../Redux/cartSlice";

// // // function Card({
// // //   id,
// // //   name,
// // //   image1,
// // //   ingredient,
// // //   sizes,
// // //   Prices,

// // //   Mini,
// // //   Media,
// // //   Maxi,
// // //   Party,

// // //   Minifood,
// // //   Mediafood,
// // //   Maxifood,
// // //   Partyfood,

// // //   bebita,
// // //   ingri,
// // //   newingri,
// // //   paopita,

// // //   showPriceButtons,
// // //   bttn,
// // // }) {
// // //   const dispatch = useDispatch();

// // //   return (
// // //     <div className="w-[400px] h-[580px] bg-white p-4 rounded-lg flex flex-col gap-4">
      
// // //       {/* IMAGE */}
// // //       <div className="w-full h-[250px] overflow-hidden rounded-lg">
// // //         <img
// // //           src={image1}
// // //           alt={name}
// // //           className="w-full h-full object-cover hover:scale-110 transition-all"
// // //         />
// // //       </div>

// // //       {/* NAME */}
// // //       <h2 className="text-2xl font-semibold">
// // //         {name} <span>{paopita}</span>
// // //       </h2>

// // //       <p>{ingredient}</p>
// // //       <p>{bebita}</p>
// // //       {ingri}
// // //       {newingri}

// // //       {/* SIZE HEADER */}
// // //       {showPriceButtons && (
// // //         <div className="flex justify-between font-semibold mt-2">
// // //           <span>{sizes}</span>
// // //           <span>{Prices}</span>
// // //         </div>
// // //       )}

// // //       {/* ================= PIZZA (SIZE BASED) ================= */}
// // //       {showPriceButtons && (
// // //         <>
// // //           {/* MINI */}
// // //           <div className="flex justify-between items-center">
// // //             <span>{Mini}</span>
// // //             <span>{Minifood}</span>
// // //             <button
// // //               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
// // //               onClick={() =>
// // //                 dispatch(
// // //                   AddItem({
// // //                     id: `${id}-mini`,
// // //                     name: `${name} ${Mini}`,
// // //                     price: Number(Minifood),
// // //                     image: image1,
// // //                     qty: 1,
// // //                   })
// // //                 )
// // //               }
// // //             >
// // //               {bttn}
// // //             </button>
// // //           </div>

// // //           {/* MEDIA */}
// // //           <div className="flex justify-between items-center">
// // //             <span>{Media}</span>
// // //             <span>{Mediafood}</span>
// // //             <button
// // //               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
// // //               onClick={() =>
// // //                 dispatch(
// // //                   AddItem({
// // //                     id: `${id}-media`,
// // //                     name: `${name} ${Media}`,
// // //                     price: Number(Mediafood),
// // //                     image: image1,
// // //                     qty: 1,
// // //                   })
// // //                 )
// // //               }
// // //             >
// // //               {bttn}
// // //             </button>
// // //           </div>

// // //           {/* MAXI */}
// // //           <div className="flex justify-between items-center">
// // //             <span>{Maxi}</span>
// // //             <span>{Maxifood}</span>
// // //             <button
// // //               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
// // //               onClick={() =>
// // //                 dispatch(
// // //                   AddItem({
// // //                     id: `${id}-maxi`,
// // //                     name: `${name} ${Maxi}`,
// // //                     price: Number(Maxifood),
// // //                     image: image1,
// // //                     qty: 1,
// // //                   })
// // //                 )
// // //               }
// // //             >
// // //               {bttn}
// // //             </button>
// // //           </div>

// // //           {/* PARTY */}
// // //           <div className="flex justify-between items-center">
// // //             <span>{Party}</span>
// // //             <span>{Partyfood}</span>
// // //             <button
// // //               className="bg-yellow-500 w-8 h-8 rounded-full font-bold"
// // //               onClick={() =>
// // //                 dispatch(
// // //                   AddItem({
// // //                     id: `${id}-party`,
// // //                     name: `${name} ${Party}`,
// // //                     price: Number(Partyfood),
// // //                     image: image1,
// // //                     qty: 1,
// // //                   })
// // //                 )
// // //               }
// // //             >
// // //               {bttn}
// // //             </button>
// // //           </div>
// // //         </>
// // //       )}

    
// // //     </div>
// // //   );
// // // }

// // // export default Card;

// // import React, {useState } from "react";
// // import image1 from "../assests/image1.jpg";
// // import { useDispatch } from "react-redux";
// // import { AddItem } from "../Redux/cartSlice";
// // import { toast } from "react-toastify";

// // function Card({
// //   id,
// //   name,
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
// // }) {
// //   const dispatch = useDispatch();

// //   const [selectedSize, setSelectedSize] = useState(null);
// //   const [selectedIngredients, setSelectedIngredients] = useState([]);

// //   const ingredientsList = [
// //     "Kebab Sauce",
// //     "Mozzarella",
// //     "Oregano",
// //     "Seekh Kebab",
// //     "Onion",
// //   ];

// //   const toggleIngredient = (item) => {
// //     if (selectedIngredients.includes(item)) {
// //       setSelectedIngredients(
// //         selectedIngredients.filter((i) => i !== item)
// //       );
// //     } else {
// //       setSelectedIngredients([...selectedIngredients, item]);
// //     }
// //   };

// //   const handleAdd = (size, priceText) => {
// //     dispatch(
// //       AddItem({
// //         id: `${id}-${size}`,
// //         name: `${name} (${size})`,
// //         price: Number(priceText.replace("€", "")),
// //         image: image1,
// //         qty: 1,
// //         ingredients: size === "mini" ? selectedIngredients : [],
// //       })
// //     );

// //     toast.success(`${name} (${size}) added 🛒`);
// //   };

// //   return (
// //     <div className="w-[400px] bg-white p-4 rounded-lg flex flex-col gap-4">
      
// //       {/* IMAGE */}
// //       <div className="w-full h-[230px] overflow-hidden rounded-lg">
// //         <img
// //           src={image1}
// //           alt={name}
// //           className="w-full h-full object-cover hover:scale-110 transition-all"
// //         />
// //       </div>

// //       {/* NAME */}
// //       <h2 className="text-2xl font-semibold">{name}</h2>

// //       {/* INGREDIENT TEXT */}
// //       <p className="text-sm text-gray-600">{ingredient}</p>

// //       {/* SIZE HEADER */}
// //       <div className="flex justify-between font-semibold mt-2">
// //         <span>{sizes}</span>
// //         <span>{Prices}</span>
// //       </div>

// //       {/* ================= MINI ================= */}
// //       <div className="flex justify-between items-center">
// //         <span className="font-bold">{Mini}</span>

// //         <div className="flex items-center gap-3">
// //           <span>{Minifood}</span>
// //           <button
// //             className="bg-yellow-500 px-3 py-1 rounded-md font-semibold"
// //             onClick={() => {
// //               setSelectedSize("mini");
// //               handleAdd("mini", Minifood);
// //             }}
// //           >
// //             Add
// //           </button>
// //         </div>
// //       </div>

// //       {/* MINI INGREDIENTS */}
// //       {selectedSize === "mini" && (
// //         <div className="border p-3 rounded-md">
// //           <h4 className="font-semibold mb-2">Choose Ingredients</h4>

// //           {ingredientsList.map((item) => (
// //             <label key={item} className="flex items-center gap-2 text-sm">
// //               <input
// //                 type="checkbox"
// //                 checked={selectedIngredients.includes(item)}
// //                 onChange={() => toggleIngredient(item)}
// //               />
// //               {item}
// //             </label>
// //           ))}
// //         </div>
// //       )}

// //       {/* ================= MEDIA ================= */}
// //       <div className="flex justify-between items-center">
// //         <span className="font-bold">{Media}</span>

// //         <div className="flex items-center gap-3">
// //           <span>{Mediafood}</span>
// //           <button
// //             className="bg-yellow-500 px-3 py-1 rounded-md font-semibold"
// //             onClick={() => handleAdd("media", Mediafood)}
// //           >
// //             Add
// //           </button>
// //         </div>
// //       </div>

// //       {/* ================= MAXI ================= */}
// //       <div className="flex justify-between items-center">
// //         <span className="font-bold">{Maxi}</span>

// //         <div className="flex items-center gap-3">
// //           <span>{Maxifood}</span>
// //           <button
// //             className="bg-yellow-500 px-3 py-1 rounded-md font-semibold"
// //             onClick={() => handleAdd("maxi", Maxifood)}
// //           >
// //             Add
// //           </button>
// //         </div>
// //       </div>

// //       {/* ================= PARTY ================= */}
// //       <div className="flex justify-between items-center">
// //         <span className="font-bold">{Party}</span>

// //         <div className="flex items-center gap-3">
// //           <span>{Partyfood}</span>
// //           <button
// //             className="bg-yellow-500 px-3 py-1 rounded-md font-semibold"
// //             onClick={() => handleAdd("party", Partyfood)}
// //           >
// //             Add
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Card;

// import React, { useState, useEffect } from "react";
// import image1 from "../assests/image1.jpg";
// import { useDispatch } from "react-redux";
// import { AddItem } from "../Redux/cartSlice";
// import { toast } from "react-toastify";
// import { LuVegan } from "react-icons/lu";

// function Card({
//   id,
//   name,
//   ingredient,
//   foodCategory,
//   food_image,
//   paopitaprice,
//   sizes,
//   Prices,
//   DonerPrice,
  
//   food_ingri,
//   food_newingri,
//   food_bebita,

//   Mini,
//   Media,
//   Maxi,
//   Party,

//   Minifood,
//   Mediafood,
//   Maxifood,
//   Partyfood,

//   ingredientsBySize, // 👈 NEW
//   ingredients = [],
//   comboPrice,
// }) {
//   const dispatch = useDispatch();
//   const drinks = [
// { name:"Coca-Cola", price:2 },
// { name:"Coca-Cola Zero 33cl", price:2 },
// { name:"Sumol Annanas 0.33cl", price:2 },
// { name:"Frutea Manga e Maracuja 33cl", price:2 },
// { name:"Brazil Guarana 0.33cl", price:2 },
// { name:"Sprite Limao 33cl", price:2 },
// { name:"Fanta Laranja 33cl", price:2 },
// { name:"Maaza Mango lata", price:2 }
// ];

//   // 🔴 YAHAN PASTE KARNA HAI 👇
// const [comboType, setComboType] = useState("without"); // without | with
// const [selectedDrink, setSelectedDrink] = useState("");
// const [description, setDescription] = useState("");

// // baaki states
// const [selectedSize, setSelectedSize] = useState(null);
// const [selectedPrice, setSelectedPrice] = useState("");
// const [selectedIngredients, setSelectedIngredients] = useState([]);

// // Salada / Vegitarian ingredients state (all checked by default)
// const [selectedSaladIngredients, setSelectedSaladIngredients] = useState(
//   ingredients || []
// );

// // Jab ingredients prop change ho (different card) to reset
// useEffect(() => {
//   setSelectedSaladIngredients(ingredients || []);
// }, [id]);

// const toggleSaladIngredient = (item) => {
//   setSelectedSaladIngredients((prev) =>
//     prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
//   );
// };

// const addSaladToCart = () => {
//   dispatch(
//     AddItem({
//       id: `${id}`,
//       name: name,
//       price: Number(paopitaprice),
//       image: image1,
//       qty: 1,
//       ingredients: selectedSaladIngredients,
//     })
//   );
//   toast.success(`${name} added 🛒`);
// };

// // Deserts 
// const addDesertsToCart = () => {
//   dispatch(
//     AddItem({
//       id: `${id}`,
//       name: name,
//       price: Number(paopitaprice),
//       image: image1,
//       qty: 1,
    
//     })
//   );
//   toast.success(`${name} added 🛒`);
// };
// const addSnacksToCart = () => {
//   dispatch(
//     AddItem({
//       id: `${id}`,
//       name: name,
//       price: Number(paopitaprice),
//       image: image1,
//       qty: 1,
    
//     })
//   );
//   toast.success(`${name} added 🛒`);
// };

//   // 🔹 category flags
//   const isPizza = foodCategory === "Pizza" || foodCategory === "Pizza Seekh Kebab"
//   const isKebab = foodCategory === "Kebab";
//   const isVegitarian = foodCategory === "Vegitarian";

// // Mamamia
//   const hideMiniOptions =
//   name === "Pizza Mamamia" && selectedSize === "Mini";

//   // Quatro
//   const hideQuatroOptions = 
//   name === "Pizza Quatro Estações" && selectedSize === "Mini";

//   // Napoli
//   const hideNapoliOptions =   
//   name === "Pizza Napoli" && selectedSize === "Mini";

//   //Tropical
//   const hideTropicalOptions =   
//   name === "Pizza Tropical" && selectedSize === "Mini";

//   // Fantasia
//   const hideFantasiaOptions = 
//   name === "Pizza Fantasia" && selectedSize === "Mini";

//   //Calzone (Fechade)
//   const hideCalzone = 
//   name === "Pizza Calzone (Fechade)" && selectedSize === "Mini";

//   //Calzone (Fechade)
//   const hideCalzonez = 
//   name === "Pizza Calzone (Fechade)" && selectedSize === "Party";

//   //Pizza Especial
//   const hidePizzaEspecial = 
//   name === "Pizza Especial" && selectedSize === "Mini";


// useEffect(() => {
//   if (!selectedSize) return;

//   setSelectedIngredients(
//     ingredientsBySize?.[selectedSize] || []
//   );
// }, [selectedSize, ingredientsBySize]);

//   // ✅ Toggle ingredient
//   const toggleIngredient = (item) => {
//     if (selectedIngredients.includes(item)) {
//       setSelectedIngredients(
//         selectedIngredients.filter((i) => i !== item)
//       );
//     } else {
//       setSelectedIngredients([...selectedIngredients, item]);
//     }
//   };

//   // ✅ FINAL ADD TO CART
//   const addToCart = () => {
//     if (!selectedSize) {
//       toast.error("Please select size");
//       return;
//     }

//     dispatch(
//       AddItem({
//         id: `${id}-${selectedSize}`,
//         name: `${name} (${selectedSize})`,
//         price: Number(selectedPrice.replace("€", "")),
//         image: image1,
//         qty: 1,
//         ingredients: selectedIngredients,
//       })
//     );

//     toast.success(`${name} added 🛒`);

//     // reset after add
//     setSelectedSize(null);
//     setSelectedIngredients([]);
//     setSelectedPrice("");
//   };

//   // 🔹 ADD TO CART (Kebab + Vegitarian)
//  const addKebabToCart = () => {

//   // ✅ Drink select karna zaroori hai
//   if (!selectedDrink) {
//     toast.error("Please select a drink first! 🥤")
//     return
//   }

// const drinkPrice = 2
// const finalPrice =
// comboType === "with"
// ? Number(comboPrice)
// : Number(paopitaprice) + drinkPrice

// // ✅ Sirf jo ingredients checked hain woh jaayenge
// const cartIngredients = isVegitarian ? selectedSaladIngredients : selectedIngredients

// // Unique id based on item + combo + drink selection
// const drinkKey = selectedDrink.replace(/\s+/g, "_")
// const cartId = `${id}-${comboType}-${drinkKey}`

// dispatch(
// AddItem({
// id: cartId,
// name,
// image: image1,
// price: finalPrice,
// qty: 1,
// comboType,
// drink: selectedDrink,
// ingredients: cartIngredients,
// description
// })
// )

// toast.success(`${name} added to cart 🛒`)
// setSelectedIngredients([])
// setSelectedDrink("")

// }
// return (
//     <div className="w-[380px] h-[600px] overflow-y-auto bg-white p-4 rounded-lg flex flex-col gap-4 self-start">
//       {/* IMAGE */}
//      <div className="w-full h-[200px] min-h-[200px] overflow-hidden rounded-lg flex-shrink-0">
//         <img
//           src={image1}
//           alt={name}
//           className="w-full h-full object-cover hover:scale-110 transition-all"
//         />
//       </div>

//       {/* NAME */}
//       <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-semibold flex items-center gap-2">
//           {name}
//            {foodCategory === "Vegitarian" && (
//         <LuVegan className="text-green-500 w-6 h-6" title="Vegan" />
//     )}
//           </h2>
//           <span className="font-semibold text-lg whitespace-nowrap">{DonerPrice}</span>
//     </div>
      
//        {/* ================= KEBAB / VEGITARIAN INFO (NO SIZE) ================= */}
// {(isKebab || isVegitarian) && (
//   <>    
//       {/* INGREDIENT TEXT */}
//     <p className="text-sm">{food_ingri}</p>
//     <p className="text-sm text-gray-600">{food_newingri}</p>
//     <p className=" text-gray-600 text-xl">{ingredient}</p>
//     <p className="text-sm">{food_bebita}</p>
//   </>
// )}

//       {/* SIZE HEADER */}
//     {/* ================= PIZZA SIZES ONLY ================= */}
// {isPizza && (
//   <>
//     {/* SIZE HEADER */}
//     <div className="flex justify-between font-semibold">
//       <span>{sizes}</span>
//       <span>{Prices}</span>
//     </div>

//     {/* SIZE BUTTONS */}
//     <button
//       className={`p-2 rounded border ${
//         selectedSize === "Mini" ? "bg-yellow-400" : ""
//       }`}
//       onClick={() => {
//         setSelectedSize("Mini");
//         setSelectedPrice(Minifood);
//       }}
//     >
//       Mini ({Minifood})
//     </button>

//     <button
//       className={`p-2 rounded border ${
//         selectedSize === "Media" ? "bg-yellow-400" : ""
//       }`}
//       onClick={() => {
//         setSelectedSize("Media");
//         setSelectedPrice(Mediafood);
//       }}
//     >
//       Media ({Mediafood})
//     </button>

// {/* I commented This Because we want to hide the button in Pizza Seekh Kebab */}
//     {/* <button
//       className={`p-2 rounded border ${
//         selectedSize === "Maxi" ? "bg-yellow-400" : ""
//       }`}
//       onClick={() => {
//         setSelectedSize("Maxi");
//         setSelectedPrice(Maxifood);
//       }}
//     >
//       Maxi ({Maxifood})
//     </button>

//     <button
//       className={`p-2 rounded border ${
//         selectedSize === "Party" ? "bg-yellow-400" : ""
//       }`}
//       onClick={() => {
//         setSelectedSize("Party");
//         setSelectedPrice(Partyfood);
//       }}
//     >
//       Party ({Partyfood})
//     </button> */}

//     {Maxifood && foodCategory !== "Pizza Seekh Kebab" && (
//   <button
//     className={`p-2 rounded border ${
//       selectedSize === "Maxi" ? "bg-yellow-400" :   ""
//     }`}
//     onClick={() => {
//       setSelectedSize("Maxi");
//       setSelectedPrice(Maxifood);
//     }}
//   >
//     Maxi ({Maxifood})
//   </button>
// )}

// {Partyfood && foodCategory !== "Pizza Seekh Kebab" && (
//   <button
//     className={`p-2 rounded border ${
//       selectedSize === "Party" ? "bg-yellow-400" : ""
//     }`}
//     onClick={() => {
//       setSelectedSize("Party");
//       setSelectedPrice(Partyfood);
//     }}
//   >
//     Party ({Partyfood})
//   </button>
// )}
//   </>
// )}
//       {/* ================= INGREDIENTS ================= */}
//       {selectedSize && !hideMiniOptions && !hideQuatroOptions && !hideNapoliOptions && !hideTropicalOptions && !hideFantasiaOptions && !hideCalzone && !hideCalzonez  && !hidePizzaEspecial &&(
//         <div className="border p-3 rounded-md">
//           <h4 className="font-semibold mb-2">
//             Choose Ingredients ({selectedSize})
//           </h4>
            
//           {ingredientsBySize[selectedSize]?.map((item) => (
//             <label
//               key={item}
//               className="flex items-center gap-2 text-sm"
//             >
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

//       {/* Ingrediends for Saladas ONLY */} 
//     {foodCategory === "Saladas" && ingredients && ingredients.length > 0 && (
//       <div className="border p-3 rounded-md mt-2">
//         <h4 className="font-semibold mb-2">Choose Ingredients</h4>
//         {ingredients.map((ing, index) => (
//           <label key={index} className="flex gap-2 text-sm items-center">
//             <input
//               type="checkbox"
//               checked={selectedSaladIngredients.includes(ing)}
//               onChange={() => toggleSaladIngredient(ing)}
//             />
//             {ing}
//           </label>
//         ))}
//       </div>
//     )}

//     {/* Add to Cart for Saladas */}
//     {foodCategory === "Saladas" && ingredients && ingredients.length > 0 && (
//       <button
//         className="bg-yellow-500 p-3 rounded-lg text-lg font-bold w-full mt-2"
//         onClick={addDesertsToCart}
//       >
//         Add to Cart
//       </button>
//     )}

//     {/* Add to Cart for Deserts */}
//    {foodCategory === "Deserts" && (
//    <button
//     className="bg-yellow-500 p-3 rounded-lg text-lg font-bold w-full mt-2"
//     onClick={addDesertsToCart}
//    >
//      Add to Cart
//     </button>
//   )}

//    {/* Add to Cart for Snacks */}
//    {foodCategory === "Snacks" && (
//    <button
//     className="bg-yellow-500 p-3 rounded-lg text-lg font-bold w-full mt-2"
//     onClick={addSnacksToCart}
//    >
//      Add to Cart
//     </button>
//   )}

//       {/* ================= ADD TO CART Used Only Kebab ================= */}
//       {selectedSize && !hideMiniOptions && !hideQuatroOptions && !hideNapoliOptions && !hideTropicalOptions && !hideFantasiaOptions && !hideCalzone && !hideCalzonez && !hidePizzaEspecial &&(
//         <button
//           className="bg-yellow-500 p-3 rounded-lg text-lg font-bold"
//           onClick={addToCart}
//         >
//           Add to Cart
//         </button>
//       )}

//     {/* ================= KEBAB ================= */}
//       {/* {isKebab && (
//         <>
//           {ingredients?.length > 0 && (
//             <div className="border p-3 rounded-md">
//               <h4 className="font-semibold mb-2">Choose Ingredients</h4>
//               {ingredients.map((item) => (
//                 <label key={item} className="flex gap-2 text-sm">
//                   <input
//                     type="checkbox"
//                     checked={selectedIngredients.includes(item)}
//                     onChange={() => toggleIngredient(item)}
//                   />
//                   {item}
//                 </label>
//               ))}
//             </div>
//           )}

//           <button
//             className="bg-yellow-500 p-3 rounded-lg font-bold"
//             onClick={addKebabToCart}
//           >
//             Add to Cart {paopitaprice}
//           </button>
//         </>
//       )} */}

//       {/* ================= KEBAB ================= */}
// {isKebab && (
//   <>
//     {/* 🔹 COMBO TYPE */}
//     <div className="border p-3 rounded-md">
//       <h4 className="font-semibold mb-2">Select Option</h4>

//       <label className="flex gap-2">
//         <input
//           type="radio"
//           name={`combo-${id}`}
//           checked={comboType === "without"}
//           onChange={() => setComboType("without")}
//         />
//         Without Combo
//       </label>

//       <label className="flex gap-2">
//         <input
//           type="radio"
//           name={`combo-${id}`}
//           checked={comboType === "with"}
//           onChange={() => setComboType("with")}
//         />
//         With Combo
//       </label>
//     </div>

//     {/* 🔹 INGREDIENTS
//     {ingredients?.length > 0 && (
//       <div className="border p-3 rounded-md">
//         <h4 className="font-semibold mb-2">Choose Ingredients</h4>
//         {ingredients.map((item) => (
//           <label key={item} className="flex gap-2 text-sm">
//             <input
//               type="checkbox"
//               checked={selectedIngredients.includes(item)}
//               onChange={() => toggleIngredient(item)}
//             />
//             {item}
//           </label>
//         ))}
//       </div>
//     )} */}  

//     {/* 🔹 DRINKS (ONLY WITH COMBO – FREE) */}
//     {/* {comboType === "with" && (
//       <div className="border p-3 rounded-md">
//         <h4 className="font-semibold mb-2">Select Drink (Free)</h4>

//         {["Coca-Cola", "Coca-Cola Zero 33cl", "Sumol Annanas 0.33cl", "Frutea Manga e Maracuja 33cl" ,"Brazil Guarana 0.33cl" , "Sprite Limao 33cl" , "Fanta Laranja 33cl" , "Maaza Mango lata "].map((drink) => (
//           <label key={drink} className="flex gap-2 text-sm">
//             <input
//               type="radio"
//               name={`drink-${id}`}
//               checked={selectedDrink === drink}
//               onChange={() => setSelectedDrink(drink)}
//             />
//             {drink}
//           </label>
//         ))}
//       </div>
//     )} */}

//     {/* New Drink (Only With andf Without Combo Free ) */}
//     {/* 🔹 DRINKS */}
// {/* <div className="border p-3 rounded-md">

// <h4 className="font-semibold mb-2">
// {comboType === "with" ? "Select Drink (Free)" : "Select Drink"}
// </h4>

// {drinks.map((drink) => (

// <label key={drink.name} className="flex justify-between text-sm">

// <div className="flex gap-2">
// <input
// type="radio"
// name={`drink-${id}`}
// checked={selectedDrink === drink.name}
// onChange={()=>setSelectedDrink(drink.name)}
// />

// {drink.name}
// </div>

// {/* PRICE CONDITION */}
// {/* {comboType === "without" && (
// <span>€{drink.price}</span>
// )}
// </label>
// ))}
// </div> */}

// <div className="border p-3 rounded-md">

// <h4 className="font-semibold mb-2">
// {comboType === "with" ? "Select Drink (Free)" : "Select Drink"}
// </h4>

// {drinks.map((drink)=>(
// <label key={drink.name} className="flex justify-between text-sm">

// <div className="flex gap-2">
// <input
// type="radio"
// name={`drink-${id}`}
// checked={selectedDrink === drink.name}
// onChange={()=>setSelectedDrink(drink.name)}
// />

// {drink.name}
// </div>

// {comboType === "without" && (
// <span>€{drink.price}</span>
// )}

// </label>
// ))}

// </div>

//     {/* 🔹 DESCRIPTION */}
//     <textarea
//       className="border p-2 rounded-md text-sm"
//       placeholder="Add description (optional)"
//       value={description}
//       onChange={(e) => setDescription(e.target.value)}
//     />

//     {/* 🔹 ADD TO CART */}
//     <button
//       className="bg-yellow-500 p-3 rounded-lg font-bold w-full"
//       onClick={addKebabToCart}
//     >
//       Add to Cart {comboType === "with"
//         ? `€${Number(comboPrice).toFixed(2)}`
//         : selectedDrink
//           ? `€${(Number(paopitaprice) + 2).toFixed(2)}`
//           : `€${Number(paopitaprice).toFixed(2)} + drink`}
//     </button>
//   </>
// )}

//     {/* ================= VEGITARIAN (same as Kebab) ================= */}
// {isVegitarian && (
//   <>
//     {/* INGREDIENTS */}
//     {ingredients && ingredients.length > 0 && (
//       <div className="border p-3 rounded-md">
//         <h4 className="font-semibold mb-2">Choose Ingredients</h4>
//         {ingredients.map((ing, index) => (
//           <label key={index} className="flex gap-2 text-sm items-center">
//             <input
//               type="checkbox"
//               checked={selectedSaladIngredients.includes(ing)}
//               onChange={() => toggleSaladIngredient(ing)}
//             />
//             {ing}
//           </label>
//         ))}
//       </div>
//     )}

//     {/* COMBO TYPE */}
//     <div className="border p-3 rounded-md">
//       <h4 className="font-semibold mb-2">Select Option</h4>
//       <label className="flex gap-2">
//         <input
//           type="radio"
//           name={`veg-combo-${id}`}
//           checked={comboType === "without"}
//           onChange={() => setComboType("without")}
//         />
//         Without Combo
//       </label>
//       <label className="flex gap-2">
//         <input
//           type="radio"
//           name={`veg-combo-${id}`}
//           checked={comboType === "with"}
//           onChange={() => setComboType("with")}
//         />
//         With Combo
//       </label>
//     </div>

//     {/* DRINKS */}
//     <div className="border p-3 rounded-md">
//       <h4 className="font-semibold mb-2">
//         {comboType === "with" ? "Select Drink (Free)" : "Select Drink"}
//       </h4>
//       {drinks.map((drink) => (
//         <label key={drink.name} className="flex justify-between text-sm">
//           <div className="flex gap-2">
//             <input
//               type="radio"
//               name={`veg-drink-${id}`}
//               checked={selectedDrink === drink.name}
//               onChange={() => setSelectedDrink(drink.name)}
//             />
//             {drink.name}
//           </div>
//           {comboType === "without" && <span>€{drink.price}</span>}
//         </label>
//       ))}
//     </div>

//     {/* DESCRIPTION */}
//     <textarea
//       className="border p-2 rounded-md text-sm"
//       placeholder="Add description (optional)"
//       value={description}
//       onChange={(e) => setDescription(e.target.value)}
//     />

//     {/* ADD TO CART */}
//     <button
//       className="bg-yellow-500 p-3 rounded-lg font-bold w-full"
//       onClick={addKebabToCart}
//     >
//       Add to Cart {comboType === "with"
//         ? `€${Number(comboPrice).toFixed(2)}`
//         : selectedDrink
//           ? `€${(Number(paopitaprice) + 2).toFixed(2)}`
//           : `€${Number(paopitaprice).toFixed(2)}`}
//     </button>
//   </>
// )}
//     </div>
//   );
// }
      
//     {/* </div>
//   );
// } */}



// export default Card;

import React, { useState, useEffect } from "react";
import image1 from "../assests/image1.jpg";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/cartSlice";
import { toast } from "react-toastify";
import { LuVegan } from "react-icons/lu";

function Card({
  id, name, ingredient, foodCategory, food_image, paopitaprice,
  sizes, Prices, DonerPrice, food_ingri, food_newingri, food_bebita,
  Mini, Media, Maxi, Party, Minifood, Mediafood, Maxifood, Partyfood,
  ingredientsBySize, ingredients = [], comboPrice,
}) {
  const dispatch = useDispatch();

  const drinks = [
    { name: "Coca-Cola", price: 2 },
    { name: "Coca-Cola Zero 33cl", price: 2 },
    { name: "Sumol Annanas 0.33cl", price: 2 },
    { name: "Frutea Manga e Maracuja 33cl", price: 2 },
    { name: "Brazil Guarana 0.33cl", price: 2 },
    { name: "Sprite Limao 33cl", price: 2 },
    { name: "Fanta Laranja 33cl", price: 2 },
    { name: "Maaza Mango lata", price: 2 },
  ];

  const [comboType, setComboType] = useState("without");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
const [selectedPrice, setSelectedPrice] = useState("");
const [selectedIngredients, setSelectedIngredients] = useState([]);

const isEspecial = name?.trim() === "Pizza Especial";

useEffect(() => {
  if (!selectedSize) return;

  if (!isEspecial) {
    setSelectedIngredients(
      ingredientsBySize?.[selectedSize] || []
    );
  } else {
    setSelectedIngredients([]);
  }

}, [selectedSize, ingredientsBySize, isEspecial]);
  
  const [selectedSaladIngredients, setSelectedSaladIngredients] = useState(ingredients || []);
    
  
  useEffect(() => { setSelectedSaladIngredients(ingredients || []); }, [id]);

  const toggleIngredient = (item) =>
    setSelectedIngredients((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const toggleSaladIngredient = (item) =>
    setSelectedSaladIngredients((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  // ← YEH NAYA CODE YAHAN PASTE KARO (states ke baad, return se pehle)
  const ESPECIAL_INGREDIENTS = [
    "Alho", "Pimenta Fresco", "Cebola Roxa", "Sundico",
    "Kebab de Frango", "Kebab de Vaca", "Milho", "Ananás",
    "Azeitonas", "Broccoli", "Pimenta Branca", "Delícias do Mar",
    "Espinafre", "Cogumelos", "Ovo", "Salame", "Bacon",
    "Camarão", "Pepperoni", "Atum", "Jalapeños", "Ovo Cozido",
    "Tomate Fatiado", "Salsicha", "Seekh Kebab Lamb", "Seekh Kebab Frango"
  ];

  const isPizza = foodCategory === "Pizza" || foodCategory === "Pizza Seekh Kebab" || foodCategory === "Creamy Pizza Catupiry";
  const isKebab = foodCategory === "Kebab";
  const isVegitarian = foodCategory === "Vegitarian";

  const hideMiniOptions = name === "Pizza Mamamia" && selectedSize === "Mini";
  const hideQuatroOptions = name === "Pizza Quatro Estações" && selectedSize === "Mini";
  const hideNapoliOptions = name === "Pizza Napoli" && selectedSize === "Mini";
  const hideTropicalOptions = name === "Pizza Tropical" && selectedSize === "Mini";
  const hideFantasiaOptions = name === "Pizza Fantasia" && selectedSize === "Mini";
  const hideCalzone = name === "Pizza Calzone (Fechade)" && selectedSize === "Mini";
  const hideCalzonez = name === "Pizza Calzone (Fechade)" && selectedSize === "Party";
  const hidePizzaEspecial = name === "Pizza Especial" && selectedSize === "Mini";
  const hideIngredients = hideMiniOptions || hideQuatroOptions || hideNapoliOptions || hideTropicalOptions || hideFantasiaOptions || hideCalzone || hideCalzonez || hidePizzaEspecial;

  const addToCart = () => {
    if (!selectedSize) { toast.error("Please select a size"); return; }
    dispatch(AddItem({
      id: `${id}-${selectedSize}`, name: `${name} (${selectedSize})`,
      price: Number(selectedPrice.replace("€", "")), image: image1, qty: 1,
      ingredients: selectedIngredients,
      description: description   // ⭐ ADD THIS LINE
    }));
    toast.success(`${name} added 🛒`);
    setSelectedSize(null); setSelectedIngredients([]); setSelectedPrice("");
  };

  const addKebabToCart = () => {
    if (!selectedDrink) { toast.error("Please select a drink first! 🥤"); return; }
    const finalPrice = comboType === "with" ? Number(comboPrice) : Number(paopitaprice) + 2;
    const cartIngredients = isVegitarian ? selectedSaladIngredients : selectedIngredients;
    dispatch(AddItem({
      id: `${id}-${comboType}-${selectedDrink.replace(/\s+/g, "_")}`,
      name, image: image1, price: finalPrice, qty: 1,
      comboType, drink: selectedDrink, ingredients: cartIngredients, description,
    }));
    toast.success(`${name} added to cart 🛒`);
    setSelectedIngredients([]); 
    setSelectedDrink("");
    setSelectedPrice("");
    setDescription("");   // optional reset

  };

  const addSimpleToCart = () => {
    dispatch(AddItem({ id, name, price: Number(paopitaprice), image: image1, qty: 1 }));
    toast.success(`${name} added 🛒`);
  };

  const categoryTag = {
    Pizza: { label: "Pizza", color: "bg-[#c9a84c] text-[#0d0d0d]" },
    Kebab: { label: "Kebab", color: "bg-[#c9a84c] text-[#0d0d0d]" },
    Vegitarian: { label: "Vegan", color: "bg-emerald-600 text-white" },
    Saladas: { label: "Salada", color: "bg-green-700 text-white" },
    Deserts: { label: "Desert", color: "bg-amber-700 text-white" },
    Snacks: { label: "Snack", color: "bg-orange-700 text-white" },
    "Pizza Seekh Kebab": { label: "Seekh Special", color: "bg-red-800 text-white" },
    "Creamy Pizza Catupiry": { label: "Special", color: "bg-purple-800 text-white" },
  }[foodCategory] || { label: foodCategory, color: "bg-[#c9a84c] text-[#0d0d0d]" };

  return (
  <div className="w-[340px] min-h-[650px] bg-[#141414] border border-[#2a2a2a] rounded-sm flex flex-col"
      style={{ scrollbarWidth: "none" }}>

      {/* Image */}
      <div className="w-full h-[200px] min-h-[200px] overflow-hidden flex-shrink-0 relative">
        <img src={image1} alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-500 brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 ${categoryTag.color}`}>
          {categoryTag.label}
        </span>
        {foodCategory === "Vegitarian" && (
          <span className="absolute top-3 right-3">
            <LuVegan className="text-emerald-400 w-5 h-5" />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1">

        {/* Name & Price */}
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-playfair text-[#f5f0e8] text-lg leading-tight flex-1">{name}</h3>
          {DonerPrice && (
            <span className="text-[#c9a84c] font-semibold text-base whitespace-nowrap flex-shrink-0">
              {DonerPrice}
            </span>
          )}
        </div>

        {/* Kebab / Veg Info */}
        {(isKebab || isVegitarian) && (
          <div className="space-y-1">
            <p className="text-[#f5f0e8]/50 text-xs leading-relaxed">{food_ingri}</p>
            <p className="text-[#f5f0e8]/40 text-xs leading-relaxed">{food_newingri}</p>
            {ingredient && <p className="text-[#c9a84c]/70 text-xs">{ingredient}</p>}
            {food_bebita && <p className="text-[#f5f0e8]/40 text-xs">{food_bebita}</p>}
          </div>
        )}

        {/* Pizza ingredient */}
        {isPizza && ingredient && (
          <p className="text-[#f5f0e8]/40 text-xs leading-relaxed">{ingredient}</p>
        )}

        {/* Pizza Sizes */}
        {isPizza && (
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] tracking-[2px] uppercase text-[#f5f0e8]/30 border-b border-[#2a2a2a] pb-1">
              <span>Size</span><span>Price</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {Minifood && (
                <button onClick={() => { setSelectedSize("Mini"); setSelectedPrice(Minifood); }}
                  className={`p-2 text-xs border transition-all duration-200 ${selectedSize === "Mini" ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]" : "border-[#2a2a2a] text-[#f5f0e8]/50 hover:border-[#c9a84c]/40"}`}>
                  Mini · {Minifood}
                </button>
              )}
              {Mediafood && (
                <button onClick={() => { setSelectedSize("Media"); setSelectedPrice(Mediafood); }}
                  className={`p-2 text-xs border transition-all duration-200 ${selectedSize === "Media" ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]" : "border-[#2a2a2a] text-[#f5f0e8]/50 hover:border-[#c9a84c]/40"}`}>
                  Média · {Mediafood}
                </button>
              )}
              {Maxifood && foodCategory !== "Pizza Seekh Kebab" && (
                <button onClick={() => { setSelectedSize("Maxi"); setSelectedPrice(Maxifood); }}
                  className={`p-2 text-xs border transition-all duration-200 ${selectedSize === "Maxi" ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]" : "border-[#2a2a2a] text-[#f5f0e8]/50 hover:border-[#c9a84c]/40"}`}>
                  Maxi · {Maxifood}
                </button>
              )}
              {Partyfood && foodCategory !== "Pizza Seekh Kebab" && (
                <button onClick={() => { setSelectedSize("Party"); setSelectedPrice(Partyfood); }}
                  className={`p-2 text-xs border transition-all duration-200 ${selectedSize === "Party" ? "border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]" : "border-[#2a2a2a] text-[#f5f0e8]/50 hover:border-[#c9a84c]/40"}`}>
                  Party · {Partyfood}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Pizza Ingredients */}
       {selectedSize && !hideIngredients && isPizza && (
  <div className="border border-[#2a2a2a] p-3 space-y-2">
    <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">
      {isEspecial
        ? `Choose 4 Ingredients — ${selectedSize}`
        : `Ingredients — ${selectedSize}`}
    </h4>

    {/* Pizza Especial — choose 4 from full list */}
    {isEspecial ? (
      <>
        <p className="text-[#f5f0e8]/30 text-[10px]">
          {selectedIngredients.length}/4 selected
        </p>
        <div className="grid grid-cols-2 gap-1">
          {ESPECIAL_INGREDIENTS.map((item) => (
            <label key={item}
              className={`flex items-center gap-2 text-xs cursor-pointer transition-colors ${
                selectedIngredients.includes(item)
                  ? "text-[#c9a84c]"
                  : "text-[#f5f0e8]/60"
              } ${
                !selectedIngredients.includes(item) && selectedIngredients.length >= 4
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-[#f5f0e8]/90"
              }`}>
              <input
                type="checkbox"
                checked={selectedIngredients.includes(item)}
                onChange={() => {
                  if (selectedIngredients.includes(item)) {
                    toggleIngredient(item);
                  } else if (selectedIngredients.length < 4) {
                    toggleIngredient(item);
                  }
                }}
                className="accent-[#c9a84c] w-3 h-3"
                disabled={!selectedIngredients.includes(item) && selectedIngredients.length >= 4}
              />
              {item}
            </label>
          ))}
        </div>
      </>
    ) : (
      /* Normal pizza ingredients */
      <div className="grid grid-cols-2 gap-1">
        {ingredientsBySize?.[selectedSize]?.map((item) => (
          <label key={item}
            className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer hover:text-[#f5f0e8]/90">
            <input type="checkbox"
              checked={selectedIngredients.includes(item)}
              onChange={() => toggleIngredient(item)}
              className="accent-[#c9a84c] w-3 h-3" />
            {item}
          </label>
        ))}
      </div>
    )}
  </div>
)}
        {/* Pizza Add to Cart */}
        {selectedSize && !hideIngredients && (
          <button onClick={addToCart}
            className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300">
            Add to Cart — {selectedPrice}
          </button>
        )}

        {/* Saladas Ingredients */}
        {foodCategory === "Saladas" && ingredients?.length > 0 && (
          <div className="border border-[#2a2a2a] p-3 space-y-2">
            <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">Ingredients</h4>
            <div className="grid grid-cols-2 gap-1">
              {ingredients.map((ing, i) => (
                <label key={i} className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <input type="checkbox" checked={selectedSaladIngredients.includes(ing)}
                    onChange={() => toggleSaladIngredient(ing)}
                    className="accent-[#c9a84c] w-3 h-3" />
                  {ing}
                </label>
              ))}
            </div>
            <button onClick={addSimpleToCart}
              className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300 mt-2">
              Add to Cart — €{Number(paopitaprice).toFixed(2)}
            </button>
          </div>
        )}

        {/* Deserts / Snacks */}
        {(foodCategory === "Deserts" || foodCategory === "Snacks") && (
          <button onClick={addSimpleToCart}
            className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300 mt-auto">
            Add to Cart — €{Number(paopitaprice).toFixed(2)}
          </button>
        )}

        {/* Kebab Section */}
        {isKebab && (
          <div className="space-y-3">
            {/* Combo */}
            <div className="border border-[#2a2a2a] p-3 space-y-2">
              <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">Select Option</h4>
              {["without", "with"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <input type="radio" name={`combo-${id}`} checked={comboType === opt}
                    onChange={() => setComboType(opt)} className="accent-[#c9a84c]" />
                  {opt === "without" ? "Without Combo" : `With Combo — €${Number(comboPrice).toFixed(2)}`}
                </label>
              ))}
            </div>
            {/* Drinks */}
            <div className="border border-[#2a2a2a] p-3 space-y-2">
              <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">
                {comboType === "with" ? "Select Drink (Free)" : "Select Drink"}
              </h4>
              {drinks.map((drink) => (
                <label key={drink.name} className="flex justify-between items-center text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="radio" name={`drink-${id}`} checked={selectedDrink === drink.name}
                      onChange={() => setSelectedDrink(drink.name)} className="accent-[#c9a84c]" />
                    {drink.name}
                  </div>
                  {comboType === "without" && <span className="text-[#c9a84c]">€{drink.price}</span>}
                </label>
              ))}
            </div>
            {/* Description */}
            <textarea className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8]/70 text-xs p-3 outline-none resize-none h-16 placeholder-[#f5f0e8]/20"
              placeholder="Add special instructions (optional)..."
              value={description} onChange={(e) => setDescription(e.target.value)} />
            {/* Add to Cart */}
            <button onClick={addKebabToCart}
              className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300">
              Add to Cart — {comboType === "with" ? `€${Number(comboPrice).toFixed(2)}` :
                selectedDrink ? `€${(Number(paopitaprice) + 2).toFixed(2)}` : `€${Number(paopitaprice).toFixed(2)} + drink`}
            </button>
          </div>
        )}

        {/* Vegetarian Section */}
        {isVegitarian && (
          <div className="space-y-3">
            {ingredients?.length > 0 && (
              <div className="border border-[#2a2a2a] p-3 space-y-2">
                <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">Ingredients</h4>
                <div className="grid grid-cols-2 gap-1">
                  {ingredients.map((ing, i) => (
                    <label key={i} className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer">
                      <input type="checkbox" checked={selectedSaladIngredients.includes(ing)}
                        onChange={() => toggleSaladIngredient(ing)} className="accent-[#c9a84c] w-3 h-3" />
                      {ing}
                    </label>
                  ))}
                </div>
              </div>
            )}
            <div className="border border-[#2a2a2a] p-3 space-y-2">
              <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">Select Option</h4>
              {["without", "with"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <input type="radio" name={`veg-combo-${id}`} checked={comboType === opt}
                    onChange={() => setComboType(opt)} className="accent-[#c9a84c]" />
                  {opt === "without" ? "Without Combo" : `With Combo — €${Number(comboPrice).toFixed(2)}`}
                </label>
              ))}
            </div>
            <div className="border border-[#2a2a2a] p-3 space-y-2">
              <h4 className="text-[10px] tracking-[2px] uppercase text-[#c9a84c]">
                {comboType === "with" ? "Select Drink (Free)" : "Select Drink"}
              </h4>
              {drinks.map((drink) => (
                <label key={drink.name} className="flex justify-between items-center text-xs text-[#f5f0e8]/60 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="radio" name={`veg-drink-${id}`} checked={selectedDrink === drink.name}
                      onChange={() => setSelectedDrink(drink.name)} className="accent-[#c9a84c]" />
                    {drink.name}
                  </div>
                  {comboType === "without" && <span className="text-[#c9a84c]">€{drink.price}</span>}
                </label>
              ))}
            </div>
            <textarea className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c9a84c]/50 text-[#f5f0e8]/70 text-xs p-3 outline-none resize-none h-16 placeholder-[#f5f0e8]/20"
              placeholder="Add special instructions (optional)..."
              value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={addKebabToCart}
              className="w-full py-3 bg-[#c9a84c] hover:bg-[#e0bf6a] text-[#0d0d0d] text-xs font-bold tracking-[2px] uppercase transition-all duration-300">
              Add to Cart — {comboType === "with" ? `€${Number(comboPrice).toFixed(2)}` :
                selectedDrink ? `€${(Number(paopitaprice) + 2).toFixed(2)}` : `€${Number(paopitaprice).toFixed(2)}`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;