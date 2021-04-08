import React, { useState } from 'react';
import ToDoList from './ToDoList';
const AppToDoList = ()=>{
    const [items , setAddItems] = useState();
    const [prntItem,setPrntItem] = useState([])

    const addItem = (event)=>{
        setAddItems(event.target.value);
    }
    const printItem =()=>{
        setPrntItem((preval)=>{
            return [...preval , items];
        });
        setAddItems("");
    }
                    //Delete items   
    const delItem = (id)=>{
        console.log("deleted");
        setPrntItem((preval)=>{
            return preval.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    };
    
    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <h1>To Do List</h1>
                <input type="text" placeholder="add an item" onChange={addItem} value={items} />
                <button className="add-item-btn" onClick={printItem}>+</button>
                <ol>                    
                    {prntItem.map((itemval,index)=>{
                       return  <ToDoList 
                       key={index}
                       id={index}
                       text={itemval}
                       onSelect={delItem}
                       />
                    })}
                </ol>
            </div>
        </div>
        </>
    );
};
export default AppToDoList;
