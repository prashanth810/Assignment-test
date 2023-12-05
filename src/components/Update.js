import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const nav = useNavigate();
  const [formData, setFormData] = React.useState({
    image: '',
    title: '',
    price:'',
  });

  const { id2 } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id2}`)
      .then((response) => response.json())
      .then((result) =>
        setFormData({
          title: result.title,
          author: result.author,
        })
      );
  }, []);
  const [msg, setMsg] = React.useState('');
  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
    const reqObj = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
    fetch(`http://localhost:5000/posts/${formData.id2}`, reqObj)
      .then((response) => response.json())
      .then((result) => {
        setMsg('data updated successfully');
        console.log(result);
        setFormData({
          image:'',
          title: '',
          price: '',
        });
        nav('/products');
      });
  };

  const collectInput = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='d-flex justify-content-center mt-5'>

      <form onSubmit={handleForm}>
        <label>Image path</label>  
      <input type="text" name="image" value={formData.image} onChange={collectInput} placeholder='image path...' /> <br />

     <label>title</label>
        <input type="text" name="title" value={formData.title} onChange={collectInput} placeholder='title...'/> <br />

     <label>price</label>  
      <input type='text' name='price' value={formData.price} onChange={collectInput} placeholder='price...'/> <br />
        <input type="submit" value="update" />
        
      </form>

      <p> {msg} </p>
    </div>
  );
};
export default Update;

