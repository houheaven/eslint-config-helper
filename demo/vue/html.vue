
<template>
  <div>
    <div rule="vue/html-button-has-type">
      <!-- ✓ GOOD -->
      <button type="button">Hello World</button>
      <button type="submit">Hello World</button>
      <button type="reset">Hello World</button>
      <!-- ✗ BAD -->
      <button>Hello World</button>
      <button type="">Hello World</button>
      <button type="foo">Hello World</button>
    </div>

    <div rule="vue/html-comment-content-newline">
      <!-- ✓ GOOD -->
      <!-- singleline comment -->
      <!--
        multiline
        comment
      -->

      <!--
        ✗ BAD
      -->
      <!--
        singleline comment
      -->
      <!-- multiline
        comment -->
    </div>
    
    <div>
      <!-- ✓ GOOD -->
      <!-- comment -->
      <!--
        comment1
        comment2
      -->

      <!--✗ BAD-->
      <!--comment-->
    </div>

    <div rule="vue/html-comment-indent">
      <!-- ✓ GOOD -->
      <!--
        comment
      -->
      <!--
        comment
        comment
      -->
        <!--
          comment
        -->

      <!-- ✗ BAD -->
      <!--
      comment
          comment
      -->
      <!--
        comment
        -->
        <!--
        comment
      -->
    </div>

    <div rule="vue/html-quotes">
      <!-- ✓ GOOD -->
      <img title='a string containing "double" quotes' />
      <img title="a string containing 'double' quotes" />

      <!-- ✗ BAD -->
      <img title='foo'>
      <img title=bar>
    </div>

    <div rule="">
      <!-- ✓ GOOD -->
      <div/>
      <img>
      <MyComponent />
      <svg><path d=""/></svg>

      <!-- ✗ BAD -->
      <div></div>
      <img/>
      <MyComponent></MyComponent>
      <svg><path d=""></path></svg>
    </div>
    
    
    <!-- "vue/html-indent" -->

    <div rule="">

    </div>

  </div>
</template>
