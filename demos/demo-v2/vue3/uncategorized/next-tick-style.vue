
<!-- eslint-disable vue/no-unused-properties -->

<script>
  export default {
    name: "demo",
    methods: {
      // callback
      updateData1() {
        this.message = "新消息";
        this.$nextTick(() => {
          this.scrollToBottom();
          this.highlightElement();
        });
      },
      // Promise
      updateData2() {
        this.message = "新消息";
        this.$nextTick().then(() => {
          this.scrollToBottom();
          this.highlightElement();
        });
      },
      // async/await
      async updateData3() {
        this.message = "新消息";
        await this.$nextTick();
        this.scrollToBottom();
        this.highlightElement();
      },
    },
  };
</script>
