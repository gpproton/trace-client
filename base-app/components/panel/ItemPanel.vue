<script setup lang="ts" generic="T">
defineOptions({ name: 'ItemPanel' });
defineProps<{
    items: T[]
    selected: T
}>();
//TODO: Page, item, search and content slots
</script>
