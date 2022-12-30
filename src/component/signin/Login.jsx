import React, { useEffect } from 'react'
import limg from "../../image/register.jpeg"
import { getDatabase, ref, onValue} from "firebase/database";
import "../../firebase.js"
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import "./Login.css"
export default function Signup() {

    const navigate = useNavigate();
    const [mail,setmail]=useState("")
    const [pass,setpass]=useState("")
    const [val,setval]=useState("")
   useEffect(()=>{
    const db = getDatabase();
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setval(data)
   });

   },[])
  
   var keys = Object.values(val);
  
    function write() {
         let c=0
           for(let i=0;i<keys.length;i++){
             if(keys[i].Mail===mail && keys[i].password==pass){
              c=1
              break
             }
             
           }
           if(c==0){
            alert("Enter valid details")
           }
           else{
            navigate("/student/dashboard")
           }

      }
      function hi(e){
        e.preventDefault()
      }
if(val) return (
    <div>
        <div className='rgf1'>
          <div className='frmcont'>
            <form className='rform' onSubmit={hi}>
                <h1 className='rgh1'>Login</h1>
              <input type="text" className='rf1' value={mail} onChange={(e)=>{setmail(e.target.value)}} placeholder='User Name'/>
              <br></br>
              <input type="text" className='rf1' value={pass} placeholder='Mobile' onChange={(e)=>{setpass(e.target.value)}}/>
              <br></br>
              <button className='rgb1' onClick={write}>Login</button>
              <button className='rgb2' onClick={write}>Signup</button>
             
            </form>
            </div>
        </div>
        <div className='rgf2'>
        <img src={limg} className="regimg1"/>

        </div>
    </div>
  )
}