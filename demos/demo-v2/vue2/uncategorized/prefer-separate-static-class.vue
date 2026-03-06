
<template>
  <div>
    <div :class="'static-class'"></div>
    <div :class="{ 'static-class': true, 'dynamic-class': foo }"></div>
    <div :class="['static-class', dynamicClass]"></div>
  </div>
</template>
