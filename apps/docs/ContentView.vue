<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug.toString();
</script>

<template>
  <page-wrapper>
    <div class="markdown">
      <ContentDoc :path="slug">
        <template #default="{ doc }">
          <h1>{{ doc.title }}</h1>
          <p>{{ doc.description }}</p>
          <p class="font-bold">Author: {{ doc.author }}</p>
          <hr />
          <ContentRenderer :value="doc" />
        </template>
        <!-- Slot if document is not found -->
        <template #not-found>
          <div class="text-h4">Content Page ({{ slug }}) not found</div>
        </template>
      </ContentDoc>
    </div>
  </page-wrapper>
</template>
