<template>
  <div class="project-card">card</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class ProjectCard extends Vue {}
</script>

<style scoped lang="scss">
@import 'src/style/abstracts/variables';
@import 'src/style/abstracts/mixins';

.project-card {
  background-color: $bg-primary;
  border-radius: $border-radius;
  color: $color-primary;
  font-size: 1.8rem;
  box-shadow: 0 2rem 2rem 0 $color-shadow;
}
</style>
