<script setup>
import Layout from './Layout.vue'

function add(a,b,c) {
	return a+b+c
}

function mul(a,b, c) {
	return a*b*c
}
</script>

<template>
    <Layout>
		<template #practice>
			<h1>Sum: {{ add(2,4,5) }}</h1>
			<h1>Multiplication: {{ mul(2,4,5) }}</h1>
		</template>
	</Layout>
</template>

<style scoped>

</style>