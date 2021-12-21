<template>
<div class="container"> 
  <div class="input">
    <input type="text" placeholder="text" />
    </div>
  <div class="button">
    <button>Click Me</button>
  </div>
  </div>
</template>


<style>
.container {  
width: 300px;  
height: 300px;    
display: grid;  
}  

.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 10px;
}

.button {
  background-color: #FA8072;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;  
  margin: auto;  
  padding: 10px;
  border-radius: 12px;
}

.button:hover {
  background-color: #FFA07A;

}
</style>
