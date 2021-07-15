import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

import '../styles/Header.css';
// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <body data-spy="scroll" data-target="#navbarResponsive">
  
    <div id="home">
     {/* <!-- navigation start -->   */}
     
     <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" >
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#mywork">My Work</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact Me</a>
          </li>
         
        </ul>
       
      </div>
    </nav>
     {/* <!-- navigation end -->
     <!-- background start --> */}
     <div class="background">
       <img src="./images/newyork.png" class="img-fluid" alt="background image"/>
     </div>
     <div class="heading-content text-center">
        <h1>Ryan Simkoff</h1>
        <p>Development Portfolio</p>
     </div>
    

{/* 
     <!-- background end --> */}

   </div>

   {/* <!-- About start --> */}
   <div id="about" class="container mt-3 mb-5">
     <div class="post-heading text-center" >
       <h3 class="display-4 font-weight-bold" >About Me</h3>
       <hr class="w-50 mx-auto pb-5"/>
     </div>
     <div class="row">
       <div class="col-lg-6 col-md-6 col-12">  
         <img src="./images/IMG_1817.jpg" class="img-fluid" alt="profile pic"/>
       </div>

     <div class="col-lg-6 col-md-6 col-12">
       <h2>Background Description</h2>
       <hr/>
       <p className="display-3">I’m currently working as a Staff Accountant for Fifth Group Restaurants, based in Atlanta. 
            I graduated from Georgia State University in 2019 with an undergraduate degree in Finance. 
            I have enjoyed my career in Finance thus far, but I have always had an additional interest in computer science and Tech. 
            I had some exposure to Computer Science in college when I took introductory programming courses in Java and JavaScript. 
            I am currently enrolled in Georgia Tech’s Coding and Web Development bootcamp. 
            As a candidate I offer a full stack of technologies including experience with multiple programming languages, frameworks, supporting technology packages and background Algorithmic knowledge needed for best programming practices.
        </p>

     </div>

{/* 
   <!-- About end -->
     <!-- my work start --> */}
     <div id="mywork" class="container mt-3 mb-5">
      <div class="post-heading text-center" >
        <h3 class="display-4 font-weight-bold" >Completed Projects</h3>
        <hr class="w-50 mx-auto pb-5"/>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <img src="images/my work.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">HTML Website Building</h5>
              <p class="card-text">Building and debugging website organizing</p>
              <a href="https://rsimkoff.github.io/professional-portfolio-website/" class="btn btn-dark">Preview</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <img src="images/calender1.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">E-Commerce Back-End App</h5>
              <p class="card-text">Back-End Application seeding data for an E=Commerce site.</p>
              <a href="https://github.com/rsimkoff/e-commerce-back-end" class="btn btn-dark">Preview</a>
            </div>
          </div>
        </div>
      </div>
        {/* <!-----> */}
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <img src="public/images/password.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Password Generator App</h5>
                <p class="card-text">Generating random passwords using JS</p>
                <a href="https://rsimkoff.github.io/Password_Generator_Final/" class="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <img src="images/weatherapp.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Weather App</h5>
                <p class="card-text">Using JS and a weather api we can get the weather of any city</p>
                <a href="https://rsimkoff.github.io/weather-dashboard/" class="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <img src="images/OddJobsscreenshot.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Odd Jobs App</h5>
                <p class="card-text">As a construction or renovation type company you can make bids on potential client based projects. The folowing was used APIs JS HTML CSS Jquery Bootstrap Database </p>
                <a href="https://markhamtrenton.github.io/Group-Project-1/" class="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <img src="images/quizzapp2.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Coding Quiz App</h5>
                <p class="card-text">Creating a Coding Quiz App with timer</p>
                <a href="https://rsimkoff.github.io/Code-Quiz-JavaScriptFundementals/" class="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <img src="images\Project2Forum.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Project 2 "Forum App"</h5>
                <p class="card-text">We missed forums of the early-to-mid ‘00s
                  We thought it would be entertaining to reverse engineer the forum concept
                  We wanted to have an aesthetic that evoked that era - so no Bootstrap! Using Spectre, you can actively look at different threads, create different threads as well as comment on any particular thread.
                  Spectre also gives you the ability to create an account with the login/logout feature. 
                   </p>
                <a href="https://github.com/BrenniusXIV/forum007" class="btn btn-dark">Preview</a>
                <a href="https://forum-007.herokuapp.com/" class="btn btn-dark">Heroku Deploy</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <img src="images/EmployeeManagementSystem.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">MySQL: Employee Tracker</h5>
                <p class="card-text">Creating a solution for managing a company's employees using node, inquirer, and MySQL.</p>
                <a href="https://github.com/rsimkoff/employee-tracker" class="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <img src="images/TeamProfileGenerator.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Object-Oriented Programming: Team Profile Generator</h5>
                <p class="card-text">The Team Profile Generator where a command line is used to write in certain details to build our team that is then generated into an html webpage that displays summaries for each person. </p>
                <a href="https://github.com/rsimkoff/team-profile-generator" class="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <img src="images/readmegeneratorscreenshot.jpg" class="card-img-top" alt=""/>
              <div class="card-body">
                <h5 class="card-title">ReadMe Generator</h5>
                <p class="card-text">Creating a ReadMe Generator (Node JS)</p>
                <a href="https://github.com/rsimkoff/readme.md-generator" class="btn btn-dark">Preview</a>
              </div>
            </div>
          </div>
        </div>



{/* 
        <!------>
         */}
         
        </div>


      </div>

    </div>
      {/* <!---->
      
      <!---->
 
    <!-- my work end --> */}

     {/* <!-- contact start --> */}
     <div id="contact" class="container mt-5 mb-5">
      <div class="post-heading text-center" >
        <h3 class="display-4 font-weight-bold" >Contact</h3>
        <hr class="w-50 mx-auto pb-5"/>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <h2>Email: rsimkoff@gmail.com</h2>
        <hr/>
        
 
      </div>

    </div>
    
 
    {/* <!-- contact end -->
    <!-- footer beg --> */}
    <footer>
        
      <p>
          Developed by Ryan Simkoff
      </p>
  </footer>
 {/* <!-- footer end --> */}









  </body>
  );
}

export default Navbar;