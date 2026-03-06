
<template>
  <div>
    <p>{{ value }}</p>
    <p>{{ focused }}</p>
    <p>{{ label }}</p>
    <p>{{ icon }}</p>
  </div>
</template>

<script>
  /* eslint-disable vue/no-unused-properties */
  export default {
    name: "demo",
    props: {
      value: {
        type: String,
        required: true,
      },



      
      focused: {
        type: Boolean,
        required: true,
      },

      label: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        key1: {
          a1: "val1",
          a2: "val2",
        },
        key2: "val2",
        key3: "val3",
      };
    },
  };
</script>


