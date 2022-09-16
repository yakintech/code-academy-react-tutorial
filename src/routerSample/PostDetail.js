import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function PostDetail() {

    const [detail, setdetail] = useState({});

    let { id } = useParams();

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                setdetail(res.data);
            })

    }, [])


    return (<>
        <h1>Id: {detail.id}</h1>
        <h1>Title: {detail.title}</h1>
        <p>Body: {detail.body}</p>
    </>
    )
}

export default PostDetail