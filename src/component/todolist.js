import React from 'react';
import TodoItems from './todoitem'
 const TodoList=(props)=>{
  let {items,clear,handleDelete,handleEdit,handleComplete}=props;
  return(
      <ul className="list-group">
        <h2 className="text-center mb-4">Todo List</h2>
    {items.map((item)=>{
         return <TodoItems key={item.id} task={item.title} complete={item.complete}
         handleDelete={()=>handleDelete(item.id)}
         handleEdit={()=>handleEdit(item.id)}
         handleComplete={()=>handleComplete(item.id)}/>;
    })} 
      <button className="btn btn-danger btn-block mt-2" onClick={clear}>Clear List</button>
      </ul>
    )
}
    export default TodoList;