
<!-- eslint-disable no-undef -->
<!-- eslint-disable import/no-unresolved -->
<!-- eslint-disable vue/require-expose -->

<script>
  import { set, del } from "vue";
  export default {
    name: "demo",
    mounted() {
      /* ✗ BAD */
      this.$set(obj, key, value);
      this.$delete(obj, key);

      Vue.set(obj, key, value);
      Vue.delete(obj, key);

      set(obj, key, value);
      del(obj, key);
    },
  };
</script>
