<script setup>
import Layout from './Layout.vue'

let BindId = 'heading'
let isDisabled = false
</script>

<template>
    <Layout>
		<template #practice>
			<!-- bind id -->
			<h1 :id="BindId">Id added using v-bind:id</h1>

			<!-- bind boolean -->
			<!-- <button v-bind:disabled="isDisabled">Disabled button</button><br> -->

			<!-- apply class based on conditional -->
			<!-- if condition true apply red class else yellow class -->
			<button :class="isDisabled ? 'red' : 'yellow'">Disabled button</button>

			<!-- add array of class -->
			<h2 :class="['italic', 'underline']">Array of class</h2>
		</template>
	</Layout>
</template>

<style scoped>
	#heading {
		color: #FFFFFF;
	}

	.red {
		background-color: red;
	}

	.yellow {
		background-color: yellow;
	}

	.italic {
		text-decoration: italic;
	}

	.underline {
		text-decoration: underline;
	}
</style>