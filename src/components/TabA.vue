<script setup>
import { ref } from 'vue'

let name = ref('')
</script>

<template>
	<div>
		<h1>TabA content</h1>
		<h6>{{ name }}</h6>
		<input type="text" v-model="name">
	</div>
</template>

<style scoped>

</style>