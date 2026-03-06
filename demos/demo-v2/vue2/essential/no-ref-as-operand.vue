
<!-- eslint-disable no-unused-expressions -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable import/no-unresolved -->

<script>
  import { ref } from "vue";

  export default {
    name: "demo",
    setup(_props, { emit }) {
      let count = ref(0);
      const ok = ref(true);

      /* ✓ GOOD */
      count.value++;
      count.value + 1;
      1 + count.value;
      const msg1 = ok.value ? "yes" : "no";
      emit("increment", count.value);

      /* ✗ BAD */
      count++;
      count + 1;
      1 + count;
      const msg2 = ok ? "yes" : "no";
      emit("increment", count);

      return {
        count,
      };
    },
  };
</script>
