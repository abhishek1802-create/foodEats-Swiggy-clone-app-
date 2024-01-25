
import React, { Component } from 'react'
 class UserClass extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : 'dummy',
                location : 'dummy location'
            },
        }
        console.log('child constructor')
    }

    async componentDidMount(){
        console.log('child componentDidMount');
        const data = await fetch('https://api.github.com/users/akshaymarch7');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json,
        })
        console.log(this.state.userInfo);
        this.timer = setInterval(()=>{
            console.log('Timer Called');
        },1000);
    }

    componentDidUpdate(){
        console.log('component did update called');
    }

    componentWillUnmount(){
        console.log('component will unmount called');
        clearInterval(this.timer);
    }

  render() {
    const {name,location,avatar_url} = this.state.userInfo;
    console.log('child Render');
    return (
        <div className='user_card'>
          <img src={avatar_url} alt='image'/>
          <h3>Name : {name}</h3>
          <h3>Location : {location}</h3>
        </div>
      )
  }
}

export default UserClass