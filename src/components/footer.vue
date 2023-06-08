<template>
  <footer class="pt-44">
    <div class="container px-6 py-8 mx-auto">
      <div class="flex flex-col items-center text-center">
        <router-link to="/">
          <img class="w-auto h-7" src="../assets/logo-full.svg" alt="" />
        </router-link>
      </div>

      <hr class="my-6 border-focus md:my-10" />

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <!-- <p class="text-sm text-gray-500">
          Website by
          <a href="https://wolmer.me/?utm_source=iaconlabs.com" target="_blank">
            <span
              class="underline cursor-pointer decoration-dotted hover:decoration-slate-50 underline-offset-4"
              >@thewolmer</span
            >
          </a>
        </p> -->
        <p class="text-sm text-gray-500">© Copyright Iacon Labs 2023.</p>

        <div class="flex mx-2 mt-2">
          <a
            href="https://twitter.com/IaconLabs"
            class="mx-3 text-gray-500 hover:text-blue-400 transition-all duration-150"
            aria-label="twitter"
            target="_blank">
            <i class="bx bxl-twitter text-3xl"></i>
          </a>
          <a
            href="https://discord.gg/xrtrYH64Fz"
            class="mx-3 text-gray-500 hover:text-blue-800 transition-all duration-150"
            aria-label="twitter"
            target="_blank">
            <i class="bx bxl-discord-alt text-3xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style></style>
