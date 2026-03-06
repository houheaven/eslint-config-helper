
<template>
  <!--
    演示规则
    vuejs-accessibility/rule---
  -->

  <div>
    <!-- 成功案例 -->
    <div rule="success">
      <a>Anchor Content!</a>
      <a><text-wrapper /></a>
      <a is="TextWrapper" />
      <a v-text="msg"></a>
      <a v-html="msg"></a>
      <a v-myAccessibleDirective="msg"></a>
      <anchor>Anchor content</anchor>
      <a><my-accessible-text /></a>
    </div>

    <!-- 失败案例 -->
    <div rule="fail">
      <a></a>
      <a><text-wrapper aria-hidden /></a>
      <anchor />
    </div>
  </div>
</template>

<script>
  export default {
    name: "demo",
  };
</script>
