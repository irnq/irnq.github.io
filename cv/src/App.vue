<template>
  <Header />
  <Skills />
  <Portfolio />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header.vue';
import Skills from './components/Skills.vue';
import Portfolio from './components/Portfolio.vue';

@Options({
  components: {
    Header,
    Skills,
    Portfolio,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './style/base/normalize';
@import './style/abstracts/variables';
@import './style/base/base';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100%;
  background-color: $bg-secondary;
}

.wrapper {
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
}

.flex {
  display: flex;
}
</style>
