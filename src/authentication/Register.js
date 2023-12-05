import React from 'react'

const Register = () => {
  return (
    <div className='d-flex justify-content-center mt-5'>
      
      <form>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User - Name </label>
    <input type="email" class="form-control border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='user name...' />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email - I'd..."/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control border-primary" id="exampleInputPassword1" placeholder='Password...'/>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control border-primary" id="exampleInputPassword1" placeholder='Confirm Password...'/>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input border-primary" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Register
