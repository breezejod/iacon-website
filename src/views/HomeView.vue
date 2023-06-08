<script setup>
import NavBar from '../components/navBar.vue'
import DiscordUsers from '../components/DiscordUsers.vue'
import { ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { rand } from '@vueuse/shared'
import TeamCard from '../components/teamCard.vue'
import FooterMain from '../components/footer.vue'
const greetings = ['Alpha', 'Community', 'NFT Space']
const word = ref('NFT Space')
const interval = ref(700)
useIntervalFn(() => {
  word.value = greetings[rand(0, greetings.length - 1)]
}, interval)
</script>

<template>
  <main
    style="
      background: rgb(1, 2, 3);
      background: linear-gradient(
        351deg,
        rgba(1, 2, 3, 1) 70%,
        rgba(13, 27, 41, 0.8712993421052632) 80%,
        rgba(29, 76, 147, 0.9360994397759104) 96%
      );
    ">
    <NavBar />
    <section>
      <div
        v-motion-slide-bottom
        class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div class="flex flex-col w-full mb-12 text-center">
          <div
            class="hidden md:inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50 opacity-60">
            <img src="../assets/logo.png" class="invert" width="63" alt="idk" />
          </div>
          <h1
            class="max-w-5xl text-2xl font-bold leading-none tracking-tighter md:text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
            The Only
            <span class="gradcolor">
              {{ word }}
            </span>
            You Need <br class="hidden lg:block" />
          </h1>

          <p
            class="max-w-xl font-theme mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">
            Our community is dedicated to exploring the endless possibilities of NFT technology and
            empowering artists and creators to showcase their unique talents to the world. Join us
            in shaping the future of the digital art world and become a part of the Alpha community
            today.
          </p>

          <a
            href="https://twitter.com/IaconLabs"
            target="_blank"
            class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600"
            title="Twitter">
            <button class="rounded-lg bg-blue-500 text-black px-2 py-2 hover:ring">
              Follow Us
            </button>
          </a>
        </div>
      </div>
    </section>
    <div class="flex justify-center mb-16">
      <i class="bx bx-chevrons-down bx-fade-up text-3xl text-focus"></i>
    </div>

    <section class="body-font mt-20">
      <h1
        class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        Our <span class="text-blue-500">Roadmap</span>
      </h1>

      <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
        Know what we building
      </p>

      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-brand text-white relative z-10 title-font font-medium text-sm"></div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
              class="flex-shrink-0 w-24 h-24 text-brand rounded-full inline-flex items-center justify-center">
              <i class="bx bxs-group text-5xl"></i>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-white mb-1 text-xl">Community Build-up</h2>
              <p class="leading-relaxed">
                Making a strong community of Web# enthusiasts and teaching them about NFT and crypto
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-bottom
          class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black ring-2 text-white relative z-10 title-font font-medium text-sm"></div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
              class="flex-shrink-0 w-24 h-24 text-brand rounded-full inline-flex items-center justify-center">
              <i class="bx bxs-chart text-5xl"></i>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-white mb-1 text-xl">Partnerships</h2>
              <p class="leading-relaxed">
                Further growing by partnerships with other communities and great web3 projects
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-bottom
          class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black ring-2 text-white relative z-10 title-font font-medium text-sm"></div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
              class="flex-shrink-0 w-24 h-24 text-brand rounded-full inline-flex items-center justify-center">
              <i class="bx bxs-star text-5xl"></i>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-white mb-1 text-xl">Exclusive Perks</h2>
              <p class="leading-relaxed">
                Providing exclusive perks to the community including giveaways, merch, exclusive
                whitelists
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-bottom
          class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black ring-2 text-white relative z-10 title-font font-medium text-sm"></div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
              class="flex-shrink-0 w-24 h-24 text-brand rounded-full inline-flex items-center justify-center">
              <i class="bx bxs-phone-call text-5xl"></i>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-white mb-1 text-xl">Alpha Calls</h2>
              <p class="leading-relaxed">
                Helping the community make $$profit by providing well researched Alpha calls
              </p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-bottom
          class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div
            class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black ring-2 text-white relative z-10 title-font font-medium text-sm"></div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div
              class="flex-shrink-0 w-24 h-24 text-brand rounded-full inline-flex items-center justify-center">
              <i class="bx bxs-purchase-tag-alt text-5xl"></i>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-white mb-1 text-xl">Alpha Pass Launch</h2>
              <p class="leading-relaxed">cuz why not? Launching own alpha pass with new perks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-motion-slide-visible-bottom>
      <div class="container px-10 py-16 mx-auto">
        <h1
          class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our <span class="text-blue-500">Team</span>
        </h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Meet the team behind IaconLabs
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <TeamCard />
        </div>
      </div>
    </section>
    <DiscordUsers />
  </main>
  <FooterMain />
</template>

<style scoped>
.card {
  transform: v-bind(cardTransform);
  transition: transform 0.25s ease-out;
}
</style>
