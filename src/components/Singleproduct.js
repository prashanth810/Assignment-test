import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addcart } from '../action';

const Singleproduct = () => {
    const {id} = useParams();
    const[data,setData] = useState([]);

    // const dis = useDispatch();
    // const addproduct = (product) =>{
    //     dis(addcart(product));
    // }

    useEffect(()=>{
       const getapi =async()=>{
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
        setData(await resp.json());
       }
       getapi();
    },[]);

    const Shoproducts =()=>{
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                    <img src={data.image} height='400px' width='400px'/>
                    </div>

                    <div className='col-md-6'>
                           <h1 className='text-uppercase text-black-50'>{data.category}</h1>
                           <h2 className='display-5'>{data.title}</h2>

                           <p className='rating fw-bold'>
                            Ratting {data.rating && data.rating.rate}  <i className='fa fa-star'></i>  
                           </p>
                           
                           <p className='fw-bold fs-3'>$ {data.price} </p>

                           <p className='lead'>{data.description}</p>

                           <button className='btn btn-outline-dark ms-2 px-4 py-2'>Add to cart</button>

                           <Link to='/cart' className='btn btn-dark ms-2 px-3 py-2'>Go to cart</Link>
                    </div>
                </div>
                
            </div>
        )
    }

  return (
    <div>
            
        <div className='container py-5'>
            <div className='row py-5'>
                { <Shoproducts />} 
            </div>
        </div>

      
    </div>
  )
}

export default Singleproduct
