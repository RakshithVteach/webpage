<template>
    <div class="card">
      <img :src="imageSrc" alt="Card Image">
      <div class="card-info">
        <h2>{{ name }}</h2>
        <p>{{ designation }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: String,
      name: String,
      designation: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    width: 200px; 
    transition: transform .8s;
  }
  .card:hover{
    transform: scale(1.2);
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
  </style>
  