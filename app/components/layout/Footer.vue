<script setup lang="ts"></script>

<template>
  <UFooter
    class="border-t border-solid border-neutral-300 dark:border-neutral-700 boderdark:bg-neutral-800"
  >
    <template #left>
      <p class="text-muted dark:text-white text-sm">
        Copyright © {{ new Date().getFullYear() }} by NuiCoder. All rights
        reserved.
      </p>
    </template>

    <template #right>
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/sonht113/nuxt4-boilerplate-for-starter"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
