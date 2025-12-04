
// ==========================================================
// Vue 可访问性标准
// ==========================================================

module.exports = {
  rules: {
    // 使用大驼峰或使用 “-” 衔接的方式
    "vue/multi-word-component-names": "off",

    // 标签必须含有 alt 属性
    "vuejs-accessibility/alt-text": "off",

    // 可见的、非交互性的标签绑定 click 后，至少绑定一个键盘事件（keyup、keydown、keypress）
    "vuejs-accessibility/click-events-have-key-events": "off",

    // 每个表单元素必须关联 label 标签
    "vuejs-accessibility/form-control-has-label": "off",
    
    // 强制标题（h1，h2 等等）元素包含可访问的内容
    "vuejs-accessibility/heading-has-content": "off",
  },
};
