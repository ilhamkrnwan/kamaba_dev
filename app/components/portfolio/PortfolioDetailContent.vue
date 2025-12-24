<script setup lang="ts">
interface Props {
  content: unknown
}

defineProps<Props>()
</script>

<template>
  <article class="portfolio-content dark:text-neutral-400">
    <ContentRenderer v-if="content" :value="content" />
  </article>
</template>

<style scoped>
/* Portfolio Content Styles - Blog-like appearance */

/* Headings */
.portfolio-content :deep(h1) {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.portfolio-content :deep(h1:first-child) {
  margin-top: 0;
}

:deep(.dark) .portfolio-content :deep(h1) {
  color: white;
}

@media (min-width: 768px) {
  .portfolio-content :deep(h1) {
    font-size: 2.25rem;
  }
}

.portfolio-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgb(229 229 229);
}

:deep(.dark) .portfolio-content :deep(h2) {
  color: white;
  border-color: rgb(38 38 38);
}

@media (min-width: 768px) {
  .portfolio-content :deep(h2) {
    font-size: 1.875rem;
  }
}

.portfolio-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(38 38 38);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.portfolio-content :deep(h3)::before {
  content: '';
  width: 0.25rem;
  height: 1.5rem;
  background: linear-gradient(to bottom, #050254, #49042f);
  border-radius: 9999px;
}

:deep(.dark) .portfolio-content :deep(h3) {
  color: rgb(245 245 245);
}

@media (min-width: 768px) {
  .portfolio-content :deep(h3) {
    font-size: 1.5rem;
  }
}

.portfolio-content :deep(h4) {
  font-size: 1.125rem;
  font-weight: 600;
  color: rgb(38 38 38);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

:deep(.dark) .portfolio-content :deep(h4) {
  color: rgb(229 229 229);
}

/* Paragraphs */
.portfolio-content :deep(p) {
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 1rem;
}

:deep(.dark) .portfolio-content :deep(p) {
}

/* Strong text */
.portfolio-content :deep(strong) {
  font-weight: 600;
}

:deep(.dark) .portfolio-content :deep(strong) {
  color: white;
}

/* Links */
.portfolio-content :deep(a) {
  color: #3d39a1;
  font-weight: 500;
  text-decoration-color: rgba(61, 57, 161, 0.3);
  transition: text-decoration-color 0.2s;
}

.portfolio-content :deep(a:hover) {
  text-decoration-color: #3d39a1;
}

:deep(.dark) .portfolio-content :deep(a) {
  color: #8b87d6;
  text-decoration-color: rgba(139, 135, 214, 0.3);
}

:deep(.dark) .portfolio-content :deep(a:hover) {
  text-decoration-color: #8b87d6;
}

/* Lists */
.portfolio-content :deep(ul) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
}

.portfolio-content :deep(ul li) {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
}

.portfolio-content :deep(ul li)::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.625rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: linear-gradient(to bottom right, #050254, #49042f);
}

:deep(.dark) .portfolio-content :deep(ul li) {
}

.portfolio-content :deep(ol) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
  list-style: decimal;
}

.portfolio-content :deep(ol li) {
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
}

:deep(.dark) .portfolio-content :deep(ol li) {
  color: white;
}

/* Blockquotes */
.portfolio-content :deep(blockquote) {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-left: 4px solid;
  border-image: linear-gradient(to bottom, #050254, #49042f) 1;
  border-radius: 0 0.75rem 0.75rem 0;
  font-style: italic;
}

:deep(.dark) .portfolio-content :deep(blockquote) {
  background: linear-gradient(to right, rgba(23, 23, 23, 0.8), transparent);
}

.portfolio-content :deep(blockquote p) {
  margin-bottom: 0;
  font-size: 1.125rem;
}

/* Images */
.portfolio-content :deep(img) {
  width: 100%;
  border-radius: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border: 1px solid rgba(229, 229, 229, 0.5);
}

:deep(.dark) .portfolio-content :deep(img) {
  border-color: rgba(38, 38, 38, 0.5);
}

.portfolio-content :deep(img + img) {
  margin-top: 1rem;
}

/* Code blocks */
.portfolio-content :deep(pre) {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  background-color: rgb(23 23 23);
  border: 1px solid rgb(38 38 38);
}

:deep(.dark) .portfolio-content :deep(pre) {
  background-color: rgb(10 10 10);
}

.portfolio-content :deep(code) {
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  background-color: rgb(245 245 245);
  color: #050254;
  font-family: ui-monospace, monospace;
}

:deep(.dark) .portfolio-content :deep(code) {
  background-color: rgb(38 38 38);
  color: #8b87d6;
}

.portfolio-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
}

/* Horizontal rule */
.portfolio-content :deep(hr) {
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgb(212 212 212), transparent);
}

:deep(.dark) .portfolio-content :deep(hr) {
  background: linear-gradient(to right, transparent, rgb(64 64 64), transparent);
}

/* Tables */
.portfolio-content :deep(table) {
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-collapse: collapse;
}

.portfolio-content :deep(th) {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: rgb(245 245 245);
  border-bottom: 1px solid rgb(229 229 229);
}

:deep(.dark) .portfolio-content :deep(th) {
  background-color: rgb(38 38 38);
  border-color: rgb(64 64 64);
}

.portfolio-content :deep(td) {
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  border-bottom: 1px solid rgb(245 245 245);
}

:deep(.dark) .portfolio-content :deep(td) {
  border-color: rgb(38 38 38);
}

.portfolio-content :deep(tr:hover td) {
  background-color: rgb(250 250 250);
}

:deep(.dark) .portfolio-content :deep(tr:hover td) {
  background-color: rgba(23, 23, 23, 0.5);
}

/* Technology icons in content */
.portfolio-content :deep(img[src*="/tech/"]) {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  box-shadow: none;
  border: 0;
  border-radius: 0.5rem;
}
</style>
