<script lang="ts" setup>
import { useAPI } from "~~/composables/useApi";
import type { Todo } from "~~/types/todo";

definePageMeta({
  layout: "default",
  // auth: true,
  title: "meta.home.title",
  description: "meta.home.description",
});

const { data, error, status } = await useAPI<{ data: Todo[]; code: number }>(
  "/todos"
);

const todos = computed(() => data.value?.data || []);
const errorComputed = computed(() => error.value);
const isLoading = computed(() => status.value === "pending");
</script>

<template>
  <div>
    <UButton to="/todos/new" color="primary" class="mb-4">
      {{ $t("btnAddTodo") }}
    </UButton>
    <div v-if="isLoading" class="text-center py-8">
      <p>{{ $t("loading") || "Loading..." }}</p>
    </div>
    <div v-else-if="errorComputed">Error loading todos</div>
    <div v-else-if="!todos.length">No todos found.</div>
    <div v-else></div>
    <div v-for="todo in todos" :key="todo._id">{{ todo.todoName }}</div>
  </div>
</template>
