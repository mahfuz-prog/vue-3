<script setup>
import { shallowRef } from 'vue'

import TabA from './TabA.vue'
import TabB from './TabB.vue'
import TabC from './TabC.vue'
import Layout from './Layout.vue'

// ref gives an error in console
let activeTab = shallowRef('TabA')
</script>

<template>
    <Layout>
		<template #practice>
			<button @click="activeTab = TabA">TabA</button>
			<button @click="activeTab = TabB">TabB</button>
			<button @click="activeTab = TabC">TabC</button>

			<!-- this tag help to cache the component without creating a new instance-->
			<!-- multi step form is an example -->
			<keep-alive>
				<component :is="activeTab">
					<TabA/>
				</component>
			</keep-alive> 
		</template>
	</Layout>
</template>

<style scoped>

</style>