import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:1,
        }
        console.log(this.props.name+"child Constructor Called")
    }

   async componentDidMount(){
        console.log(this.props.name+"child Did Mount Called")
        const response = await fetch('https://api.github.com/users');
        const data = response.json();
        console.log(data);
        
    }

    componentDidUpdate(){
        console.log("component Did update Called");
        {
            data.map((value)=>{
                return(
                      <h4>{value.login}</h4>
                )
            })
        }
    }

    componentWillUnmount(){
        console.log("component will unMount Called");
    }
    
    render(){
        const {name,location} = this.props;
        console.log(this.props.name+"child Render Called")
        return(
            <div className="userCard">
                <h2>Name : {name} </h2>
                <h4>Location : {location}</h4>
                <h4>Count : {this.state.count}</h4>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1,
                    })
                }}>Increment</button>
                <h4>Component : Function based </h4>
            </div>
        );
    }
}

export default UserClass;