import React, { useState } from "react";
import './Sign.css';

const SignupForm = () => {
    const [name,setname]=useState("")
    const OnInputchange1=(event)=>{
        console.log(event.target.value);
        setname(event.target.value);
    };
    
    const [password,setPassword]=useState("")
    const OnInputchange2=(event)=>{
        console.log(event.target.value);
        setPassword(event.target.value);
    };
    const [Text,setText]=useState("")
    const OnInputchange3=(event)=>{
        console.log(event.target.value);
        setText(event.target.value);
    };
    const [clgname,setclgname]=useState("")
    const OnInputchange4=(event)=>{
        console.log(event.target.value);
        setclgname(event.target.value);
    };
    const onInputchange=(event)=>{
        if(event.target.name==="name"){
            setname(event.target.value);  
        }
        if(event.target.name==="password"){
            setPassword(event.target.value);  
        }
        if(event.target.name==="Text"){
            setText(event.target.value);  
        }
        if(event.target.name==="clgname"){
            setclgname(event.target.value);  
        }
        

    };
    const onformsubmission=(event)=>{
        event.preventDefault()
        console.log("form submitted");
        console.log(event.target.name.value);
        console.log(event.target.password.value);
        console.log(event.target.Text.value);
        console.log(event.target.clgname.value);
}
function refreshPage() {
    window.location.reload(false);
  }

    return (
        <div className="card mb-2 mc-1"  >
        <form action="" onSubmit={onformsubmission}>
        <div className="card-header  bg-primary" text-center >
            <h4 className= "card-title" align="center">Signup</h4>
        </div>
        <div className="card-body" text-center>
        <label htmlFor="" className="form-lable">Registartion Number</label> 
                  <input type="text" placeholder="Registration Number" className="form-control"
                   value={Text} onChange={OnInputchange3} name="Text"/>

        <label htmlFor="" className="form-lable">Enter name</label> 
                  <input type="text" placeholder="Enter name" className="form-control"
                   value={name} onChange={OnInputchange1} name="name"/> 
                   
        <label htmlFor="" className="form-lable">Enter college name</label> 
        <input type="text" placeholder="Enter college name" className="form-control"
        value={clgname} onChange={OnInputchange4} name="clgname"/> 
                   

        <label htmlFor=""className="form-lable">Password</label>  
                     <input type="password" placeholder="Enter password" className="form-control"
                     value={password} onChange={OnInputchange2} name="password"/><br/>
<select name="Select Hobbies" id="Select Hobbies" className="btn btn-info">
  <option value="Select Hobbies">Select Hobbies</option>
  <option value="IT">Playing</option>
  <option value="CSE">Singing</option>
  <option value="EEE">Watching</option>
  <option value="MEC">Reading</option>
</select>
<div>     
<label htmlFor=""className="form-lable">Select Gender</label>  <br/>
    <input type="radio" id="1" name="k" ></input>
    <label htmlFor=""className="form-lable">Male</label> &nbsp;&nbsp;
    <input type="radio" id="1"name="k" ></input>
    <label htmlFor=""className="form-lable">FeMale</label> 
    </div>
    <button type="submit" onClick={refreshPage} id="log" className="btn btn-success" align="center">Register</button> 
    </div>
    <div>
      &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; forget  <a href="">password?</a>
    </div>
    </form>
        </div>
    );
};

export default SignupForm;