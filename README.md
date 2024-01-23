
const heading = document.createElement("h1");
heading.innerHTML = "Welcome To The Journey";
heading.style.color = "green";
const root = document.getElementById("root");
root.appendChild(heading);

*************************************************************

const heading = React.createElement("h1",{},"Hello Jii From React");
       
//root.render(heading); 

const statusCode = React.createElement("div",{id : "Parent"} ,
React.createElement("div" , {id : 'Child'},
React.createElement("h1",{id : "heading"},"This is Heading Tag"))) ;

//root.render(statusCode);

const parent = React.createElement("div",{id:'parent'},
[React.createElement("div",{id : 'child1'},
React.createElement("h1",{id : 'heading1'},"I am Heading 1"))
,
React.createElement("div",{id : 'child2'},
React.createElement("h1",{id : 'heading2'},"I am Heading 2"))]
)

**************************************************************

 <!-- const HeadingComponent = ()=>{
   return( <>
          <Title/>
          {elem}
          <h1 id="heading" style={{color:"green"}}>This is jsx Heading Component🚀</h1>
    </>
   )
}  -->

<!-- const elem = 1000;

const Title = ()=>{
    return (
        <h2>This is Title Component</h2>
    )
} -->

***************************************************************

/* <div className="resDishes">
           {
            itemCards.map((item)=> 
            {return (
              <div className="data">
              <div className="dishes">
               <div className="leftCon">
                 <h2>{item.card.info.name}</h2>
                 <h5>${item.card.info.price/100}</h5>
                 <h5>{item.card.info.description}</h5>
               </div>
               <div className="rightCon">
                   <img id='foodImage' src={foodImg + item.card.info.imageId} alt="foodImage" />
               </div>
              </div> 
              <div className="line"></div>
              </div>
             )}
              )
           }
          
      </div> */

*****************************************************************

class About extends React.Component{
   constructor(props){
    super(props);
    console.log("parent constructor Called");
   }
   componentDidMount(){
    console.log("parent Component Did Mount Called");
   }

   render(){
    console.log("parent Render Called")
    return(
        <div className="about">
            <h1>This is About Page</h1>
            {/* <User name={"Daniel"} location={"Iceland"}/> */}
            <UserClass name={"First"} location={"Greece"}/>
            {/* <UserClass name={"Second"} location={"Greece"}/> */}
        </div>
    )
   }
}

export default About;