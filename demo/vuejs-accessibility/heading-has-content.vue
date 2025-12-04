
<template>
  <!--
    演示规则
    vuejs-accessibility/heading-has-content
  -->

  <div>
    <!-- 成功案例 -->
    <div rule="success">
      <h1>Heading Content!</h1>
      <h1 v-html="msg"></h1>
      <h1 v-myAccessibleDirective="msg"></h1>
      <my-heading>Heading Content!</my-heading>
      <h1>
        <my-accessible-text />
      </h1>
    </div>

    <!-- 失败案例 -->
    <div rule="fail">
      <h1></h1>
      <my-heading />
    </div>
  </div>
</template>

<script>
  export default {
    name: "heading-has-content",
  };
</script>
