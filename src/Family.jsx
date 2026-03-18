
import Student from './App'
export default function Family({family}){
    console.log(family)
    return (
        <div className='student'>
            <h1>Name:{family.name}</h1>
            <h1>Age:{family.age}</h1>
            <p>Relation:{family.relation}</p>
        </div>
    )
}