
<script setup lang="ts">
  /* type-based 定义风格 */
  const props = defineProps<{
    kind: string
    options: { title: string }
  }>()
  
  /* runtime 定义风格 */
  const props = defineProps({
    kind: { type: String },
    options: { type: Object as PropType<{ title: string }> }
  })
</script>
