<script setup lang="ts">

import type { TeamMember, TeamSectionProps as Props } from '~/types'

const props = withDefaults(defineProps<Props>(), {
  title: 'Meet Our Team',
  subtitle: 'Tim yang berdedikasi untuk menciptakan solusi teknologi terbaik',
  badge: 'Tim Kami',
  speed: 35,
  pauseOnHover: true,
  members: () => [
    { id: 1, name: 'Ilham Kurniawan', role: 'Founder & Lead Developer', profileImage: '/team/ilham-profile.jpg', revealImage: '/team/ilham-reveal.jpg' },
    { id: 2, name: 'Khairul Anam', role: 'Full Stack Developer', profileImage: '/team/khairul-profile.jpg', revealImage: '/team/khairul-reveal.jpg' },
    { id: 3, name: 'Muhammad Irham', role: 'UI/UX Designer', profileImage: '/team/irham-profile.jpg', revealImage: '/team/irham-reveal.jpg' },
    { id: 4, name: 'Asyifa Nur Sholihah', role: 'Project Manager', profileImage: '/team/asyifa-profile.jpg', revealImage: '/team/asyifa-reveal.jpg' },
    { id: 5, name: 'Prasetyo Bambang', role: 'Backend Developer', profileImage: '/team/prasetyo-profile.jpg', revealImage: '/team/prasetyo-reveal.jpg' },
  ]
})

const duplicatedMembers = computed(() => [...props.members, ...props.members])
const animationDuration = computed(() => `${props.speed}s`)
</script>

<template>
  <section class="py-20 md:py-32 overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Section Heading -->
      <div class="mx-auto max-w-6xl px-4 md:px-6">
        <UiSectionHeading
          :title="title"
          :subtitle="subtitle"
          :badge="badge"
          size="md"
          :gradient="true"
          :show-line="true"
        />
      </div>
    </div>

    <!-- Carousel Container -->
    <div class="max-w-6xl mx-auto mt-12 md:mt-16">
      <div class="relative rounded-3xl border border-border bg-card shadow-lg px-2 sm:px-6 py-8 md:py-12">
        <!-- Gradient overlays -->
        <div class="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-r from-background to-transparent z-10 pointer-events-none rounded-3xl" />
        <div class="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-l from-background to-transparent z-10 pointer-events-none rounded-3xl" />

        <!-- Scrolling container -->
        <div class="flex overflow-hidden py-4">
          <div
            class="flex animate-team-scroll gap-6 md:gap-8"
            :class="{ 'pause-on-hover': pauseOnHover }"
          >
            <div
              v-for="(member, index) in duplicatedMembers"
              :key="`${member.id}-${index}`"
              class="shrink-0 w-64 md:w-72"
            >
              <UiTeamMemberCard
                :name="member.name"
                :role="member.role"
                :profile-image="member.profileImage"
                :reveal-image="member.revealImage"
                :socials="member.socials"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes team-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-team-scroll {
  animation: team-scroll v-bind(animationDuration) linear infinite;
}

.pause-on-hover:hover {
  animation-play-state: paused;
}
</style>
