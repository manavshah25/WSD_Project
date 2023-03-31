import React from 'react'
import './post.css'
import { useNavigate } from 'react-router-dom'
import image from '../Home2/hero.png'
import { useState } from 'react'
import '../Login/login.css'
import moment from 'moment';
import axios from 'axios'

function Index() {
  const nav = useNavigate()

    var storage = localStorage.getItem("userwsd");
    storage=JSON.parse(storage);
    storage=storage.token
    const arr = storage.split("/");
    const token = arr[0];
    const uid = arr[1];
    console.log(uid);

    const [data, setdata] = useState({
        title: "",
        complain: "",
        PulishDate:"",
        userId: uid,
        resolve: "false",
      });

    
        const handleChange = async (event) => {
          const name = event.target.name;
      
          const val = event.target.value;
          setdata((values) => ({ ...values, [name]: val }));
          console.log(data);
        };
      
        const handleSubmit = async (e) => {
          const { title, complain,userId, resolve } = data;
          e.preventDefault();
          const PulishDate=moment().format("MMM Do YY"); 
          console.log(PulishDate)
          try {
            const d = axios.post("https://localhost:7153/api/Complaints", {
              title,
              complain,
              PulishDate,
              userId
            });
            console.log("pppppp");
            console.log(d);
            console.log(d.data);
            window.alert("yesss");
            nav("/home")
          } catch (e) { 
            console.log(e);
          }


       
      }
  return (
    <div class=""><form className="login-form" onSubmit={handleSubmit}>
    <img src={image} className="login__img"></img>
    <div className="login__right">

      <h2 class="text-2xl italic ">Post your complain</h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
        value={data.title}
        required
      />
      <br></br>
      <input
        type="text"
        placeholder="Complain"
        name="complain"
        onChange={handleChange}
        value={data.complain}
        required
      />
      <br />
       <div class="w-full px-3 mb-5">
                    <button type='submit' class="block w-full max-w-xs mx-auto bg-gradient-to-r from-blue-300 to-blue-600 hover:bg-gradient-to-r from-blue-400 to-blue-700 focus:bg-gradient-to-r from-blue-300 to-blue-600 text-white rounded-lg px-3 py-3 font-semibold">POST COMPLAIN</button>
                      </div>
    </div>
  </form></div>
  )
};

export default Index