<template>
  <section class="certificates">
    <div class="wrapper">
      <h2 class="certificates__title">My certificates</h2>
      <div class="certificates__block flex">
        <a
          :href="certificate.link"
          class="certificates__item"
          v-for="certificate of certificates"
          :key="certificate.name"
          target="blank"
        >
          <img class="certificates__img" :src="certificate.img" alt="certificate" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

type Certificate = {
  name: string;
  img: string;
  link: string;
};

const CERTIFICATES: Certificate[] = [
  {
    name: 'Frontend',
    img: './img/5x6uucs2.jpg',
    link: 'https://app.rs.school/certificate/5x6uucs2',
  },
  {
    name: 'Angular',
    img: './img/4dtw884n.jpg',
    link: 'https://app.rs.school/certificate/4dtw884n',
  },
];

export default class Certificates extends Vue {
  certificates = CERTIFICATES;
}
</script>

<style scoped lang="scss">
@import 'src/style/abstracts/variables';
@import 'src/style/abstracts/mixins';

.certificates {
  padding: 4rem 2rem;
  background-color: $bg-primary;

  &__title {
    color: $color-primary;
    font-size: 5rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 4rem;
  }

  &__block {
    justify-content: space-evenly;

    @media only screen and (max-width: 55em) {
      flex-direction: column;
      gap: 2.5rem;
      align-items: center;
    }
  }

  &__img {
    max-width: 45rem;
    width: 100%;
  }
  &__item {
    transform: scale(0.96);
    transition: transform 0.3s ease-out;

    &:hover {
      transform: scale(1);
      animation: outlineOut 0.6s ease-out 0s 1 normal forwards;
    }
  }

  @keyframes outlineOut {
    0% {
      outline: solid 0.3rem $color-accent;
    }

    100% {
      outline: solid 1.2rem transparent;
      outline-offset: 2.5rem;
    }
  }
}
</style>
