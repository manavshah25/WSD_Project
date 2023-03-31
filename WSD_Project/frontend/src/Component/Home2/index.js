import React from 'react'
import './home.css'
import "./style.css"
import hero from './hero.png'
import Card from '../Card'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Footer from '../Footer'
import person from "./person.jpg"
import { NavLink } from 'react-router-dom'
function Index() {
    const [post, setPost] = useState({
        g: [],
      });
      useEffect(() => {
        axios.get("https://localhost:7153/api/Complaints").then(
          (res) => {
            setPost({ g: res.data });
            console.log(res.data);
          },
          (error) => {
            console.log("error in fetching");
          }
        );
      }, []);
  return (
    <div>
      <div class="container-xxl pb-1 bg-white p-0">
      <div class="container-xxl position-relative p-0">
            {/* <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0"><i class="fa fa-search me-2"></i>SEO<span class="fs-5">Master</span></h1>
                    <img src="img/logo.png" alt="Logo"/> 
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="index.html" class="nav-item nav-link active" style={{color:"red"}}>Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Service</a>
                        <a href="project.html" class="nav-item nav-link">Project</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                    <butaton type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                    <a href="https://htmlcodex.com/startup-company-website-template" class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Pro Version</a>
                </div>
            </nav> */}

            <div class="container-xxl py-2 bg-primary hero-header mb-8">
                <div class="container my-5 py-2 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="text-white mb-4 text-2xl tracking-wider animated zoomIn">Let's make the place like home !!!</h1>
                            <p class="text-white pb-4 py-4 animated zoomIn">The hostel complaint management portal is an online platform designed to help students living in hostels report and resolve their grievances effectively. Hostels are a crucial part of the student life experience, but they can also be source of frustration when issue arise. With the hostel complaint management portal, students can submit their complaints, track their progress, and receive updates on their status in real-time. This platform aims to streamline the process of addressing student complaints by providing a centralized database that enables hostel staff to efficiency manage and prioritize complaint</p>
                            <a href="" class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"><NavLink to="/post">Raise Complain</NavLink></a>
                             <a href="" class="btn  text-none btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"><NavLink to="/logout">Logout</NavLink></a> 
                        </div>
                        <div class="col-lg-6 text-center text-lg-start">
                            <img class="img-fluid" src={hero} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    <h1 class="p-12 text-7xl text-center font-normal underline decoration-sky-500/30  italic bg-white max-w-full w-full">Complains </h1>
  {post.g.map((add,index)=>(
    <div class="bg-white flex">
    <div class=" p-2 px-0 pt-4 pb-3 max-w-sm w-full"key={index}>
      <div class="max-w-sm w-full bg-red  lg:max-w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
  </div>
  <div class="border-r  border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8 mr-7">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-gray-900 mt-2 font-bold text-xl mb-2">Title : {add.title}</div>
      <p class="text-gray-700 text-base">Complain : {add.complain}</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src={person} alt="Avatar of Jonathan Reinink"/>
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Complain Id : {add.id}</p>
        <p class="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div>
    </div>
 </div> ))}
  <Footer />
    </div>
  )
}

export default Index
