<template>
<div id="app">
    <!--- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> --->
    <nav-bar />
    <router-view />
</div>
</template>

<script>
import Navbar from '@/components/navbar';
export default {
    name: 'Root',
    components:{
      'nav-bar':Navbar
    } 
}
</script>
 