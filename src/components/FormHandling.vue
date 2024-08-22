<script setup>
import Layout from './Layout.vue'
import { ref } from 'vue'

let formValues = ref({
	name: '',
	text: '',
	country: '',
	location: [], 
	checkbox: false
	
})

let submitForm = ref((event) => {
	// stop refreshing when clicked submit button
	// if we use @submit.prevent="submitForm" in element we don't need event.preventDefault()
	event.preventDefault()
	console.log(formValues)
})
</script>

<template>
    <Layout>
		<template #practice>
			<div>
				{{JSON.stringify(formValues, null, 2)}}
			</div>

			<!-- event binding submit event -->
			<!-- insted of event.preventDefault() we can use @submit.prevent="submitForm" -->
			<form @submit="submitForm">
				<!-- text input -->
				<!-- modifiers can be chained v-model.trim.lazy-->
				<div>
					<label for="name">Name</label>
					<input type="text" id="name" v-model.trim.lazy="formValues.name" />
				</div>

				<!-- textarea input -->
				<div>
					<label for="textarea">Text area</label>
					<!-- <textarea @keyup.enter="submitForm" id="textarea" v-model="formValues.text"/> -->

					<!-- keyboard event modifiers -->
					<input @keyup.enter="submitForm" id="textarea" v-model="formValues.text"/>
				</div>

				<!-- single select dropdown -->
				<div>
					<label for="country">Country</label>
					<select id="country" v-model="formValues.country">
						<option value="">Select a country</option>
						<option value="bangladesh">Bangladesh</option>
						<option value="usa">USA</option>
						<option value="india">India</option>
					</select>
				</div>

				<!-- multiple select -->
				<div>
					<label for="location">ctrl + click to select multiple</label>
					<select id="location" multiple v-model="formValues.location">
						<option value="dhaka">Dhaka</option>
						<option value="rangpur">Rangpur</option>
						<option value="dinajpur">Dinajpur</option>
					</select>				
				</div>

				<!-- single checkbox -->
				<div>
					<label for="checkbox">Checkbox</label>
					<input type="checkbox" id="checkbox" v-model="formValues.checkbox"/>
				</div>

				<div><button>Submit</button></div>
			</form>
		</template>
	</Layout>
</template>

<style scoped>
	label {
		display: block;
		text-align: left;
	}

	select {
		width: 170px;
	}
</style>

<!-- capture user input
inputs
textareas
dropdown
multi select control
checkbox
checkbox group
radio -->