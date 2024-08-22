<script setup>
import Layout from './Layout.vue'

let highlightColor = 'red'
let styleObject1 = {
	color: 'yellow',
	'font-size': '32px',
	'font-weight': 700
}

let styleObject2 = {
	'text-decoration': 'underline'
}
</script>

<template>
    <Layout>
		<template #practice>
			<h1 :style="{color: highlightColor, 'font-size': '50px'}">Inline style</h1>

			<!-- object style apporach -->
			<h2 :style="styleObject1">Style object</h2>

			<!-- array of style object approach -->
			<h2 :style="[styleObject1, styleObject2]">Array of style object</h2>
		</template>
	</Layout>
</template>

<style scoped>
	.red {
		color: red;
	}
</style>