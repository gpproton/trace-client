<script setup lang="ts">
const props = defineProps<{ name: string }>();
const route = useRoute();
const routeSlug = computed(() => route.params.slug.toString());

const { data } = await useAsyncData(() =>
  queryContent(`/docs/${props.name}`)
    .where({ slug: { $eq: routeSlug.value } })
    .findOne(),
);
const page = computed(() => data.value as unknown as Record<string, any>);

if (page.value !== null) {
  useSeoMeta({
    title: page.value.title + ' :: Godwin Peter .O',
    ogTitle: page.value.title,
    description: page.value.description,
    ogDescription: page.value.description,
    ogImage: page.value.image,
    twitterCard: 'summary_large_image',
  });
}
</script>

<template>
  <page-wrapper>
    <div class="markdown">
      <ContentDoc :path="routeSlug">
        <template #default="{ doc }">
          <div class="text-body2">{{ doc.title }}</div>
          <p>{{ doc.description }}</p>
          <hr />
          <ContentRenderer :value="doc" />
        </template>
        <template #not-found>
          <div class="column justify-center items-center">
            <div class="text-h5">Content Page ({{ routeSlug }}) not found</div>
          </div>
        </template>
      </ContentDoc>
    </div>
  </page-wrapper>
</template>
