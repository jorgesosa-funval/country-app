import { useState } from "react";

export function Botones({ options, answer, selected, handleClick}) {

  

  const gradient = "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
  return (
    <div className="btns w-80 grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 mx-auto font-bold mb-10">
      {
        options && options.map(opt =>
          <button
            onClick={() => handleClick(opt)}
            key={opt}
            disabled={selected}
            className={`${selected === opt ? gradient : 'bg-[#343964]'} flex gap-x-2 text-sky-100 rounded-md items-end justify-center py-4`}>
            <span>{opt}</span>
            {selected && opt === answer &&
              <img src="/icons/Check_round_fill.svg" alt="correct" />
            }
            {selected === opt && opt !== answer &&
              <img src="/icons/Close_round_fill.svg" alt="wrong" />
            }
          </button>
        )
      }
    </div>
  );
} 