
// ==================================================================================
// Vue 可访问性标准
// 依赖包：eslint-plugin-vuejs-accessibility
// 文档：https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility/tree/main/docs
// ==================================================================================

module.exports = {
  plugins: ["vuejs-accessibility"],
  rules: {
    // 是否校验 emoji 表情
    "vuejs-accessibility/accessible-emoji": "off",

    // 标签必须含有 alt 属性
    "vuejs-accessibility/alt-text": "off",

    // 锚点要有内容
    "vuejs-accessibility/anchor-has-content": [
      "off",
      {
        "components": ["Anchor"],
        "accessibleChildren": ["MyAccessibleText"],
        "accessibleDirectives": ["myAccessibleDirective"],
      },
    ],

    // aria
    // Accessible Rich Internet Applications（WAI-ARIA，简称 ARIA）
    // 是能够让残障人士更加便利的访问 Web 内容和使用 Web 应用（特别是那些由 JavaScript 开发的）的一套机制。
    // 最值得注意的是，它包含了一组属性，我们可以添加到 HTML 元素中，将更多的语义信息嵌入其中，这些信息可以被辅助技术读取。
    "vuejs-accessibility/aria-props": "off",
    "vuejs-accessibility/aria-role": "off",
    "vuejs-accessibility/aria-unsupported-elements": "off",

    // 可见的、非交互性的标签绑定 click 后，至少绑定一个键盘事件（keyup、keydown、keypress）
    "vuejs-accessibility/click-events-have-key-events": "off",

    // 每个表单元素必须关联 label 标签
    "vuejs-accessibility/form-control-has-label": "off",
    
    // 强制标题（h1，h2 等等）元素包含可访问的内容
    "vuejs-accessibility/heading-has-content": [
      "off",
      {
        "components": ["MyHeading"],
        "accessibleChildren": ["MyAccessibleText"],
        "accessibleDirectives": ["myAccessibleDirective"],
      },
    ],

    // iframe 元素必须要有 title 属性
    "vuejs-accessibility/iframe-has-title": "off",

    // 具有交互角色和交互处理程序（鼠标或按键）的元素必须是可聚焦的
    "vuejs-accessibility/interactive-supports-focus": "off",

    // 强制标签标记具有关联控件
    "vuejs-accessibility/label-has-for": "off",

    // 媒体元素标签要有标题
    "vuejs-accessibility/media-has-caption": "off",

    // 强制 @mouseenter/@mouseover/@mouseout/@mouseleave/@hover 必须伴随着 @focus/@blur
    "vuejs-accessibility/mouse-events-have-key-events": "off",

    // 强制元素上无 accesskey 快捷键属性
    "vuejs-accessibility/no-access-key": "off",

    // 强制元素上无自动聚焦属性
    "vuejs-accessibility/no-autofocus": "off",

    // 强制要求不使用分散注意力的元素（视觉分散的元素可能会导致视障用户的无障碍问题）
    "vuejs-accessibility/no-distracting-elements": [
      "off",
      {
        "elements": ["marquee", "blink"],
      },
    ],

    // 禁用 onchange 事件
    "vuejs-accessibility/no-onchange": "off",

    // 禁止多余的 role 属性
    "vuejs-accessibility/no-redundant-roles": "off",

    // 具有ARIA角色的元素必须具有该角色所需的所有属性
    "vuejs-accessibility/role-has-required-aria-props": "off",

    // 避免使用正tabindex属性值，以使页面流与键盘选项卡顺序同步
    "vuejs-accessibility/tabindex-no-positive": "off",
  },
};
