<script setup>
import Layout from './components/Layout.vue'
import Loop from './components/Loop.vue'
import Props from './components/Props.vue'
import Slots from './components/Slots.vue'
import Methods from './components/Methods.vue'
import Watchers from './components/Watchers.vue'
import TextBinding from './components/TextBinding.vue'
import HtmlBinding from './components/HtmlBinding.vue'
import Reusability from './components/Reusability.vue'
import StyleBinding from './components/StyleBinding.vue'
import FormHandling from './components/FormHandling.vue'
import EventHandling from './components/EventHandling.vue'
import LifecycleHooks from './components/LifecycleHooks.vue'
import ComponentEvents from './components/ComponentEvents.vue'
import AttributeBinding from './components/AttributeBinding.vue'
import ProvideAndInject from './components/ProvideAndInject.vue'
import DynamicComponents from './components/DynamicComponents.vue'
import ComputedProperties from './components/ComputedProperties.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
</script>

<template>
  <main>
    <Layout />
    
    <!-- text binding tutorial -->
    <!-- <TextBinding/> -->

    <!-- html binding -->
    <!-- <HtmlBinding/> -->

    <!-- Attribute binding such as style, id, class, boolean -->
    <!-- <AttributeBinding/> -->

    <!-- style binding. inline style-->
    <!-- <StyleBinding/> -->

    <!-- conditonal rendering -->
    <!-- <ConditionalRendering/> -->

    <!-- Loop rendering -->
    <!-- <Loop/> -->

    <!-- methods -->
    <!-- <Methods/> -->

    <!-- event handling -->
    <!-- <EventHandling/> -->

    <!-- form handling v-model -->
    <!-- documentation https://vuejs.org/guide/essentials/forms -->
    <!-- <FormHandling/> -->

    <!-- Computed Properties -->
    <!-- it use cached value -->
    <!-- <ComputedProperties/> -->

    <!-- watcher -->
    <!-- <Watchers/> -->

    <!-- component props, attribute -->
    <!-- dynamic proparty can be send using v-bind -->
    <!-- v-bind required for send integer value. static only send string -->
    <!-- <Props name="Property" :val="3000" :status="true"/> -->

    <!-- provide and inject -->
    <!-- communicate parent to multi level child component -->
    <!-- <ProvideAndInject /> -->

    <!-- Component Events -->
    <!-- communicate with child component to parent using event -->
    <!-- <ComponentEvents/> -->

    <!-- slots -->
    <!-- allow control child component content from parent -->
    <!-- <Slots /> -->

    <!-- Dynamic Components -->
    <!-- <DynamicComponents /> -->

    <!-- lifecycle Hooks -->
    <!-- <LifecycleHooks /> -->

    <!-- Reusability with Composition API -->
    <!-- <Reusability /> -->

  </main>
</template>

<style scoped>
  main {
    text-align: center;
  }
</style>