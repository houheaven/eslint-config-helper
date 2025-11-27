
<!-- eslint-disable vue/v-on-handler-style -->

<template>
  <div>
    <button @click="(evt) => { console.log(evt); }">login</button>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  /* eslint-disable vue/no-unused-properties */
  export default {
    name: "demo",
    methods: {
      foo() {
        // 1tbs 代码风格
        function foo() {
          return true;
        }

        if (foo) {
          bar();
        }

        if (foo) {
          bar();
        } else {
          baz();
        }

        try {
          somethingRisky();
        } catch(e) {
          handleError();
        }

        // when there are no braces, there are no problems
        if (foo) bar();
        else if (baz) boom();
      },
      boo() {
        // allman 代码风格
        function foo()
        {
          return true;
        }

        if (foo)
        {
          bar();
        }

        if (foo)
        {
          bar();
        }
        else
        {
          baz();
        }

        try
        {
          somethingRisky();
        }
        catch(e)
        {
          handleError();
        }
      },
      bar() {
        // stroustrup 代码风格
        function foo() {
          return true;
        }

        if (foo) {
          bar();
        }

        if (foo) {
          bar();
        }
        else {
          baz();
        }

        try {
          somethingRisky();
        }
        catch(e) {
          handleError();
        }

        // when there are no braces, there are no problems
        if (foo) bar();
        else if (baz) boom();

        if (foo) { bar(); }

        if (foo) { bar(); }
        else { baz(); }

        try { somethingRisky(); }
        catch(e) { handleError(); }
      },
    },
  };
</script>
