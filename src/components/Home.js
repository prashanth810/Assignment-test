import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <div className='hero'>
            <div className='row'>
            <div class="card text-bg-dark text-white border-0">
        <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-taobao-vector-creative-technology-online-shopping-illustration-computer-finger-poster-image_131803.jpg" class="card-img" alt="Background" height='550px' />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
         <div className='container text-dark font'>
         <h5 class="card-title display-5 fw-bold mb-o">NEW SEASON ARIALS</h5>
            <p class="card-text fs-2">CHECK OUT ALL THE TRENDS</p>
         </div>
        </div>
        </div>
            </div>
        </div>
      <Products/>
    </div>
  )
}

export default Home
