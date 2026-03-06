
<!-- eslint-disable import/no-unresolved -->
<!-- eslint-disable no-undef -->

<script>
  import { nextTick as nt } from "vue";

  export default {
    name: "demo",
    async mounted() {
      /* ✗ BAD: no callback function or awaited Promise */
      nt();
      Vue.nextTick();
      this.$nextTick();

      /* ✗ BAD: too many parameters */
      nt(callback, anotherCallback);
      Vue.nextTick(callback, anotherCallback);
      this.$nextTick(callback, anotherCallback);

      /* ✗ BAD: no function call */
      nt.then(callback);
      Vue.nextTick.then(callback);
      this.$nextTick.then(callback);
      await nt;
      await Vue.nextTick;
      await this.$nextTick;

      /* ✗ BAD: both callback function and awaited Promise */
      nt(callback).then(anotherCallback);
      Vue.nextTick(callback).then(anotherCallback);
      this.$nextTick(callback).then(anotherCallback);
      await nt(callback);
      await Vue.nextTick(callback);
      await this.$nextTick(callback);

      /* ✓ GOOD */
      await nt();
      await Vue.nextTick();
      await this.$nextTick();

      /* ✓ GOOD */
      nt().then(callback);
      Vue.nextTick().then(callback);
      this.$nextTick().then(callback);

      /* ✓ GOOD */
      nt(callback);
      Vue.nextTick(callback);
      this.$nextTick(callback);
    },
  };
</script>
