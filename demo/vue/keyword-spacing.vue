
<template>
  <!--
    演示规则
    vue/comma-dangle
  -->
  <div>
    <h1>hello</h1>
  </div>
</template>

<script>
  export default {
    name: "KeywordSpacingDemo",
    data() {
      return {
        score: 89,
      };
    },
    methods: {
      ifDemo() {
        if(this.score >= 90) {
          console.log("优秀");
        }
        else if(this.score >= 75) {
          console.log("良好");
        }
        else if(this.score >= 60) {
          console.log("及格");
        }
        else {
          console.log("不及格");
        }
      },
      switch() {
        switch (true) {
          case this.score >= 90:
            console.log("优秀");
            break;
          case this.score >= 75:
            console.log("良好");
            break;
          case this.score >= 60:
            console.log("及格");
            break;
          default:
            console.log("不及格");
        }
      },
      try() {
        try {
          JSON.parse(this.score);
        }
        catch (err) {
          console.log(err);
        }
      },
    },
  };
</script>
