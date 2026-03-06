
<template>
  <!--
    规则: vue/v-bind-style
    等级: warn
  -->
  
  <div>
    <div :id="id">content</div>
    <div v-bind:id="id">content</div>
  </div>

  <!--
    规则: vue/valid-v-memo
    等级: error
  -->
  
  <div>
    <!-- ✓ GOOD -->
    <div v-memo="[x]"></div>

    <!-- ✗ BAD -->
    <div v-memo></div>
    <div v-memo:aaa="[x]"></div>
    <div v-memo.bbb="[x]"></div>
    <div v-memo="{ x }"></div>
    <div v-for="i in items">
      <div v-memo="[i]"></div>
    </div>
  </div>
</template>

<script setup>
  // 规则: vue/prefer-import-from-vue
  // 等级: warn
  import { watch } from "vue";
  import { createApp } from "@vue/runtime-dom";
  import { Component } from "@vue/runtime-core";
  import { ref } from "@vue/reactivity";
  
  // 规则: import/no-empty-named-blocks
  // 等级: warn

  import {} from "mod";
  import Default, {} from "mod";

  const props = defineProps(["count"]);

  watch(() => props.count, () => {
    console.log(props.count);
  });
</script>
