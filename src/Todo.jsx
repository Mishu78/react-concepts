export default function Todo({task,isDone}){

//     if(isDone===true){
//     return <li>task:{task}</li>
//     }
//     else{
//         return <li> Do task:{task}</li>
//     }
//            // <li className="student">Task:{task} done:{isDone ? "yes":'no'}</li>
        
// 
//return isDone && <li>Done task : {task}</li>
return isDone || <li>Do not done    task : {task}</li>
}
