<!-- those values provided from ProvideAndInject.vue file which is parent-->
<!-- LevelThree.vue included in Laveltwo.vue -->
<script setup>
import { inject } from 'vue'

const message = inject('message')
const { location1, location2 } = inject('location')
</script>

<template>
    <h1>{{message}}</h1>
    <h2>{{ location1 }}, {{ location2 }}</h2>
</template>

<style scoped>

</style>