<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

// const { prev, next } = useContent();
</script>

<template>
  <page-wrapper>
  <div class="markdown">
    <ContentDoc :path="slug">
      <template #default="{ doc }">
        <div class="text-h5">{{ doc.title }}</div>
        <p>{{ doc.description }}</p>
        <p class="font-bold">Author: {{ doc.author }}</p>
        <hr />
        <div>
          <!-- <NuxtLink v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
          <NuxtLink v-if="next" :to="next._path">{{ next.title }}</NuxtLink> -->
        </div>
        <ContentRenderer :value="doc" />
      </template>
      <template #not-found>
        <div class="column justify-center items-center">
          <div class="text-h5">Content Page ({{ slug }}) not found</div>
        </div>
      </template>
    </ContentDoc>
  </div>
  </page-wrapper>
</template>
