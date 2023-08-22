<script setup>
import Footer from '../components/footer.vue'
import navBar from '../components/navBar.vue'
</script>


<template>
    <main
    class="flex flex-col items-center about"
    style="
      background: rgb(1, 2, 3);
      background: linear-gradient(
        351deg,
        rgba(1, 2, 3, 1) 70%,
       
        rgb(92, 85, 86, 0.9360994397759104) 96%
        
      );
      
    ">
    <navBar />
    <section  v-motion-slide-bottom class="flex items-center justify-center max-w-2xl px-9 md:px-0 min-h-[80vh]">
    <div class="mt-10 space-y-5">
      <h1 class="text-2xl text-center">About <span class="text-brand">IaconLabs</span> </h1>
      <div >
        <p class="text-justify">
          Iaconlabs is a special community in India made up of web developers, founders of impressive NFT projects, and investors. Our journey began in April 2023, and it's a collaboration between Breeze and Wol. This isn't your typical group – we're growing and changing as time goes on. We do more than just giveaways and limited spots; we're also educating people about web 3 and helping them understand this exciting new technology.

In addition, we're here to share knowledge and provide exclusive opportunities. Our focus is on teaching people about the world of web 3, which involves the latest internet advancements. We want everyone to know about this fascinating topic and how it can change the way we experience the online world.
        </p>
      </div>
    </div>
    </section>
    </main>
    <Footer />

</template>

<script>
export default {

}
</script>

<style>

</style>
