// export default Index;
import React from "react";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const [Data, setData] = useState({ username: "", password: "" });
    const nav = useNavigate()
    const handlechange = ({ currentTarget: input }) => {
        setData({ ...Data, [input.name]: input.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const {  username, password } = Data;
          if(username=="admin" && password=="123")
          nav("/admin")
          else{
        const res =await axios.post("https://localhost:7153/api/Auth/Login",{
            username,
            password
        })
        const y=res.data
          //   const res= await fetch("/send-sms",{
          // 	method:"GET",
          // 	headers:{
          // 		"Content-Type":"application/json"
          // 	},
          // 	// body:JSON.stringify({
    
          // 	// })
          //   });
          //	const res= await axios.post("/login", Data);
          //  res.json().then(data)=>{}
         console.log(y);
         localStorage.setItem("userwsd",JSON.stringify(y))
        //   localStorage.setItem("jtwtoken", JSON.stringify(y.token));
        //   localStorage.setItem("loginuser", JSON.stringify(y.loginuser));
        //   localStorage.setItem("bool",true);
          //  setLogin("jwtokenlocal",y.token);
          nav("/home")
      }
        } catch (error) {
          console.log(error);
        }
      };
  return (

  <form onSubmit={handleSubmit}>
    <div class="h-screen overflow-hidden flex items-center justify-center" style={{background: "#edf2f7"}}>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login Form with Floating Labels</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input onChange={handlechange}  autocomplete="off" name="username" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="UserName" />
							<label class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">UserName</label>
						</div>
						<div class="relative">
							<input onChange={handlechange}  autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button type="submit" class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</form>

  );
};

export default Index;
