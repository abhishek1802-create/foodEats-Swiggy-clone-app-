import React from "react";
import UserClass from "../User/UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent constructor')
  }

  componentDidMount(){
    console.log('parent componentDidMount')
  }

  render() {
    console.log('Parent Render')
    return (
      <div className="AboutPage">
        <h3>About Page</h3>
        <UserClass />
      </div>
    );
  }
}

export default About;
