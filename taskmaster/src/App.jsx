import { SiTask } from "react-icons/si";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md"
import { BsCodeSlash } from "react-icons/bs";
import { useState } from "react";

function App() {

const [newItem,setnewItem] = useState("");
const [items,setItems] = useState([]);

//item setup
function addItem(){
  const item ={
    id: Math.floor(Math.random() * 1000),
    value: newItem
  }

  setItems(oldList => [...oldList,item]);
  setnewItem();

  //cleaning input field after adding an item to the list
  const cleaning = setnewItem("");
  cleaning;
}

//delete an item in the list
function deleteItem(id){
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}

  return (
    <>
    <div className="flex justify-center mx-auto mt-10 items-center text-white">
      <SiTask size={60}/>
      <h3 className="text-white text-xl mb-7 font-titleFont">Taskmaster</h3>
    </div>
    <div className="flex flex-col max-w-lg mx-auto mt-10 justify-center items-center border rounded-xl shadow px-5 py-4">
    <div className="flex flex-row space-x-2">
      <input type="text"
      className="
      border rounded p-2 h-6 text-md placeholder:font-extralight font-mono bg-white/90
      focus:outline-none focus:bg-white
      "
      placeholder="Add a new task"
      value={newItem}
      onChange={(e) => setnewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>
        <IoIosAddCircle size={20} className="text-white"/>
        </button>
    </div>

    <div>
    <ul className="px-4 py-3 text-white">
        {items.map(item => {
          return(
          <li
          className="px-3 py-2 font-mono"
          key = {item.id}>
          {item.value}
            <button onClick={() => {deleteItem(item.id)}}><MdDelete size={20}/></button>
          </li>)
        })}
    </ul>
    </div>
    </div>
     <div>
      <p className="flex justify-center mx-auto mt-5 text-white/80 font-mono">
        <BsCodeSlash size={20} className="mx-2"/>
        Developed by: Ruben Matias</p>
    </div>
    </>
  )
}

export default App
