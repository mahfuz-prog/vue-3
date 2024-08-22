<script setup>
import Layout from './Layout.vue'

// composables folder under src contain js file for reusability
import useCounter from '../composables/useCounter'
const { count, incrementCount } = useCounter()
</script>

<template>
    <Layout>
		<template #practice>
		  <button @click="incrementCount">Total count - {{ count }}</button><br/>
		</template>
	</Layout>
</template>

<style scoped>

</style>