import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Products = () => {
    const[data,setData] = useState([]);
    const[form,setForm] = useState(data);
    let componentmount = true;

    useEffect(()=>{
        const getproducts = async ()=>{
            const response = await fetch(`https://fakestoreapi.com/products`);
            if(componentmount){
                setData(await response.clone().json());
                setForm(await response.json());
                console.log(form);
            }
            return ()=>{
                componentmount = false;
            }
        };
        getproducts()        
    },[]);

    const edit =(post)=> setForm(post);
    
    const deleted=(id)=>{
        if('Are you shure??'){
            const requestOptions ={
                method:'DELETE',
            };

            fetch(`https://fakestoreapi.com/products/${id}`,requestOptions)
            .then((resp)=> resp.json())
            .then((res)=> {
                alert('Your data deleted !!');
                // getproducts();
            })
        }
    }

    const formproducts =(cat)=>{
        const updateList = data.filter((x)=> x.category === cat);
        setForm(updateList);
    }

    const Showproducts=()=>{
        return(
            <>
            <div className='buttons d-flex justify-content-center pb-5'>
                <button className='btn btn-outline-dark me-2 active' onClick={()=> setForm(data)}>All</button>

                <button className='btn btn-outline-dark me-2' onClick={()=> formproducts("men's clothing")}>Created Own</button>
 
               {/* <button className='btn btn-outline-dark me-2' onClick={()=> formproducts("women's clothing")}>Women's Clothing</button>

                <button className='btn btn-outline-dark me-2' onClick={()=> formproducts('jewelery')}>Jewellerys</button>

                <button className='btn btn-outline-dark me-2' onClick={()=> formproducts("electronics")}>Electronic's</button> */}
            </div>

            
            <div className='container'>
               <div className='row'> 

                <Link to='/add' className='btn btn-outline-dark' >  Add  </Link>

            {form.map((post,i)=>{
                return(
                    
        <div class="card col-md-3 h-100 text-center p-4 mb-4" key={i}>
         <img src={post.image} class="card-img-top" alt="..." height='300px'/>
              <div class="card-body">
                <h5 class="card-title">{post.title.substring(0,12)}...</h5>
                
                <p class="card-text fw-bold">${post.price}</p>
                    <Link to={`/product/${post.id}`} class="btn btn-outline-dark">Buy-Now</Link>

                    <Link to={`/update/${post.title}`}>
                    <button class="btn btn-outline-dark ms-2" >Edit</button>
                    </Link>

                    
                    <button class="btn btn-outline-dark ms-2" onClick={()=> deleted(post.id)}>Delete</button>
                </div>
                </div>
                       
                )
            })}
            
             </div>
            </div>
            </>
        )
            
    }

  return (
    <div>

        <div className='container my-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='display-6 fw-bolder text-center font'>Products</h2>
                    <hr />
                </div>
            </div>

            <div className='row justify-content-center'>
                    {<Showproducts/>}
            </div>

            
        </div>
      
    </div>
  )
}

export default Products;
