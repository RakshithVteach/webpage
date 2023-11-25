<template>
    <div class="card">
      <img class="logo" :src="logoSrc" alt="Card Image">
      <div class="card-info">
        <h2>{{ title }}</h2>
        <p>{{ subTitle }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      logoSrc: String,
      title: String,
      subTitle: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
    width: 200px; 
    transition: transform .8s;
  }
  .card:hover{
    transform: scale(1.2);
    background-color: red;
    cursor: pointer;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  .card-info {
    padding: 16px;
    text-align: center;
  }
  
  h2 {
    margin: 0;
  }
  
  p {
    margin: 8px 0;
    color: #666;
  }
  .logo{
    width: 50px;
    height: 50px;
    margin-top: 8%;
  }
  </style>
  