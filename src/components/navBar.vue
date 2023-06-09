<template>
  <div class="md:flex">
    <router-link to="/">
      <img
        alt="iacon logo"
        class="pointer-events-none md:mx-8 py-5 justify-center mx-auto"
        src="../assets/logo.png"
        width="45" />
    </router-link>
    <span class="my-auto flex justify-center font-extrabold tracking-widest"> IACON LABS </span>
  </div>
  <div class="wrapper">
    <nav class="hidden md:flex gap-10 absolute py-4 px-14 right-2 top-2 text-[#9898a1]">
      <a
        href="https://twitter.com/iaconlabs"
        class="text-gray-500 hover:text-blue-400 transition-all duration-150"
        aria-label="twitter"
        target="_blank">
        <i class="bx bxl-twitter text-3xl"></i>
      </a>
      <!-- <RouterLink to="/">
        <div class="px-3 py-1 btn">Home</div>
      </RouterLink>
      <router-link to="/about">
        <div class="div btn px-3 py-1">About</div>
      </router-link> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
