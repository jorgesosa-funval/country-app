
export function QuizCompleted() {
  return (
    <div className="content-center p-0 justify-center aling w-full h-screen justify-items-center">

      <div className="mx-0 bg-slate-700 w-96 h-1/2 content-center justify-items-center rounded-md">
        <img src="../public/icons/congrats.png" alt="" className="pt-0 pb-10" />
        <h1 className="px-8 text-center text-white font-black text-2xl">Congrats! You completed the quiz.</h1>
        <p className="text-white p-5">you answer 4/10 correctly</p>
        <button className="bg-gradient-to-r from-[#E65895] to-[#BC6BE8] text-white font-bold w-52 h-12 rounded-md" type:onClick >Play again</button>
      </div>

    </div>

  )
}
