
<template>
  <!--
    演示规则
    vuejs-accessibility/no-distracting-elements
  -->

  <div>
    <!-- 成功案例 -->
    <div rule="success">
      <div />
    </div>

    <!-- 失败案例 -->
    <div rule="fail">
      <marquee />
      <blink />
    </div>
  </div>
</template>

<script>
  export default {
    name: "no-distracting-elements",
  };
</script>
