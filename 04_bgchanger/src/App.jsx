import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState('black')
  return (
    <>
      <div className="min-h-screen min-w-full transition-all duration-200 relative flex justify-center" style={{backgroundColor:bgColor}}>
        <div className="bg-white h-14 absolute bottom-10 rounded-full flex items-center p-5 gap-2 text-white">
          <button className="px-8 py-2 rounded-full shadow-lg" onClick={()=> setBgColor("red")} style={{backgroundColor:'red'}}>Red</button>
          <button className="px-8 py-2 rounded-full shadow-lg" onClick={()=> setBgColor("green")} style={{backgroundColor:'green'}}>green</button>
          <button className="px-8 py-2 rounded-full shadow-lg" onClick={()=> setBgColor("blue")} style={{backgroundColor:'blue'}}>blue</button>
          <button className="px-8 py-2 rounded-full shadow-lg" onClick={()=> setBgColor("olive")} style={{backgroundColor:'olive'}}>olive</button>
          <button className="px-8 py-2 rounded-full shadow-lg" onClick={()=> setBgColor("gray")} style={{backgroundColor:'gray'}}>gray</button>
          <button className="px-8 py-2 rounded-full shadow-lg" onClick={()=> setBgColor("yellow")} style={{backgroundColor:'yellow'}}>yellow</button>
          <button className="px-8 py-2 rounded-full shadow-lg" onClick={()=> setBgColor("pink")} style={{backgroundColor:'pink'}}>Red</button>
          <button className="px-8 py-2 rounded-full shadow-lg" onClick={()=> setBgColor("purple")} style={{backgroundColor:'purple'}}>purple</button>
          <button className="px-8 py-2 rounded-full shadow-lg text-black" onClick={()=> setBgColor("lavender")} style={{backgroundColor:'lavender'}}>lavender</button>
          <button className="px-8 py-2 rounded-full shadow-lg text-black" onClick={()=> setBgColor("white")} style={{backgroundColor:'white'}}>white</button>
          <button className="px-8 py-2 rounded-full shadow-lg" onClick={()=>setBgColor("black")} style={{backgroundColor:'black'}}>black</button>
        </div>
      </div>
    </>
  )
}

export default App;
