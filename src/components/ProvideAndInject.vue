<!-- level of app component -->
<!-- LevelThree.vue included in Leveltwo.vue and Leveltwo.vue included here -->
<!-- provide here to LevelThree.vue -->
<!-- 
	App Component
A   	  B			C
		  D 		E
		  			F
 -->
<script setup>
import Leveltwo from './Leveltwo.vue'
import { provide, ref } from 'vue'

provide(/* key */ 'message', /* value */ 'hello!')

const location1 = ref('North Pole')
const location2 = ref('South Pole')
provide('location', {location1, location2})
</script>

<template>
    <Leveltwo />
</template>

<style scoped>

</style>