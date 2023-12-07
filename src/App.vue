<script setup lang="ts">
import { ref } from 'vue';
import FirstComp from './components/FirstComp.vue';
import About from './components/About.vue';
import Binding from './components/Binding.vue';
const modelValue = ref('Hello')
</script>

<template>
  <div>
    <div class="links">
      <router-link to="/">
        <FirstComp #header>FirstComp  Header  Slot</FirstComp>
      </router-link> |
      <router-link to="/about">
        <About #footer>About Footer Slot</About>
      </router-link>
    </div>
    <div>
      <Binding v-model="modelValue"/> 
      <p>{{modelValue.toUpperCase()}}  Two Way Binding </p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>
