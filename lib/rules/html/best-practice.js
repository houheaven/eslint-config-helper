
// ==========================================================
// 最佳实践（Best Practice）
// ==========================================================

module.exports = {
  rules: {
    // 强制规定 HTML 元素嵌套的最大允许深度
    // https://html-eslint.org/docs/rules/max-element-depth
    "@html-eslint/max-element-depth": ["error", {
      max: 8,
    }],

    // 禁止使用重复的属性
    // https://html-eslint.org/docs/rules/no-duplicate-attrs
    "@html-eslint/no-duplicate-attrs": "error",

    // 禁止 class 属性中的类名重复
    // https://html-eslint.org/docs/rules/no-duplicate-class
    "@html-eslint/no-duplicate-class": "warn",

    // 禁止 id 属性重复
    // https://html-eslint.org/docs/rules/no-duplicate-id
    "@html-eslint/no-duplicate-id": "error",

    // <head> 标签中禁止使用重复的元素（<title>、<base>、<meta charset>、<meta name="viewport">、<link rel="canonical">）
    // https://html-eslint.org/docs/rules/no-duplicate-in-head
    "@html-eslint/no-duplicate-in-head": "error",

    // 禁止使用行内样式
    // https://html-eslint.org/docs/rules/no-inline-styles
    "@html-eslint/no-inline-styles": "error",

    // 禁止使用无效的 HTML 实体
    // https://html-eslint.org/docs/rules/no-invalid-entity
    "@html-eslint/no-invalid-entity": "error",

    // 禁止交互元素之间相互嵌套
    // https://html-eslint.org/docs/rules/no-nested-interactive
    "@html-eslint/no-nested-interactive": "error",

    // 禁止在 HTML5 中使用过时的标签
    // applet, acronym, bgsound, dir, frame, frameset, noframes, isindex, keygen, listing, menuitem, nextid, noembed,
    // plaintext, rb, rtc, strike, xmp, basefont, big, blink, center, font, marquee, multicol, nobr, spacer, tt
    // https://html-eslint.org/docs/rules/no-obsolete-tags
    "@html-eslint/no-obsolete-tags": "error",

    // 禁止使用指定的属性值
    // https://html-eslint.org/docs/rules/no-restricted-attr-values
    "@html-eslint/no-restricted-attr-values": [
      "error",
      {
        attrPatterns: ["class", "alt"],
        attrValuePatterns: ["data-test-.*"],
        message: "'data-test-x' is restricted.",
      },
      {
        attrPatterns: [".*"],
        attrValuePatterns: ["^fooooo$"],
        message: "'fooooo' is restricted.",
      },
    ],

    // 禁用特定的属性
    // https://html-eslint.org/docs/rules/no-restricted-attrs
    "@html-eslint/no-restricted-attrs": [
      "error",
      {
        tagPatterns: ["^div$", "^img$"],
        attrPatterns: ["test-.*"],
        message: "'test-x' is restricted.",
      },
      {
        tagPatterns: ["^p$"],
        attrPatterns: ["^test$"],
        message: "'test' is restricted.",
      },
    ],

    // 禁止在 <style> 中使用类型属性（除非不使用CSS），以及在 <script> 中使用类型属性（除非使用的语言与CSS/JavaScript不同）
    // HTML5 默认值如下：
    // <script> - type="text/javascript"
    // <style>, <link> - type="text/css"
    // https://html-eslint.org/docs/rules/no-script-style-type
    "@html-eslint/no-script-style-type": "off",

    // 禁止使用不安全的 target='_blank' 属性（需要加上 rel="noreferrer"）
    // https://html-eslint.org/docs/rules/no-target-blank
    "@html-eslint/no-target-blank": "off",

    // 强制要求使用 HTTPS 处理嵌入的资源（image、media、style、script）
    // https://html-eslint.org/docs/rules/prefer-https
    "@html-eslint/prefer-https": "off",

    // 强制要求使用指定属性
    // https://html-eslint.org/docs/rules/require-attrs
    "@html-eslint/require-attrs": [
      "error",
      {
        tag: "img",
        attr: "alt",
      },
      {
        tag: "test-svg",
        attr: "viewBox",
        value: "0 0 100 100",
      },
    ],

    // 强制要求 button 标签设置一个有效的 type 属性
    // https://html-eslint.org/docs/rules/require-button-type
    "@html-eslint/require-button-type": "off",

    // 强制要求标签闭合
    // https://html-eslint.org/docs/rules/require-closing-tags
    "@html-eslint/require-closing-tags": ["warn", {
      selfClosing: "always",
      selfClosingCustomPatterns: ["-"],
    }],

    // 强制要求设置 <!DOCTYPE html> 文档申明
    // https://html-eslint.org/docs/rules/require-doctype
    "@html-eslint/require-doctype": "warn",

    // 强制要求某些元素（如 img 和 iframe）必须明确设置宽度和高度属性
    // https://html-eslint.org/docs/rules/require-explicit-size
    "@html-eslint/require-explicit-size": ["off", {
      allowClass: ["has-size-class"],
      allowId: ["has-size-id", "has-size-id2"],
    }],

    // 强制 <li> 必须包裹在 <ul>、<ol>、<menu> 中
    // https://html-eslint.org/docs/rules/require-li-container
    "@html-eslint/require-li-container": "error",

    // 强制在 <head> 中使用 <meta charset="..."> 文件编码
    // https://html-eslint.org/docs/rules/require-meta-charset
    "@html-eslint/require-meta-charset": "error",

    // 该规则强制使用基线特征
    // 新推出（Newly available）：该功能适用于最新的设备和浏览器版本，该功能可能在较旧设备或浏览器上无法使用
    // 广泛可用（Widely available）：该功能已确立并得到广泛支持，适用于多种设备和浏览器版本，它已经在多个浏览器中提供至少两年半（30个月）了
    // https://html-eslint.org/docs/rules/use-baseline
    "@html-eslint/use-baseline": ["error", {
      // available: "newly",
      available: "widely",
      // available: 2020,
    }],
  },
};
