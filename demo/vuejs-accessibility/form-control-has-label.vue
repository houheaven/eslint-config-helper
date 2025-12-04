
<template>
  <!--
    演示规则
    vuejs-accessibility/form-control-has-label
  -->

  <div>
    <!-- 成功案例 -->
    <div rule="success">
      <label><input type="text" /></label>
      <input aria-label="test" type="text" />
      <input aria-labelledby="#id" type="text" />
      <label for="id"></label><input aria-labelledby="#id" id="id" />
      <input type="image" />
    </div>

    <!-- 失败案例 -->
    <div rule="fail">
      <input value="1" type="text" />
      <textarea value="1"></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: "form-control-has-label",
  };
</script>
