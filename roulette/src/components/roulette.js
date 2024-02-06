import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";

export default function Roulette ({ products, onChosen }) {

    const albums = [
        {
            name: "FEARLESS",
            font: "font-fearless",
            font_name: "Arsenal",
            text_color: "white",
            palette: ['#69431c','#dbc498','#a77d41','#ece1d2','#caab71'],
        },
        {
            name: "Speak Now",
            font: "font-speak_now",
            font_name: "Jellyka BeesAntique Handwriting",
            text_color: "white",
            palette: ['#ebb4d3','#a64477','#513163','#f2cbae','#b6713f',],
        }, 
        {
            name: "RED",
            font: "font-red",
            font_name: "Bebas Neue",
            text_color: "white",
            palette: ["#bca38d","#9e7c60","#954d25","#951e1a","#48462f"],
        }, 
        {
            name: "1989",
            font: "font-_1989",
            font_name: "Taylor Swift Handwriting",
            text_color: "white",
            palette: ['#789ac0','#b7bdc9','#ead5c6','#af9cb1','#866475'],
        }, 
        {
            name: "reputation",
            font: "font-reputation",
            font_name: "Engravers Old English",
            text_color: "white",
            palette: ['#eeeeee','#727272','#404040','#222222','#000000'],
        },
        {
            name: "evermore",
            font: "font-evermore",
            font_name: "IM Fell DW Pica",
            text_color: "white",
            palette: ['#342a2e','#653f2a','#ba653b','#51201b','#625d52'],
        },
        {
            name: "Midnights",
            font: "font-midnight",
            font_name: "Inter",
            text_color: "white",
            palette: ['#b8acd1','#e2d5f1','#c9e8fd','#526d85','#4e4466'],
        }, 
    ]

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteProducts, setRouletteProducts] = useState(products);
  const [style, setStyle] = useState(albums[0]);

  const handleSpinClick = async () => {
    onChosen(null);
    const newPrizeNumber = Math.floor(Math.random() * products.length);
    setPrizeNumber(newPrizeNumber);
    setTimeout(() => {
        onChosen(products[newPrizeNumber]);
    }, 2800)
    setMustSpin(true);
    }

  useEffect(() => {
    const addShortString = products.map((product) => {
      return {
        completeOption: product.name,
        option:
          product.name.length >= 30
            ? product.name.substring(0, 30).trimEnd() + "..."
            : product.name
      };
    });
    setRouletteProducts(addShortString);
  }, [products]);

  return (
    <>
        <div align="center" className="roulette-container mt-5">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={[0.2]}
          prizeNumber={prizeNumber}
          data={rouletteProducts}
          outerBorderColor={["#ccc"]}
          outerBorderWidth={[9]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["tranparent"]}
          radiusLineWidth={[1]}
          textColors={[style.text_color]}
          textDistance={55}
          fontSize={[18]}
          fontFamily={style.font_name}
        //   backgroundColors={[
        //     "#3f297e",
        //     "#175fa9",
        //     "#169ed8",
        //     "#239b63",
        //     "#64b031",
        //     "#efe61f",
        //     "#f7a416",
        //     "#e6471d",
        //     "#dc0936",
        //     "#e5177b",
        //     "#be1180",
        //     "#871f7f"
        //   ]}
        backgroundColors={style.palette}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className={`bg-transparent mt-10 ${style.font} hover:bg-red-500 text-red-700 text-2xl hover:text-white py-2 px-20 border border-red-700 border-2 hover:border-transparent rounded`}
            onClick={handleSpinClick}>
          Start Spinning
        </button>
        <div className="absolute flex flex-col gap-5 top-14 right-10">
            {albums.map((album) => (
                <button className={`bg-transparent hover:cursor-pointer hover:bg-red-500 text-red-700 text-3xl ${album.font} hover:text-white py-3 px-5 border border-red-700 border-2 hover:border-transparent rounded`}
                    onClick={() => setStyle(album)}>
                    {album.name}
                </button>
            ))}
        </div>
      </div>
      <br />
    </>
  );
};
