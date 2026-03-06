
<template>
  <!-- ✓ GOOD -->
  {{ filter(msg) }}
  {{ filter(msg, '€') }}
  {{ filterB(filterA(msg)) }}
  <div :id="filter(msg)"></div>
  <div :id="filter(msg, '€')"></div>
  <div :id="filterB(filterA(msg))"></div>

  <!-- ✗ BAD -->
  {{ msg | filter }}
  {{ msg | filter('€') }}
  {{ msg | filterA | filterB }}
  <div :id="msg | filter"></div>
  <div :id="msg | filter('€')"></div>
  <div :id="msg | filterA | filterB"></div>
</template>
