
<template>
  <div>
    <my-component v-slot="data">
      {{ data }}
    </my-component>
    <my-component #default="data">
      {{ data }}
    </my-component>

    <my-component>
      <template v-slot>content</template>
      <template v-slot:one>content</template>
      <template v-slot:two>content</template>
    </my-component>
    <my-component>
      <template v-slot:default>content</template>
      <template v-slot:one>content</template>
      <template v-slot:two>content</template>
    </my-component>
    <my-component>
      <template #default>content</template>
      <template #one>content</template>
      <template #two>content</template>
    </my-component>
  </div>
</template>
