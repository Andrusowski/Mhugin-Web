<script setup lang="ts">
import FooterContainer from '../components/FooterContainer.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXTwitter, faRedditAlien } from '@fortawesome/free-brands-svg-icons';

library.add(faXTwitter, faRedditAlien);

</script>

<template>

  <main>
    <div class="max-w-7xl my-60 lg:my-0 mx-auto">
      <div class="w-full min-h-screen">
        <div class="grid flex items-center justify-items-center gap-8 mx-10 lg:h-screen lg:grid-cols-2">
          <div class="flex flex-col">
            <p class="text-2xl font-medium">In development</p>
            <h1 class="mb-4 text-8xl font-bold">Mhugin</h1>
            <p class="mb-6 max-w-lg text-2xl">
              A GPS-based mobile game focussed on real life exploration and resource management.<br/>
              Coming to Android and iOS.<br/><br/>
              Currently in early development. More details coming soon!
            </p>
            <a href="https://mhugin.beehiiv.com/subscribe" class="btn btn-primary text-2xl">Subscribe to the Newsletter</a>
            <div class="mt-4 text-2xl flex flex-col items-center">
              <p>Or follow on</p>
              <div class="flex mt-4 gap-4">
                <a href="https://twitter.com/mhugin_game"><FontAwesomeIcon :icon="['fab', 'x-twitter']" /></a>
                <a href="https://www.reddit.com/r/Mhugin"><FontAwesomeIcon :icon="['fab', 'reddit-alien']" /></a>
              </div>
            </div>
          </div>

          <div class="mockup-phone border-primary mt-24 lg:mt-0 puff-in-center">
            <div class="camera"></div>
            <div class="display">
              <div class="artboard artboard-demo w-80">
                <img src="../assets/images/screenshot_map.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer p-10 bg-neutral text-neutral-content text-xl">
    <FooterContainer />
  </footer>
</template>

<style scoped></style>
