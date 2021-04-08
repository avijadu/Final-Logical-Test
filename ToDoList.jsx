import React from 'react';
const ToDoList = (props)=>{
    return (
      <>
        <div className="item-container">
          <button className="delete-item-btn" 
                onClick={()=>{
                  props.onSelect(props.id);
                }}
            >-</button>
          <li>{props.text}</li>
        </div>
      </>
  );
}
export default ToDoList;
