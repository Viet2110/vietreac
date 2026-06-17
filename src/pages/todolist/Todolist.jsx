import React, { useState } from 'react';
import { PiSketchLogoDuotone } from 'react-icons/pi';

function Todolist(props) {
    const [count, setCount] = useState(0);
    //  1. count giá trị hiển thị
    //  2. setCount là hàm set lại giá trị count
    //  3. useState(0) là giá trị khởi tạo, ban đầu
    const [indexEdit, setindexEdit] = useState(null);
    const [task, setTask] = useState("");
    const [taskEdit, setTaskEdit] = useState("");
    const [todo, setTodo] = useState([
        {
            title: "quet nha",
            status: false
        },
        {
            title: "quet nha",
            status: false
        }
    ]);
    const handleAdd = () => {
        const newTodo = {
            title: task,
            status: false
        }
        setTodo([...todo, newTodo]);
        setTask("");
    }
    const handleDelete = (index) => {
        const newTodo = todo.filter((item, i) => i !== index);
        setTodo(newTodo);
    }

    //  ham handleEdit(index , doi tuong) => setIndexEdit(index)
    //  useState luu indexEdit (null)
    const handleEdit = (index, o) => {
        setindexEdit(index);
        setTaskEdit(o);
    }
    const handleUpdate = () => {
        const newTodo = [...todo];
        newTodo[indexEdit] = taskEdit;
        setTodo(newTodo);
        setindexEdit(null);
    }
    const kimcuong = (index) => {
        const newTodo = [...todo];
        newTodo[index].status = 'true'
        setTodo(newTodo)
    }
    return (
        <div className='text-center'>
            <p>To do list</p>
            <p>{task}</p>
            <div>
                <button onClick={() => setCount(count > 0 ? count - 1 : count)} className='s1 border-0 rounded-md p-2 bg-emerald-600 mr-2'>--</button>
                <button onClick={() => setCount(count + 1)} className='s2 border-0 rounded-md p-2 bg-emerald-600'>++</button>
            </div>
            <div className='mt-2 flex gap-2 justify-center'>
                <input value={task} onChange={(e) => setTask(e.target.value)} className='p-2 border border-gray-400 rounded-2xl outline-blue-400' type="text" placeholder='What to do' />
                <button onClick={handleAdd} className='text-white bg-emerald-500 px-2 rounded-2xl'>Add</button>
            </div>
            {
                todo.map((item, index) => (
                    <div className='mt-2 mx-4 px-1 py-1 flex justify-between items-center bg-black text-white '>
                        <h1>{index + 1}</h1>
                        {
                            indexEdit === index ? (
                                <input value={taskEdit.title} onChange={(e) => setTaskEdit({ ...taskEdit, title: e.target.value })} type='text' placeholder='hi' className='p-2 border-2 rounded-xl' />
                            ) : <p className={item.status ? 'line-through' : ""}>{item.title}{item.status && <span className='text-emerald-500 '>    Complete</span>}</p>
                        }
                        <div className='flex items-center gap-3'>
                            {
                                indexEdit === index ? (
                                    <>
                                        <button onClick={handleUpdate} className='bg-emerald-400'>Update</button>
                                        <button onClick={handleEdit}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        {
                                            !item.status && <button onClick={() => kimcuong(index, item)} className='p-2 bg-blue-400'><PiSketchLogoDuotone /></button>
                                        }
                                        <button onClick={() => handleEdit(index, item)} className='p-2 bg-blue-400'>Edit</button>
                                        <button onClick={() => handleDelete(index)} className='p-2 bg-red-500' >Delete</button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    );

}
export default Todolist;