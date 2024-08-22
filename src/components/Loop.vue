<script setup>
import Layout from './Layout.vue'

let names = ['List item1', 'List item2', 'List item3']
</script>

<template>
    <Layout>
		<template #practice>
			<!-- vue for loop -->
			<!-- unique key is an ideal option helps dom tree comprison -->
			<template v-for="(name, index) in names" :key="name">	
				<h2 v-if="name !== 'List item2'">{{index}}-{{ name }}</h2>
			</template>
		</template>
	</Layout>
</template>

<style scoped>

</style>