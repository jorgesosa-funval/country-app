import React, { useState } from 'react';

export default function Paginator() {
  
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (index) => {
    setSelectedButton(index); 
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 md:mt-24 max-sm:mt-6">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)} 
          className={`border-0 rounded-full size-10 grid place-content-center  text-white transition-all duration-200 ${
            selectedButton === index ? 'bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'
              : 'bg-[#343964]' 
          }`}
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





