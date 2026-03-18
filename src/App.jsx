

import './App.css'
import Todo from './Todo'
import Family from './Family'
function App() {
  const families=[
    {name:"Abdul Matin",age:68,relation:"Abbu"},
    {name:"Rehena Begum",age:58,relation:"Ammu"},
    {name:"Yasin Ali Rubel",age:40,relation:"Vaiya"},
    {name:"Fatima Akter Mitu",age:44,relation:"Apu"},
  ];
  
  return (
    <>
    {
      families.map(family=><Family family={family}></Family>)
    }
    <Todo task="sleep" isDone={true}></Todo>
    <Todo task="shower" isDone={false}></Todo>
     <Person></Person>
     <Student></Student>
     <Device name="laptop" brand="Dell" price="40000"></Device>
     <Device name="mobile" brand="Redmi" price="15000"></Device>
     <Device name="TV" brand="Sony" price="60000"></Device>
     <Salami event="roja eid"amount="1000"></Salami>
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

function Salami({event,amount}){
  return (

    <div className="student">
      <p>Salami for:{event}</p>
      <p>Amount:{amount}</p>
      </div>
  )
}

export default App
