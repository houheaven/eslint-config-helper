
<!-- ✗ BAD -->
<template>
  <div>
    <input v-model="value" @click="openModal" />
    <button @click="pushItem">Push Item</button>
    <button @click="changeId">Change ID</button>
  </div>
</template>

<script>
  export default {
    name: "demo",
    props: {
      value: {
        type: String,
        required: true,
      },
      list: {
        type: Array,
        required: true,
      },
      user: {
        type: Object,
        required: true,
      },
    },
    methods: {
      openModal() {
        this.value = "test";
      },
      pushItem() {
        this.list.push(0);
      },
      changeId() {
        this.user.id = 1;
      },
    },
  };
</script>
