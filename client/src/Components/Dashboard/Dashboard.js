import React, { useEffect } from 'react'
import { useState } from 'react';
import "./dashboard.css"
import axios from 'axios';

const Dashboard = () => {
    const [formData, setFormData] = useState({
        roomName: '',
        price: '',
        availability: 0
      });
      const [rooms,setRooms]=useState([]);
      


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(formData)
        try {
            const response=await axios.post("http://localhost:8000/add",formData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
      }
      
      const getAllRooms=async()=>{
        try {
            const response=await axios.get(`http://localhost:8000/rooms`);
            console.log(response);
            setRooms(response.data);
        } catch (error) {
            console.log(error);
        }
      }

      useEffect(()=>{
        getAllRooms();
      },[])

      const handleDelete=async(id)=>{

        try{
            const response=await axios.delete(`http://localhost:8000/api/rooms/${id}`);
            setRooms(rooms.filter(room => room._id !== id));
            console.log(response);
        }catch(error){
            console.log(error);
        }

      }


  return (
    <>
  {/* for header part */}
  <header>
    <div className="logosec">
      <div className="logo">HOTEL DEL LUNA</div>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
        className="icn menuicn"
        id="menuicn"
        alt="menu-icon"
      />
    </div>
    <div className="searchbar">
      <input type="text" placeholder="Search" />
      <div className="searchbtn">
        <img
          src="https://icon-library.com/images/search-icon-png/search-icon-png-17.jpg"
          className="icn srchicn"
          alt="search-icon"
        />
      </div>
    </div>
    <div className="message">
      <div className="circle" />
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
        className="icn"
        alt=""
      />
      <div className="dp">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
          className="dpicn"
          alt="dp"
        />
      </div>
    </div>
  </header>
  <div className="main-container">
    <div className="navcontainer">
      <nav className="nav">
        <div className="nav-upper-options">
          <div className="nav-option option1">
            <img
              src="	https://cdn-icons-png.flaticon.com/512/3757/3757985.png"
              className="nav-img"
              alt="dashboard"
            />
            <h3> Dashboard</h3>
          </div>
          <div className="option2 nav-option">
            <img
              src="https://icon-library.com/images/article-icon-png/article-icon-png-27.jpg"
              className="nav-img"
              alt="articles"
            />
            <h3> Articles</h3>
          </div>
          <div className="nav-option option3">
            <img
              src="https://w7.pngwing.com/pngs/538/135/png-transparent-computer-icons-report-icon-angle-text-cost.png"
              className="nav-img"
              alt="report"
            />
            <h3> Report</h3>
          </div>
          <div className="nav-option option4">
            <img
              src="https://png.pngtree.com/png-vector/20190725/ourmid/pngtree-school-icon-png-image_1606554.jpg"
              className="nav-img"
              alt="institution"
            />
            <h3> Institution</h3>
          </div>
          <div className="nav-option option5">
            <img
              src="https://static.thenounproject.com/png/201719-200.png"
              className="nav-img"
              alt="blog"
            />
            <h3> Profile</h3>
          </div>
          <div className="nav-option option6">
            <img
              src="data:image/png;base64,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"
              className="nav-img"
              alt="settings"
            />
            <h3> Settings</h3>
          </div>
          <div className="nav-option logout">
            <img
              src="data:image/png;base64,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"
              className="nav-img"
              alt="logout"
            />
            <h3>Logout</h3>
          </div>
        </div>
      </nav>
    </div>
    <div className="main">
      <div className="searchbar2">
        <input type="text" name="" id="" placeholder="Search" />
        <div className="searchbtn">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
            className="icn srchicn"
            alt="search-button"
          />
        </div>
      </div>
      <div className="box-container">
        <div className="box box1">
          <div className="text">
            <h2 className="topic-heading">70k</h2>
            <h2 className="topic">Rooms Views</h2>
          </div>
          <img
            src="https://simpleicon.com/wp-content/uploads/eye2.png"
            alt="Views"
          />
        </div>
        <div className="box box2">
          <div className="text">
            <h2 className="topic-heading">150</h2>
            <h2 className="topic">Likes</h2>
          </div>
          <img
            src="	https://www.freeiconspng.com/thumbs/like-icon-png/black-like-icon-png-13.png"
            alt="likes"
          />
        </div>
        <div className="box box3">
          <div className="text">
            <h2 className="topic-heading">320</h2>
            <h2 className="topic">Comments</h2>
          </div>
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/blackcat/comment-44.png"
            alt="comments"
          />
        </div>
        <div className="box box4">
          <div className="text">
            <h2 className="topic-heading">{rooms.length}</h2>
            <h2 className="topic">Total Rooms</h2>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqO-bZI6qoy4_mm53IDKn8fxzCU3tJRd9EyA&usqp=CAU"
            alt="published"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
  <input
    type="text"
    name="roomName"
    value={formData.roomName}
    onChange={handleInputChange}
    placeholder="Room Name"
  />
  <input
    type="Number"
    name="price"
    value={formData.price}
    onChange={handleInputChange}
    placeholder="Price"
  />
  <div className='avail'>

    <label htmlFor="availability">Availability</label>
    <input
    type="number"
    name="availability"
    value={formData.availability}
    onChange={handleInputChange}
    placeholder="Price"
  />
  </div>

  <button className='formBtn' type="submit">Add Room</button>
</form>


      <div className="report-container">
        <div className="report-header">
          <h1 className="recent-Articles">Recent Articles</h1>
          <button className="view">View All</button>
        </div>
        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">Chambers</h3>
            <h3 className="t-op">Price</h3>
            <h3 className="t-op">Availability</h3>
            <h3 className='t-op'>Room Delete</h3>
          </div>
          <div className="items">
          {rooms.map((room)=>{
            return(
                <div className="item1">
                    <h3 className="t-op-nextlvl">{room.roomName}</h3>
                    <h3 className="t-op-nextlvl">₹ {room.price}</h3>
                    {room.availability>5?
                    <h3 className="t-op-nextlvl label-tag">{room.availability}</h3>:
                    <h3 className="t-op-nextlvl label-ta">{room.availability}</h3>
                    }
                    <button onClick={()=>handleDelete(room._id)} >Delete</button>
                </div>
            )
          })}

          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Dashboard