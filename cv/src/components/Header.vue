<template>
  <header class="header">
    <div class="wrapper flex">
      <img class="header__portrait" src="../assets/img/portrait-200x200.jpg" alt="portrait" />
      <div class="header__content flex">
        <Contacts />
        <div class="header__title-block flex">
          <h1 class="header__title">Ilia Rybakov</h1>
          <h2 class="header__title--subtitle">Front-end developer</h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Contacts from './Contacts.vue';

@Options({
  components: {
    Contacts,
  },
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
@import 'src/style/abstracts/variables';
@import 'src/style/abstracts/mixins';

.header {
  height: 28rem;
  background-color: $bg-primary;
  padding: 0 2rem;
  color: $color-primary;

  &__portrait {
    border-radius: 100%;
    width: 21rem;
    height: 21rem;
    border: 0.5rem solid $color-primary;
  }

  &__content {
    flex-direction: column;
    justify-content: space-between;
    height: 21rem;
    width: 100%;
  }

  &__title {
    font-family: 'Noto Serif', serif;
    font-style: italic;
    position: relative;
    font-size: 5.5rem;
    font-weight: 700;
    margin: 0;

    &-block {
      align-items: baseline;
      column-gap: 4rem;
    }

    &--subtitle {
      @include gradient-text($color-primary, $color-secondary);
      font-size: 4rem;
    }

    &::after {
      position: absolute;
      right: 0rem;
      top: 50%;
      display: block;
      width: 0.5rem;
      height: 9rem;
      content: '';
      transform: rotateZ($rotate-primary) translateY(-50%);
      background: $color-primary;
      border-radius: 3px 0 3px 0;
    }
  }

  .wrapper {
    padding-top: 3rem;
    gap: 5rem;
    align-items: center;
  }
}
</style>
