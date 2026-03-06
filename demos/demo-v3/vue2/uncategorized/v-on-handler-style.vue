
<template>
  <div>
    <!-- ✓ GOOD -->
    <button @click="handler()"></button>
    <button @click="handler($event)"></button>
    <button @click="handler('aa', 666)"></button>
    <button @click="count++"></button>
    <button @click="tab = 'home'"></button>
    
    <!-- ✗ BAD -->
    <button @click="handler"></button>
    <button @click="() => handler()"></button>
    <button @click="($event) => handler($event)"></button>
  </div>
</template>
