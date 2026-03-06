
<template>
  <div rule="vue/html-comment-content-newline">
    <!-- ✓ GOOD -->
    <!-- singleline comment -->
    <!--
      multiline
      comment
    -->

    <!-- ✗ BAD -->
    <!--
      singleline comment
    -->
    <!-- multiline
      comment -->
    
    <div><!-- multiline
      comment --></div>

    <div>
      <!-- multiline
          comment -->
    </div>
  </div>
</template>
