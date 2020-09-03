import React, { Component } from 'react'
import Swal from 'sweetalert2'
import TodoList from './component/todolist';
import TodoInput from "./component/todoinput";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state={
    items:[],
    item:"",
    id:Math.random(),
    enableEdit:false,
  }
  //get value from input
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    });
  }
 //submit 
  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.item===""&&this.state.item.length<1){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your task is empty!'
      });
    }
    else{
    const newItem={
      id:this.state.id,
      title:this.state.item,
      complete:false
    }
    let updateItems=[...this.state.items,newItem];
  this.setState({
        items:updateItems,
        item:"",
        id:Math.random(),
        enableEdit:false
      });
    }
}
//edit item
handleEdit=(id)=>{
  const filterdItem=this.state.items.filter((item)=> id !==item.id);
  const getItem=this.state.items.find((item)=>item.id === id);
 this.setState({
  items:filterdItem,
  item:getItem.title,
  id:id,
  enableEdit:true
 });
}
//delete item
  handleDelete=(id)=>{
  const items= this.state.items.filter((item)=>{
    return id !== item.id;
  });
  this.setState({
      items:items
    })
  }
  //handle items complete
  handleComplete=(id)=>{
    const elementsIndex=this.state.items.findIndex(element => element.id === id );
    let newArray = [...this.state.items];
  if(newArray[elementsIndex].complete){
    newArray[elementsIndex] = {...newArray[elementsIndex], complete: false};
    this.setState({
      items:newArray
    });
  }
  else{
    newArray[elementsIndex] = {...newArray[elementsIndex], complete: true};
    this.setState({
      items:newArray
    });
  }
}
//clear all items
  clear=()=>{
    this.setState({
      items:[],
      item:"",
      id:Math.random(),
      enableEdit:false
    })
  }

  render(){

    return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-10 mx-auto mt-4 " >  
            <h2 className="text-center mb-4">Todo Input</h2>
            <TodoInput
            items={this.state.item}
            edit={this.state.enableEdit}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
            <TodoList 
            items={this.state.items} 
            clear={this.clear}
            edit={this.enableEdit} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            handleComplete={this.handleComplete}
            />
      </div>
      </div>
    </div>
  );
  }
}

export default App;
