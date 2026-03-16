

import './App.css'

function App() {
  return (
    <>
     <Person></Person>
     <Student></Student>
     <Device name="laptop" brand="Dell" price="40000"></Device>
     <Device name="mobile" brand="Redmi" price="15000"></Device>
     <Device name="TV" brand="Sony" price="60000"></Device>
    </>
  )

}


function Person(){
  return (
   <p>I am a person </p>
  )
}

function Student(){
  return (

    <div className="student">
      <p>I am a student</p>
      <p>Name:</p>
      <p>Dept:</p>
      </div>
  )
}

function Device(props){
  console.log(props);
return (
  <div style ={
    {
      border: '1px solid blue',
      borderRadius:'20px',
      padding:'20px'
    }
  }>
    <p>Name:{props.name}</p>
    <p>Brand:{props.brand}</p>
    <p>Price:{props.price}</p>
  </div>
)

}

export default App
