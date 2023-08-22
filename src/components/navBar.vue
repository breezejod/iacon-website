<template>
  <div class="md:flex">
    <router-link to="/">
      <img
        alt="iacon logo"
        class="justify-center py-5 mx-auto pointer-events-none md:mx-8"
        src="../assets/logo.png"
        width="45" />
    </router-link>
    <span class="flex justify-center my-auto font-extrabold tracking-widest"> IACON LABS </span>
  </div>
  <div class="wrapper">
    <nav class="hidden md:flex gap-10 absolute py-4 px-14 right-2 top-2 text-[#9898a1]">
      <a
        href="https://twitter.com/iaconlabs"
        class="text-gray-500 transition-all duration-150 hover:text-brand"
        aria-label="twitter"
        target="_blank">
        <i class="text-3xl bx bxl-twitter"></i>
      </a>
      <!-- <RouterLink to="/">
        <div class="px-3 py-1 btn">Home</div>
      </RouterLink>
      <router-link to="/about">
        <div class="px-3 py-1 div btn">About</div>
      </router-link> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
