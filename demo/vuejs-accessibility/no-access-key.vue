
<template>
  <!--
    演示规则
    vuejs-accessibility/no-access-key
  -->

  <div>
    <!-- 成功案例 -->
    <div rule="success">
      <div>Stress reliever</div>
    </div>

    <!-- 失败案例 -->
    <div rule="fail">
      <div accesskey="s">Stress reliever</div>
      <div :accesskey="s">Stress reliever</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "no-access-key",
  };
</script>
