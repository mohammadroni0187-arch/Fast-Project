import { use,  } from "react";
import type { Icard } from "../Types/cardType";
import MainCard from "../MainLayoutCard/mainCard";

interface CardProps{
  cardPromise:Promise<Icard[]>
}

const Card = ({cardPromise}:CardProps) => {
  console.log(cardPromise)
  const card =use(cardPromise);
  
  return (
    <div className=" max-w-[1600px] mx-auto px-6 py-8">
      <h2 className="font-bold text-4xl mb-3 ">Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span></h2>
      <p className="text-gray-600 mb-15 text-xl">Pick one technology per category to build your ideal stack.</p>
    
    
      <MainCard card={card}/>
      <div className="divider"/>
      </div>

    
  );
};

export default Card;