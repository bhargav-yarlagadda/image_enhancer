import Image  from "./components/Image"
import { Filter } from "./components/Filter"
const App = () => {
  return (
      <div className="bg-black w-screen h-screen  px-9">
        <h1 className="text-white  text-center p-6 text-3xl" >
           Image Filter
        </h1>
        <div className="flex text-white justify-around mt-5 items-center w-full" >
            <Image/>
            <Filter/>
        </div>
      </div>    
  )
}

export default App