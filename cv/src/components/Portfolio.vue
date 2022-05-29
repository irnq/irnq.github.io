<template>
  <section class="portfolio">
    <div class="wrapper">
      <h2 class="portfolio__title">My recent project</h2>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Portfolio extends Vue {}
</script>

<style scoped lang="scss">
@import 'src/style/abstracts/variables';
@import 'src/style/abstracts/mixins';

.portfolio {
  height: 55rem;
  padding: 4rem 2rem;

  &__title {
    color: $bg-primary;
    font-size: 5rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 1rem 1rem $color-shadow;
  }
}
</style>
