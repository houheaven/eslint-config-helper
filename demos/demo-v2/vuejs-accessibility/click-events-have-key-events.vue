
<template>
  <!--
    演示规则
    vuejs-accessibility/click-events-have-key-events
  -->

  <div>
    <!-- 成功案例 -->
    <div rule="success">
      <div @click="foo" @keydown="bar"></div>
      <div @click="foo" @keyup="bar"></div>
      <div @click="foo" @keypress="bar"></div>
    </div>

    <!-- 失败案例 -->
    <div rule="fail">
      <div @click="foo"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "click-events-have-key-events",
  };
</script>
