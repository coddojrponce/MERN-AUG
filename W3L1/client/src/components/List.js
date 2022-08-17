

import React from 'react'

const List = (props) => {
    const {todoList,setTodoList}=props

const clickHandler = (index)=>{

    const list = todoList
    // console.log(list)
    const obj = list[index]
    console.log(obj)
    obj.completed = !obj.completed
    console.log(obj)
    // console.log([...list])
    setTodoList([...list])

}

const deleteHandler=(thisIndex)=>{

    const newList = todoList.filter((item,idx)=>{
        return idx !== thisIndex
    })
    
    setTodoList([...newList])

    console.log(todoList)



    
}


  return (
    <div>
        <h2>list</h2>

        {
            todoList.map((item,index)=>(
                <div key={index}>
                    <h3 style={item.completed?{textDecoration:'line-through'}:null}>  todo:{item.todo}</h3>
                    
                    <input onChange={()=>clickHandler(index)} type="checkbox" name="" id="" />
                    <button onClick={()=>deleteHandler(index)}>Delete</button>
                </div>
            ))
        }
        


    </div>
  )
}

export default List