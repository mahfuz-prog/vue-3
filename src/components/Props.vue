<script setup>
import Layout from './Layout.vue'

// the name is coming from parent template which is app
const props = defineProps({

	// if required is true and no attribute passes from parend temp
	// it will give an error on console
	// if no value passes default value will apply
	name: {
		type: String,
		required: true,
		default: "hola"
	},

	val: Number,
	status: Boolean,
})
</script>

<template>
    <Layout>
		<template #practice>
			<h1>{{ props.name }} - {{ props.val }}</h1>
			<h1>{{ props.status }}</h1>
		</template>
	</Layout>
</template>

<style scoped>

</style>