import { useState } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState({
    name: "",
    lname: "",
    email: "",
    okey: false,
    status: "it"
  })
  function synchronize(event) {
    const curName = event.target.name; // Get name of the input
    const passData = event.target.type == "checkbox" ? event.target.checked : event.target.value // get Data from input
    setData({
      ...data,
      [curName]: passData
    }) // change data
  }
  function handleSubmit(event) { // log data
    event.preventDefault();
    let count = 0;
    Object.keys(data).forEach(elem => {
      if(data[elem] === "") {
        count+=1;
      }
    });
    console.log(data);
    console.log(count > 0 ? "Fill all blanks" : "Logged in")
  }
  return (
    <>
      <form>
        <label>Your name</label>
        <input name='name' onChange={synchronize} value={data.name} type='text' required/>
        <label>Your LName</label>
        <input name='lname' onChange={synchronize} value={data.lname} type='text' required/>
        <label>Your Email</label>
        <input name='email' onChange={synchronize} value={data.email} type='email' required />
        <label>Are you OK?</label>
        <input name='okey' type='checkbox' onChange={synchronize} defaultChecked required />
        <fieldset>
        <legend>Are you employed?</legend>
        <input onChange={synchronize} name='status' value={'it'} type='radio' required defaultChecked /><label>IT</label>
        <input onChange={synchronize} name='status' value={'business'} type='radio' required/><label>Business</label>
        <input onChange={synchronize} name='status' value={'not_employed'} type='radio' required/><label>Not-employed</label>
        </fieldset>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default App
