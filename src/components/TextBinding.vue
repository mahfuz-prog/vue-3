<script setup>
import Layout from './Layout.vue'
import { ref } from 'vue'

const obj = ref({
	FirstName: "Text",
	LastName: "Binding"
})

// let FullName = ref(`${obj._value.FirstName} ${obj._value.LastName}`)
let FullName = "Text Binding v-text"
</script>

<template>
    <Layout>
		<template #practice>
    		<!-- mustache syntax -->
			<h1>{{ obj.FirstName }} {{ obj.LastName }}</h1>

			<!-- text binding using v-text -->
			<h2 v-text="FullName"></h2>
		</template>
	</Layout>
</template>

<style scoped>
 h1{
 	color: #fff;
 }
</style>