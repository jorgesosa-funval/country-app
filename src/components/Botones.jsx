export function Botones({ options }) {
  const gradient = "bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
  return (
    <div className="btns w-80 grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 mx-auto font-bold mb-10">
      {
        options && options.map(opt =>
          <div className=" bg-[#343964] flex gap-x-2 text-sky-100 rounded-md items-end justify-center py-4">
            <span>{opt}</span>
            {/* <img src="/icons/Check_round_fill.svg" alt="correct" /> */}
          </div>
        )
      }
    </div>
  );
}