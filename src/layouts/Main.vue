<template>
    <div id="main"> 
      <br>
        <h3> Layout <b> MAIN</b></h3>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
    </div>
    <router-view></router-view>
    </div>
</template>

