
<template>
  <div>
    <div style="color: pink;"></div>
    <div :style="{ color: 'pink' }"></div>
    <div :style="[{ color: 'pink' }, { 'font-size': '85%' }]"></div>
    <div :style="{ backgroundImage, color: 'pink' }"></div>
  </div>
</template>
