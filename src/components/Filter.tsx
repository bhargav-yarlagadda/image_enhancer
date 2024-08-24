import { useState } from "react"
export const Filter = () => {
  const [clicked,setClicked]=useState<string>("insta")


  return (
    <div className="text-sm font-medium text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap gap-10 justify-between -mb-px">
        <li value="insta" onClick={()=>{setClicked("insta")}} className={`me-2 cursor-pointer ${clicked==="insta"?"border-b-2":""}`}>

            Insta filter

        </li>
        <li value="custom" onClick={()=>{setClicked("custom")}} className={`me-2 cursor-pointer ${clicked==="custom"?"border-b-2":""}`}>
            Custom filter
        </li>
        
      </ul>
    </div>
  )
}
