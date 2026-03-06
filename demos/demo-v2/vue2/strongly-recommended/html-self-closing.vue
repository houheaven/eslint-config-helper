
<!-- eslint-disable vue/max-attributes-per-line -->

<template>
  <div>
    <!-- void 元素不能使用完整标签 -->
    <img src="image.jpg" alt="示例图片"></img>
    <br></br>
    <input type="text"></input>

    <!-- 普通元素不能自闭合 -->
    <div />
    <span />
    <p />

    <!-- Vue 组件不能使用完整标签 -->
    <my-component></my-component>
    <user-profile :user="userData"></user-profile>

    <!-- SVG 元素不能使用完整标签 -->
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"></circle>
    </svg>
  </div>
</template>
