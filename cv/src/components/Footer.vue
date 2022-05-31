<template>
  <header class="footer">
    <div class="wrapper">
      <Contacts />
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
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
@import 'src/style/abstracts/variables';
@import 'src/style/abstracts/mixins';

.footer {
  background-color: $bg-primary;
  padding: 2rem 0;
}
</style>
