<!-- 
https://vuejs.org/api/composition-api-lifecycle.html
 -->
<script setup>
import Layout from './Layout.vue'
import { ref, onMounted } from 'vue'

let inputRef = ref()

// on page load
onMounted(() => {
	// focus the input element
	inputRef.value.focus()
	getFatch()
})

const getFatch = async () => {
	let promise = await fetch('https://jsonplaceholder.typicode.com/posts', [])
	let loadJson = await promise.json()
	console.log(loadJson[0])
}
</script>

<template>
    <Layout>
		<template #practice>
			<input type="text" ref="inputRef"><br/>
		</template>
	</Layout>
</template>

<style scoped>

</style>