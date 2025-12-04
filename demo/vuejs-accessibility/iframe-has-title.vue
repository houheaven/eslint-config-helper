
<template>
  <!--
    演示规则
    vuejs-accessibility/iframe-has-title
  -->

  <div>
    <!-- 成功案例 -->
    <div rule="success">
      <iframe title="This is a unique title"></iframe>
      <iframe :title="uniqueTitle"></iframe>
    </div>

    <!-- 失败案例 -->
    <div rule="fail">
      <iframe></iframe>
      <iframe title=""></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    name: "iframe-has-title",
  };
</script>
