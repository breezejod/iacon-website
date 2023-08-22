<template>
   <section class="mt-20 body-font">
      <h1
        class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        Our <span class="text-brand">Roadmap</span>
      </h1>

      <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
        Know what we are building
      </p>

      <div class="container flex flex-wrap px-5 py-24 mx-auto">
        <div class="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
          <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div class="w-1 h-full bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white rounded-full sm:mt-0 bg-brand title-font"></div>
          <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full text-brand">
              <i class="text-5xl bx bxs-group"></i>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium text-white title-font">Community Build-up</h2>
              <p class="leading-relaxed">
                Making a strong community of Web3 enthusiasts and teaching them about NFT and crypto
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-bottom
          class="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div class="w-1 h-full bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-black rounded-full sm:mt-0 ring-2 title-font ring-brand"></div>
          <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full text-brand">
              <i class="text-5xl bx bxs-chart"></i>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium text-white title-font">Partnerships</h2>
              <p class="leading-relaxed">
                Further growing by partnerships with other web3 communities and great web3 projects around the world
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-bottom
          class="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div class="w-1 h-full bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-black rounded-full sm:mt-0 ring-2 title-font ring-brand"></div>
          <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full text-brand">
              <i class="text-5xl bx bxs-star"></i>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium text-white title-font">Exclusive Perks</h2>
              <p class="leading-relaxed">
                Educating our community about web3 and security. Providing exclusive perks to the community including NFT giveaways, merch, exclusive
                whitelists
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-bottom
          class="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
          <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div class="w-1 h-full bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-black rounded-full sm:mt-0 ring-2 title-font ring-brand"></div>
          <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full text-brand">
              <i class="text-5xl bx bxs-phone-call"></i>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium text-white title-font">Alpha Calls</h2>
              <p class="leading-relaxed">
                Helping the community make $$profit by providing well researched Alpha calls
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-bottom
          class="relative flex pb-10 mx-auto sm:items-center md:w-2/3">
          <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div class="w-1 h-full bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-black rounded-full sm:mt-0 ring-2 title-font ring-brand"></div>
          <div class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
            <div
              class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full text-brand">
              <i class="text-5xl bx bxs-purchase-tag-alt"></i>
            </div>
            <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
              <h2 class="mb-1 text-xl font-medium text-white title-font">Alpha Pass Launch</h2>
              <p class="leading-relaxed">cuz why not? Launching own alpha pass with new perks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
name: 'RoadMap',
 data() {
    return {
      roadmap: [
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
        },
        {
          name: 'Wolmer',
          role: 'Co-Founder/CTO',
          desc: '',
          img: 'https://i.seadn.io/gcs/files/400bcca22aee447d1536966596122439.png?auto=format&w=256',
          web: 'https://wolmer.me?utm_source=iaconlabs.com',
          twitter: 'https://twitter.com/WolmerTweets'
        },
        {
          name: 'Wolmer',
          role: 'Co-Founder/CTO',
          desc: '',
          img: 'https://i.seadn.io/gcs/files/400bcca22aee447d1536966596122439.png?auto=format&w=256',
          web: 'https://wolmer.me?utm_source=iaconlabs.com',
          twitter: 'https://twitter.com/WolmerTweets'
        },
      ]
    }
  }
}
</script>

<style>

</style>