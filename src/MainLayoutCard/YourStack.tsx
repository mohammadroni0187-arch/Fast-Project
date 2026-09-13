import type { Icard } from "../Types/cardType";

interface YourStackProps{
  stack: Icard[];
  onRemove:(id:string)=>void;
  onRemoveAll:()=>void
}

const YourStack = ({stack, onRemove,onRemoveAll}:YourStackProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-24">
      <h3 className="text-xl font-bold m-1">
        Your Stack
      </h3>
            <p className="text-xs text-gray-500 mb-4">
                 {stack.length === 0? "No Technologies selected yet.":
                  `${stack.length} ${stack.length === 1 ? "Technology" : "Technology"} Selected.`}
                </p>
        {stack.length === 0 ? (
        <>

          <div className="text-gray-400 text-sm text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            Your stack is empty.
          </div>
        </>
      ) : (
        <div className="space-y-3 mt-4">

          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
            >

              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 object-contain"
              />

              <div className="flex-1">
                <p className="font-semibold text-gray-800">
                  {item.name}
                </p>

                <p className="text-xs text-gray-500">
                  {item.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className=" hover:text-red-700 font-bold text-xl"
              >
                ×
              </button>

            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-5 border border-red-200 text-red-500 py-2 rounded-xl font-semibold hover:bg-red-50 transition"
          >
            Remove All
          </button>
           </div>
           )}
      </div>


  );
};

export default YourStack;