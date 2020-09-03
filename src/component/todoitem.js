import React from 'react';
const TodoItems=(props)=>{
return(
    <li  className=" list-group-item d-flex justify-content-between mb-3 border ">
        <h6 onClick={props.handleComplete} className={props.complete?"text-capitalize active":"text-capitalize not-active"}>{props.task}</h6>
        <div>
            <span className="cursor-pointer mx-2 text-success"><i className=" fas fa-pen"onClick={props.handleEdit}></i></span>
            <span className="cursor-pointer mx-2 text-danger"onClick={props.handleDelete}><i className="fas fa-trash" ></i></span>
        </div>
    </li>
)
}
export default TodoItems;