
<template>
  <div>
    <!-- 配置为 "never" 时的正确写法 -->
    <div :class="isActive ? 'active' : 'inactive'"></div>
    
    <!-- 配置为 "never" 时的错误写法 -->
    <div
      :class="
        isActive
          ? 'active'
          : 'inactive'
      "
    >
    </div>

    <!-- 配置为 "always" 时的正确写法 -->
    <div
      :class="
        isActive
          ? 'active'
          : 'inactive'
      "
    >
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-undef, no-unused-vars, operator-linebreak */
  export default {
    name: "demo",
    mounted() {
      const v1 = isMobile ? "移动端" : "桌面端";
      const v2 =
        isMobile
          ? "移动端"
          : "桌面端";
    },
  };
</script>
