
const User = (props)=>{
    return(
        <div className="userCard">
            <h2>Name : {props.name} </h2>
            <h4>Location : {props.location}</h4>
            <h4>Component : Function based </h4>
        </div>
    )

}

export default User