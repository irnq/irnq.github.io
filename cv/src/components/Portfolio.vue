<template>
  <section class="portfolio">
    <div class="wrapper">
      <h2 class="portfolio__title">My recent project</h2>
      <ProjectCard :key="i" v-for="(project, i) of projects" :card="project" />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import ProjectCard from './ProjectCard.vue';
import PROJECTS from './constants/projects';

@Options({
  components: { ProjectCard },
})
export default class Portfolio extends Vue {
  projects = PROJECTS;
}
</script>

<style scoped lang="scss">
@import 'src/style/abstracts/variables';
@import 'src/style/abstracts/mixins';

.portfolio {
  padding: 4rem 2rem;

  &__title {
    color: $bg-primary;
    font-size: 5rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 1rem 1rem $color-shadow;
    margin-bottom: 4rem;
  }
}
</style>
