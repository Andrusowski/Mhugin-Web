<script setup lang="ts">
import FooterContainer from '../components/FooterContainer.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXTwitter, faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import MockupPhone from '@/components/MockupPhone.vue';
import imageBg from '../assets/images/bg.png?w=500&format=webp';
import imageMap from '../assets/images/screenshot_map.png?w=640&format=webp';
import imageScout from '../assets/images/screenshot_scout.png?w=640&format=webp';
import imageBattle from '../assets/images/screenshot_battle.png?w=640&format=webp';
import imageShop from '../assets/images/screenshot_shop.png?w=640&format=webp';

library.add(faXTwitter, faRedditAlien);

</script>

<template>

  <main class="flex flex-col items-center">
    <div class="main-content w-full mx-auto min-h-screen flex justify-center">
      <div class="background" :style="{ background: `url(${imageBg})`, backgroundSize: 'cover' }"></div>
      <div class="grid max-w-7xl flex items-center justify-items-center my-60 lg:my-0 gap-8 mx-10 lg:h-screen lg:grid-cols-2">
        <div class="flex flex-col">
          <p class="text-2xl font-medium">In development</p>
          <h1 class="mb-4 text-8xl font-bold">Mhugin</h1>
          <p class="mb-6 max-w-lg text-2xl">
            A GPS-based mobile game focussed on real life exploration and resource management.<br/>
            Coming to Android and iOS.<br/><br/>
            Currently in early development. More details coming soon!
          </p>
          <div class="mt-4 text-2xl flex flex-col items-center">
            <div class="flex mt-4 gap-4">
              <a href="https://twitter.com/mhugin_game"><FontAwesomeIcon :icon="['fab', 'x-twitter']" /></a>
              <a href="https://www.reddit.com/r/Mhugin"><FontAwesomeIcon :icon="['fab', 'reddit-alien']" /></a>
            </div>
          </div>
        </div>

        <MockupPhone class="mt-24" :img-src="imageMap"/>
      </div>
    </div>
    <div class="grid max-w-7xl flex items-center justify-items-center gap-8 mx-10 my-15 lg:my-30 lg:grid-cols-2">
      <MockupPhone class="order-2 lg:order-1" :img-src="imageScout"/>
      <div class="max-w-lg order-1 lg:order-2">
        <h2 class="text-5xl text-center lg:text-left">Conquer the world</h2>
        <p class="text-2xl text-center lg:text-left">Explore the worldwide grid and spread your influence cell by cell.</p>
      </div>
    </div>

    <div class="grid max-w-7xl flex items-center justify-items-center gap-8 mx-10 my-15 lg:my-30 lg:grid-cols-2">
      <div class="max-w-lg">
        <h2 class="text-5xl text-center lg:text-left">Control the market</h2>
        <p class="text-2xl text-center lg:text-left">Research local market prices, find the best deals and sell your products to the highest bidder.</p>
      </div>
      <MockupPhone :img-src="imageShop"/>
    </div>

    <div class="grid max-w-7xl flex items-center justify-items-center gap-8 mx-10 mt-15 mb-60 lg:my-30 lg:grid-cols-2">
      <MockupPhone class="order-2 lg:order-1" :img-src="imageBattle"/>
      <div class="max-w-lg order-1 lg:order-2">
        <h2 class="text-5xl text-center lg:text-left">Dominate the battlefield</h2>
        <p class="text-2xl text-center lg:text-left">Defeat roaming monsters to make each cell secure and gain access to its resources.</p>
      </div>
    </div>
  </main>
  <footer class="footer p-10 bg-black text-neutral-content text-xl">
    <FooterContainer />
  </footer>
</template>

<style scoped>
.background {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  width: 100%;
  height: 100%;
  transform: scale(1.03);
  overflow:hidden;
  filter: blur(30px);
}
</style>
