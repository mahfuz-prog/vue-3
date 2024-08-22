<script setup>
import Layout from './Layout.vue'

</script>

<template>
    <Layout>
    	<!-- named slot -->
    	<!-- #practice template only replace the slot named practice -->
		<template #practice>
			<h1>Hola</h1>
		</template>

		<!-- default slots -->
		<!-- receive data from slot -->
		<template v-slot:default="props">
			<h1>{{ props.slotProps }}</h1>
		</template>
	</Layout>
</template>

<style scoped>

</style>