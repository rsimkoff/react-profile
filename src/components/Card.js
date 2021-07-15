import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
import '../styles/Header.css';

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
   <body>
    <div>
    <div id="about" className="container mt-3 mb-5"/>
     <div className="post-heading text-center" >
       <h3 className="display-4 font-weight-bold" >About Me</h3>
       <hr className="w-50 mx-auto pb-5"/>
     </div>
     <div className="row">
       <div className="col-lg-6 col-md-6 col-12">  
         <img src="./images/profilefinal.jpg" className="img-fluid" alt=""/>
       </div>
        </div>
     <div className="col-lg-6 col-md-6 col-12"/>
       <h2>Background Description</h2>
       <hr></hr>
       <p className="display-3">I’m currently working as a Staff Accountant for Fifth Group Restaurants, based in Atlanta. 
            I graduated from Georgia State University in 2019 with an undergraduate degree in Finance. 
            I have enjoyed my career in Finance thus far, but I have always had an additional interest in computer science and Tech. 
            I had some exposure to Computer Science in college when I took introductory programming courses in Java and JavaScript. 
            I am currently enrolled in Georgia Tech’s Coding and Web Development bootcamp. 
            As a candidate I offer a full stack of technologies including experience with multiple programming languages, frameworks, supporting technology packages and background Algorithmic knowledge needed for best programming practices.
        </p>

         </div>
         </body>

);
}

  
export default Card;