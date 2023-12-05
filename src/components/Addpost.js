import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Addpost = () => {
    const nav = useNavigate();
    const[data,setData] = useState(null);
    const[form,setForm] = useState({
        image:'',
        title:'',
        price:'',
    });

    useEffect(()=>{
        getapi();
    },[]);

    const getapi=()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((resp)=> resp.json())
        .then((res)=> setData(res))
    };

    const createpost =(e)=>{
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };

        fetch(`https://fakestoreapi.com/products`,requestOptions)
        .then((resp)=> resp.json())
        .then((res)=>{
            alert('data addded successflly!!');
            setForm({
                image:'',
                title:'',
                price:'',
            });
            nav('/');
            getapi();
        })
    }

    const collectip=(e)=>{
        setForm({...form,[e.target.name] : e.target.value})
    };

    if(data == null){
        return<p>Loading....</p>
    }
  return (
    <div className='d-flex justify-content-center'>

       <form onSubmit={createpost}>
        <input type='text' name='image' value={form.image} placeholder='Enter your image path....' onChange={collectip} /> <br />
       
        <input type='text' name='title' value={form.title} placeholder='Enter your title....' onChange={collectip} /> <br />
        
        <input type='text' name='price' value={form.price} placeholder='Enter your price....' onChange={collectip} /> <br />

        <button className='btn btn-outline-dark'>Add-Now</button>
       </form>
    </div>
  )
}

export default Addpost;
