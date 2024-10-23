import { useState } from "react"
import Button from "./Components/Button"

function App() {
  let [color, setColor] = useState("olive")


  return (

    <div className=" w-screen h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-3 py-2 " >

        <div className="flex flex-wrap justify-center gap-3 bg-sky-100 text-xl px-3 py-3 rounded-full "
        >
          
          
          <Button color="red" colorChange={()=>setColor('red')}/>
          <Button color="blue" colorChange={()=>setColor('blue')}/>
          <Button color="green" colorChange={()=>setColor('green')}/>
          <Button color="purple" colorChange={()=>setColor('purple')}/>
          <Button color="pink" colorChange={()=>setColor('pink')}/>
          <Button color="brown" colorChange={()=>setColor('brown')}/>
          <Button color="grey" colorChange={()=>setColor('grey')}/>
          <Button color="black" colorChange={()=>setColor('black')}/>
          <Button color="cyan" colorChange={()=>setColor('cyan')}/>
          <Button color="yellow" colorChange={()=>setColor('yellow')}/>

          
        </div>
      </div>

    </div>

  )
}

export default App
