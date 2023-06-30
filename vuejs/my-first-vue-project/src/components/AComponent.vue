<template>
    <h1>Mon component {{ name }}</h1>

    <h1 v-if="usera"> Mon component {{ usera.email}}</h1>
    <h1 v-else> no name set</h1>

</template>


<script setup>
import { defineProps } from 'vue';
defineProps(['name', 'usera'])

</script>


<style>

</style>