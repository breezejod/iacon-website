<template>
  <div
    v-for="item in team"
    :key="item.name"
    class="px-12 py-8 transition-colors duration-300 transform border shadow-inner cursor-pointer rounded-xl border-focus shadow-gray-500">
    <div class="flex flex-col sm:-mx-4 sm:flex-row">
      <img
        class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
        :src="item.img"
        alt="" />

      <div class="mt-5 sm:mx-4 sm:mt-0">
        <h0 class="text-xl font-semibold capitalize md:text-2xl">{{ item.name }}</h0>

        <p class="mt-3">{{ item.role }}</p>
      </div>
    </div>

    <p class="mt-5">
      {{ item.desc }}
    </p>

    <div class="flex mt-5 -mx-2">
      <a
        v-if="item.web"
        :href="item.web"
        class="mx-3 transition-all duration-150 hover:text-orange-400"
        aria-label="web"
        target="_blank">
        <i class="text-3xl bx bx-globe"></i>
      </a>

      <a
        :href="item.twitter"
        class="mx-3 transition-all duration-150 hover:text-blue-400"
        aria-label="twitter"
        target="_blank">
        <i class="text-3xl bx bxl-twitter"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  data() {
    return {
      team: [
        {
          name: 'Breeze',
          role: 'Co-Founder/CEO',
          desc: '',
          img: 'https://i.seadn.io/gcs/files/7f0fa40af03eb1a08e373da9ae623d52.png?auto=format&w=256',
          web: '',
          twitter: 'https://twitter.com/0xBreezey'
        },
        {
          name: 'Wolmer',
          role: 'Co-Founder/CTO',
          desc: '',
          img: 'https://i.seadn.io/gcs/files/400bcca22aee447d1536966596122439.png?auto=format&w=256',
          web: 'https://wolmer.me?utm_source=iaconlabs.com',
          twitter: 'https://twitter.com/WolmerTweets'
        }
      ]
    }
  }
}
</script>

<style>
.card {
  transform: v-bind(cardTransform);
  transition: transform 0.25s ease-out;
}
</style>
