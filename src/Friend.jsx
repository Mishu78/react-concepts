export default function Friend({friend}){
    const {name,email,phone}=friend;
    return(
        <div>
            <h3>Name:{name}</h3>
            <h3>Email:{email}</h3>
            <h3>Name:{phone}</h3>
        </div>
    )
}