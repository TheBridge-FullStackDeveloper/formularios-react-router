import React, { useState } from "react";

const NameForm = () => {
const [name,setName] = useState("")

const showName =(e)=>{
    e.preventDefault()
    console.log(name);
    setName("")
}
  return (
    <div>
      <form>
        <input type="text" name="name" id="name" placeholder="Insert your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={showName}>Send</button>
      </form>
    </div>
  );
};

export default NameForm;
