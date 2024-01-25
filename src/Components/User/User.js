 import React, { useState } from 'react'
 const User = ({name,location}) => {
   const [count1 , setCount1] = useState(0);
   const [count2] = useState(1);
   return (
     <div className='user_card'>
       <span>count1 : {count1}</span>
       <button onClick={()=>{setCount1(count1+1)}}>Increase</button>
       <span>count2 : {count2}</span>
       <h3>Name : {name}</h3>
       <h3>Location : {location}</h3>
       <h3>Email : christian123@gmail.com</h3>
     </div>
   )
 }

 export default User
