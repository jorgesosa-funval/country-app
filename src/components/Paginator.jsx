import React, { useState } from 'react';

export function Paginator({ counter }) {

  const [selectedButton, setSelectedButton] = useState(null);


  return (
    <div className="flex flex-wrap justify-center gap-3 md:mt-24 max-sm:mt-6 font-bold">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`border-0 rounded-full size-10 grid place-content-center  text-white transition-all duration-200 ${index >= (counter +1) ? 'bg-[#343964]': 'bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'}`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}




/* linear-gradient(#E65895, #BC6BE8)

#393F6E
#E2E4F3
#343964
#3E9FFF
#DD524C
#8B8EAB
#FFECC8 */





