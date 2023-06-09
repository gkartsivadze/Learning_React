import { useState } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState({})
  function synchronize(event) {
    const curName = event.target.name;
    const passData = event.target.type == "checkbox" ? event.target.checked : event.target.value
    setData({
      ...data,
      [curName]: passData
    })
    console.log(data);
  }
  return (
    <>
      <form>
        <label>Your name</label>
        <input name='name' onChange={synchronize} value={data.name} type='text' />
        <label>Your LName</label>
        <input name='lname' onChange={synchronize} value={data.lname} type='text' />
        <label>Your Email</label>
        <input name='email' onChange={synchronize} type='email' />
        <label>Are you OK?</label>
        <input name='okey' type='checkbox' onChange={synchronize} />
        <fieldset>
        <legend>Are you employed?</legend>
        <input onChange={synchronize} name='status' value={'it'} type='radio'/><label>IT</label>
        <input onChange={synchronize} name='status' value={'business'} type='radio'/><label>Business</label>
        <input onChange={synchronize} name='status' value={'not_employed'} type='radio'/><label>Not-employed</label>
        </fieldset>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
