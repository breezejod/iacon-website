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
        class="mx-3 transition-all duration-150 hover:text-brand"
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
          twitter: 'https://x.com/0xBreezey'
        },
        {
          name: 'Wolmer',
          role: 'Co-Founder/CTO',
          desc: '',
          img: 'https://i.seadn.io/gcs/files/400bcca22aee447d1536966596122439.png?auto=format&w=256',
          web: 'https://wolmer.me?utm_source=iaconlabs.com',
          twitter: 'https://x.com/WolmerTweets'
        },
        {
          name: 'Ethical',
          role: 'Admin',
          desc: '',
          img: 'https://imgur.com/Nb8oPYn.png',
          twitter: 'https://x.com/Chaitanyajeet06'
        },
        {
          name: 'P1ng',
          role: 'Editor, Graphics Artist',
          desc: '',
          img: 'https://imgur.com/T9ZFC4C.png',
          twitter: 'https://x.com/jatinbtw'
        },
        {
          name: 'Jade RX',
          role: 'Analyst',
          desc: '',
          img: 'https://imgur.com/6D0EKQk.png',
          twitter: 'https://x.com/0xjaderx'
        },
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
