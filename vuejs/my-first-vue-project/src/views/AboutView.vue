<template>
    <h1>About Page</h1>


    <a-component :name="toto"/>
    <a-component name="lolo" :usera="user"/>

</template>


<script setup>
import AComponent from './../components/AComponent.vue'

let toto = "tata"


let user = {
    name: "lolo",
    email: "lolo@gmail.com"
}

</script>