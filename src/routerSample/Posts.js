import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Posts() {

    const [posts, setposts] = useState([]);


    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setposts(res.data);
            })

    }, [])


    return (
        <>
            <ul>
                {
                    posts && posts.map((item, key) => {
                        return <li key={item.id}><Link to={'/posts/' + item.id}>{item.title}</Link></li>
                    })
                }
            </ul>
        </>
    )
}

export default Posts