<template>
  <h1
    class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mt-28">
    Join our <span class="text-blue-500">Discord</span>
  </h1>

  <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
    Join other to explore iacon
  </p>
  <div class="flex items-center justify-center mx-auto">
    <div class="flex items-center">
      <img
        v-for="item in users"
        :key="item.id"
        class="h-14 w-14 -mx-2.5 ring-2 ring-brand/40 rounded-full object-cover opacity-90"
        :src="item.avatar_url"
        alt="" />
    </div>
  </div>

  <div class="flex items-center justify-center mt-10">
    <a href="https://discord.gg/xrtrYH64Fz" target="_blank">
      <button
        class="px-4 py-2 transition shadow-xl bg-brand rounded-2xl shadow-brand/30 hover:shadow-brand/50">
        Hit the button to get in!
      </button>
    </a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    this.getUsers()
  },
  data() {
    return {
      users: [],
      error: []
    }
  },
  methods: {
    getUsers() {
      axios
        .get('https://discord.com/api/guilds/1037742956205060106/widget.json')
        .then((response) => {
          this.users = response.data.members
        })
        .catch((error) => {
          this.error = error
        })
    }
  }
}
</script>

<style scoped></style>
