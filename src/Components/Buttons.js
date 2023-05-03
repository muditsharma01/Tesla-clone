import React from 'react'
import { FiChevronDown } from "react-icons/fi";

function Buttons() {
  return (
    <div className="my-12">
        <a href="https://www.tesla.com/model3/design">
          <button className="rounded-md bg-[#393c41] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white">
            Custom Order
          </button>
        </a>
        <a href="https://www.tesla.com/model3/design">
          <button className="rounded-md bg-[#f4f4f4] w-96 lg:w-64 h-10 lg:mx-4 mt-2">
            Existing Inventory
          </button>
        </a>
        <FiChevronDown className="flex justify-center animate-bounce absolute inset-x-0" size={24} />
        </div>
  )
}

export default Buttons