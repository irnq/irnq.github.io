<template>
  <div class="project-card">
    <div class="project-card__content flex">
      <a :href="card.link" class="project-card__link" target="blank"
        ><img :src="card.screenshot" alt="Project screenshot" class="project-card__img" />
        <div class="overlay"><p class="overlay__button">Open</p></div>
      </a>
      <div class="project-card__main flex">
        <h3 class="project-card__title">{{ card.title }}</h3>
        <p class="project-card__description">{{ card.description }}</p>
        <div class="project-card__footer">
          <span class="text-secondary">Technology:</span> {{ card.technology }}
        </div>
      </div>
    </div>
    <div class="project-card__backface"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import IProjectCard from './interfaces/ProjectCard.model';

export default class ProjectCard extends Vue {
  @Prop({ default: null }) card!: IProjectCard;

  observer!: IntersectionObserver;

  created(): void {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.$el,
      threshold: 0.3,
    });
  }

  mounted(): void {
    this.observer.observe(this.$el);
  }

  private onElementObserved(entries: IntersectionObserverEntry[]) {
    console.log(this.$el);
    console.log(entries);
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.add('intersected');
        console.log(target);
      } else {
        target.classList.remove('intersected');
      }
    });
  }
}
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
  overflow: hidden;
  padding: 1rem;
  width: 85%;
  margin: 0 auto;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  &__content {
    justify-content: space-between;
    @media only screen and (max-width: 45em) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__img {
    height: 100%;
    order: 1;
    max-width: 50rem;
    width: 100%;
    object-position: center;
    object-fit: cover;
  }

  &__main {
    padding: 2rem 2rem 2rem 1rem;
    order: 2;
    flex-direction: column;
    max-width: 45%;
    @media only screen and (max-width: 45em) {
      max-width: 90%;
    }
  }

  &__title {
    color: $color-secondary;
    text-transform: uppercase;
    text-align: right;
    font-weight: 100;
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }

  &__footer {
    margin-top: auto;
  }

  &__link {
    position: relative;
    border-radius: calc($border-radius - 1rem);
    overflow: hidden;

    &:hover {
      .overlay {
        opacity: 1;
      }
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 5rem;
    background-color: $color-shadow;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;

    &__button {
      color: $color-primary;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: $bg-primary;
      padding: $border-radius;
      border-radius: $border-radius;
      box-shadow: 0 2rem 2rem 0 $color-shadow;
    }
  }

  &:nth-child(2n + 1) {
    .project-card {
      &__main {
        order: 1;
        @media only screen and (max-width: 45em) {
          order: 2;
        }
      }

      &__link {
        order: 2;
        @media only screen and (max-width: 45em) {
          order: 1;
        }
      }

      &__title {
        text-align: left;
      }
    }
  }

  &.intersected {
    animation: spin 1.5s ease-in-out normal forwards;
    perspective: 10rem;
  }

  @keyframes spin {
    0% {
      transform: perspective(300rem) rotateX(0deg);
    }
    20% {
      transform: perspective(300rem) rotateX(-24deg);
    }
    40% {
      transform: perspective(300rem) rotateX(18deg);
    }
    60% {
      transform: perspective(300rem) rotateX(-12deg);
    }
    80% {
      transform: perspective(300rem) rotateX(6deg);
    }
    100% {
      transform: perspective(300rem) rotateX(0deg);
    }
  }
}
</style>
