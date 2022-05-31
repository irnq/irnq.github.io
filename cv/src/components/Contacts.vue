<template>
  <ul class="contacts flex">
    <li class="contacts__item">
      <a class="contacts__link flex" href="mailto:irnq.dev@hotmail.com">
        <svg class="contacts__icon">
          <use xlink:href="icons/icons.svg#email"></use>
        </svg>
        irnq.dev@hotmail.com
      </a>
    </li>
    <li class="contacts__item">
      <a class="contacts__link flex" href="https://t.me/ironiqpie">
        <svg class="contacts__icon">
          <use xlink:href="icons/icons.svg#telegram"></use></svg
        >@ironiqpie</a
      >
    </li>
    <li class="contacts__item">
      <a class="contacts__link flex" href="https://github.com/irnq">
        <svg class="contacts__icon">
          <use xlink:href="icons/icons.svg#github"></use>
        </svg>
        irnq
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Contacts extends Vue {}
</script>

<style scoped lang="scss">
@import 'src/style/abstracts/variables';
@import 'src/style/abstracts/mixins';

.contacts {
  list-style: none;
  gap: 2.5rem;
  justify-content: center;
  padding: 0.5rem;

  @media only screen and (max-width: 30em) {
    flex-direction: column;
  }

  &__icon {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    fill: $color-primary;
    transition: fill 0.3s;
  }

  &__link {
    color: $color-primary;
    font-size: 2.5rem;
    text-decoration: none;
    align-items: center;
    gap: 0.8rem;
    transition: color 0.3s;
    font-weight: 100;

    &:hover {
      color: $color-accent;

      .contacts__icon {
        fill: $color-accent;
      }
    }
  }
}
</style>
