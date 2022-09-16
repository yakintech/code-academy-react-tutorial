import React, { useEffect, useState } from 'react'

function ToDoPage() {


    const [todos, settodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then((data) => {
                settodos(data);
            })
    }, [])

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos && todos.map((item, key) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ToDoPage