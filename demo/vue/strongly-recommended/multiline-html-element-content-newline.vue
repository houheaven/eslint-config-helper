
<template>
  <div>
    <!-- ✓ GOOD -->
    <div>
    </div>
    <div>
      
    </div>

    <div attr>singleline element</div>
    <div>
      singleline content
    </div>
    <div>
      multiline
      content
    </div>

    <div>

      content

    </div>

    <div>

      content
      content

      content

      
    </div>

    <div
      attr
    >
      multiline start tag
    </div>

    <table>
      <tr>
        <td>multiline</td>
        <td>children</td>
      </tr>
    </table>

    <table><tr><td>multiline</td>
      <td>children</td></tr></table>
    
    <pre>some
    content</pre>

    <!-- ✗ BAD -->
    <div>multiline
      content</div>
    
    <div>1111
      2222
    </div>

    <div
      attr
    >multiline start tag</div>
    
  </div>
</template>
