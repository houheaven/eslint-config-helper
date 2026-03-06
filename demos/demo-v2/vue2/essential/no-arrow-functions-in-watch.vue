
<script>
  export default {
    name: "demo",
    data() {
      return {
        str: "hello",
        nums: 6,
        obj: {
          key: "val",
        },
      };
    },
    watch: {
      str() {
        console.log(6666);
      },
      nums: val => {
        console.log(val);
      },
      obj: {
        handler() {},
        deep: true,
      },
    },
    init() {

    },
  };
</script>
