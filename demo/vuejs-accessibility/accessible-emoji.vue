
<template>
  <!--
    演示规则
    vuejs-accessibility/accessible-emoji
  -->

  <div>
    <!-- 成功案例 -->
    <div rule="success">
      <span role="img" aria-label="Snowman">&#9731;</span>
      <span role="img" aria-label="Panda">🐼</span>
      <span role="img" aria-labelledby="panda1">🐼</span>
    </div>

    <!-- 失败案例 -->
    <div rule="fail">
      <span>🐼</span>
      <i role="img" aria-label="Panda">🐼</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "accessible-emoji",
  };
</script>
