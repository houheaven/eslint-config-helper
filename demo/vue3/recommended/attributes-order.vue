
<!-- eslint-disable vue/no-unused-refs -->
<!-- eslint-disable vue/no-root-v-if -->
<!-- eslint-disable vue/v-on-style -->
<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/no-v-text -->

<template>
  <component
    :is="header"
    id="uniqueID"
    class="header"
    static-attr-one="prop"
    static-attr-two="prop"
    :dynamic-attr-one="prop"
    :dynamic-attr-two="prop"
    attr-shorthand-bool-one
    attr-shorthand-bool-two
    v-model="headerData"
    v-text="textContent"
    v-html="htmlContent"
    v-slot="slotProps"
    v-custom-directive-one
    v-custom-directive-two="prop"
    v-once
    v-for="item in items"
    :key="item.id"
    ref="header"
    v-show="visible"
    v-if="!visible"
    @click="functionCall()"
    v-on:mouseover="functionCall()">
  </component>
</template>
