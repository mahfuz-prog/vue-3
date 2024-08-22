<script setup>
import Layout from './Layout.vue'

let BindHtml = '<i>Binding Html Tag v-html</i>'
</script>

<template>
    <Layout>
		<template #practice>
			<!-- only trusted element should render -->
			<div v-html="BindHtml"></div>
		</template>
	</Layout>
</template>

<style scoped>

</style>