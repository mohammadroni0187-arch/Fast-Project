
import  { useState } from "react";
import type { Icard } from "../Types/cardType";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface MainCardProps {
  card: Icard[];
}

const MainCard = ({ card }: MainCardProps) => {
  const [isAddStack, setIsAddStack]=useState<Icard[]>([])


  const handleAddStack =(item:Icard)=>{
 setIsAddStack([...isAddStack, item])
 toast(` ${item.name} Add to Your Stack!`, {
position: "bottom-right",
autoClose: 5000,
theme: "light"
})
  }
  const handleRemoveStack=(id:string)=>{
    setIsAddStack(isAddStack.filter((item)=>item.id!==id));
  };

  const handleRemoveAll=()=>{
    setIsAddStack([]);
  };
  return (
   <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mt-8">
      <div className="">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {card.map((item) => (
        <div
        key={item.id}
        className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600">
              {item.badge}
            </span>
          </div>

         
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {item.name}
          </h2>

         
          <p className="text-gray-600 text-sm leading-6 mb-5">
            {item.description}
          </p>

          
          

          
          <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-5">
             <div className="mb-4">
            <p className="font-semibold text-gray-800">
              {item.category}
            </p>
          </div>

           <div className="text-right">
              <p className="font-semibold text-gray-800">
                {item.difficulty}
              </p>
            </div>

            <div>
          <p className="font-semibold text-gray-800">
                ⭐ {item.rating}
              </p>
            </div>

          </div>

          
          <button
          onClick={()=>handleAddStack(item)}
           disabled={isAddStack.some((stack)=> stack.id===item.id)}
           className={`w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition`} >
            {isAddStack.some((stack)=>stack.id===item.id)? "Added to Stack" : "Add to Stack"}
          </button>
        </div>
      ))}
      </div>
      </div>
      <div className="lg:col-span-1">
      <YourStack stack={isAddStack} onRemove={handleRemoveStack} onRemoveAll={handleRemoveAll}/>
    </div>
    </div>
    
  );
};

export default MainCard;
