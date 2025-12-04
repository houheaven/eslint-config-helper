
<template>
  <!--
    演示规则
    vue/max-len
  -->

  <div>
    <a id="website" class="link pretty-cool-website" href="http://www.houheaven.com" target="_blank" data-rule="view-site" attr1="foooo" attr2="boo" attr3="bar">houheaven website</a>
    <a class="link pretty-cool-website" href="http://www.houheaven.com" title="super long long long long long long long long long long long long long long long long long long long long looooooooooooooooooong tips">houheaven</a>
    <table><tr><td>t11</td><td>t12</td><td>t13</td></tr><tr><td>t11</td><td>t12</td><td>t13</td></tr><tr><td>t11</td><td>t12</td><td>t13</td></tr><tr><td>t11</td><td>t12</td><td>t13</td></tr><tr><td>t11</td><td>t12</td><td>t13</td></tr></table>
  </div>
</template>

<script>
  export default {
    name: "MaxLenDemo",
    data() {
      return {
        str: "hello",
      };
    },
    mounted() {
      /**
       * This is a comment that violates the maximum line length we have specified - This is a comment that violates the maximum line length we have specifiedThis is a comment that violates the maximum line length we have specified - This is a comment that violates the maximum line length we have specified
      **/

      const foo = "bar"; // This is a really really really really really really really long comment This is a really really really really really really really long comment This is a really really really really really really really long comment

      const url = "https://www.example.com/really/really/really/really/really/really/really/long/really/really/really/really/really/really/really/long/really/really/really/really/really/really/really/longreally/really/really/really/really/really/long/really/really/really/really/really/really/really/long";

      const longString = "this is a really really really really really long string!this is a really really really really really long string!this is a really really really really really long string!this is a really really really really really long string!";

      const longTemplateLiteral = `${this.str} this is a really really really really really long template literal!this is a really really really really really long template literal!this is a really really really really really long template literal!this is a really really really really really long template literal!`;

      const longRegExpLiteral = /this is a really really really really really long regular expression!this is a really really really really really long regular expression!this is a really really really really really long regular expression!this is a really really really really really long regular expression!/;
      
      console.log(foo, url, longString, longTemplateLiteral, longRegExpLiteral);
    },
  };
</script>
