import React from 'react'
const TodoInput=(props)=> {
    const {items,handleChange,handleSubmit,edit}=props;
    return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text  bg-primary text-white">
                   <i className="fas fa-book"></i>
                   </div>
                </div>
                    <input type="text" value={items} className="form-control" onChange={handleChange} aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <button type="submit" className=
                        {edit?
                        "btn btn-success btn-block mt-3":
                        "btn btn-primary btn-block mt-3"
                        }>{edit?"Edit Task" :"Add Task"}</button>
                </form>
          </div>
        );
}
export default TodoInput;
