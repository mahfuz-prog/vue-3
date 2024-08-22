<script setup>

</script>

<template>
	<div>
	    <h1>This is a Popup</h1>
	    <button @click="$emit('close', 'Data coming from child component')">Close Popup</button>
    </div>
</template>

<style scoped>

</style>