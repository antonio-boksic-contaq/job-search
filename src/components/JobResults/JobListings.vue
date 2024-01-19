<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous
          </router-link>

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import JobListing from '@/components/JobResults/JobListing.vue';
import { useJobsStore, FETCH_JOBS } from '@/stores/jobs';

import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages';

const jobStore = useJobsStore();
onMounted(jobStore.FETCH_JOBS);

const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS);

const route = useRoute();
const currentPage = computed(() => Number.parseInt(route.query.page || '1'));
const maxPage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10));

const { previousPage, nextPage } = usePreviousAndNextPages(currentPage, maxPage);
/*
const previousPage = computed(() => {
  const previousPage = currentPage.value - 1;
  const firstPage = 1;
  return previousPage >= firstPage ? previousPage : undefined;
});
*/

/*
const nextPage = computed(() => {
  const nextPage = currentPage.value + 1;
  return nextPage <= maxPage ? nextPage : undefined;
});
*/

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value;
  const firstJobindex = (pageNumber - 1) * 10;
  const lastJobindex = pageNumber * 10;
  return FILTERED_JOBS.value.slice(firstJobindex, lastJobindex);
});
</script>
