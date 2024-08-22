<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'

let slotProps = 'Data'
</script>

<template>
	<DocumentationIcon /><br><br>

	<!-- named slot -->
	<slot name="practice"></slot>

	<!-- default slot -->
	<!-- this slot used in Slots.vue -->
	<!-- passing data to parent component v-bind -->
	<slot :slotProps="slotProps"></slot>

	<br>
	<img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
</template>


<style scoped>
	slot {
		padding-top: 20px;
		padding-bottom: 20px;
	}
</style>