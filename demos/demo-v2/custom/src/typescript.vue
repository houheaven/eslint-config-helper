
<template>
  <div class="vue + ts">
    <p>{{ userInfo.color }}</p>
  </div>
</template>

<script lang="ts">
  // @ts-nocheck: 关闭 TS 检查，只显示 ESLint 报错
  import type { PropType } from "vue";
  import { defineComponent } from "vue";

  enum Color {
    Red,
    Green = "Green",
    Blue = "Blue",
  }

  type UserInfo = {
    id: number;
    name: string;
    color: Color;
  }

  export default defineComponent({
    name: "demo",
    props: {
      userInfo: {
        type: Object as PropType<UserInfo>,
        default: () => ({
          id: 0,
          name: "",
          color: Color.Red,
        }),
      },
    },
  });
</script>
