<template>
  <section class="skills">
    <ul class="flex skills__list">
      <li class="skills__item" :key="skill.name" v-for="skill of skills">
        <img class="skills__icon" :src="skill.icon" :alt="skill.name" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

type SkillType = { name: string; icon: string };

const SKILLS: SkillType[] = [
  { name: 'html', icon: './icons/html5.svg' },
  { name: 'css', icon: './icons/css3.svg' },
  { name: 'js', icon: './icons/js.svg' },
  { name: 'angular', icon: './icons/angular.svg' },
  { name: 'vue', icon: './icons/vue.svg' },
];

export default class Skills extends Vue {
  skills: SkillType[] = [...SKILLS, ...SKILLS.concat(SKILLS)];
}
</script>

<style scoped lang="scss">
@import 'src/style/abstracts/variables';
@import 'src/style/abstracts/mixins';

.skills {
  padding: 2rem 0 4rem;
  background-color: $bg-primary;
  overflow: hidden;
  box-shadow: 0 2rem 2rem 0 $color-shadow;
  border-radius: 0 0 $border-radius $border-radius;

  &__list {
    list-style: none;
    animation: slideToLeft 30s linear 0s infinite normal forwards;
  }

  &__icon {
    width: 10rem;
  }

  .flex {
    gap: 25rem;
    align-items: center;
    width: 100%;
  }

  @keyframes slideToLeft {
    0% {
      transform: translateX(-2px);
    }

    100% {
      transform: translateX(calc(-1 * (25rem + 10rem) * 5));
    }
  }
}
</style>
