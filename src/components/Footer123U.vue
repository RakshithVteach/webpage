<template>
    <div id="app">
      
      <div class="content">
       
      </div>
  
     
      <footer class="footer-style">
        <div class="foot-left">
            <img class="logo" src="../assets/UNUCO_LOGO.png"/>
          <p>
            &copy; 2023 onuco.com All rights reserved.
          </p>
        </div>
        <div class="foot-right">
            <p>
                Communities | Courses | Trainers | FAQs | Blog | Privacy | Terms of Service
            </p>
            <p>
                Email: name@example.com Call: 9845098450
            </p>
            <p>
                Connect with Us:
            </p>

        </div>
        
     
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooteR',
  };
  </script>
  
  <style scoped>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 85.5vh;
  }
  
  .content {
    flex: 1;  
  }
  
  .footer-style {
    background-color: #333;
    color: white;
    /* text-align: end; */
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }

  .foot-left{
    margin-top: auto;
    text-align: start;
  }

  .foot-right{
    text-align: end;
  }

  </style>
  