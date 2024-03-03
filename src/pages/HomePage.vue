<script setup lang="ts">
import FooterContainer from '../components/FooterContainer.vue';

</script>

<template>

  <main>
    <div class="max-w-7xl mx-auto">
      <div class="w-full min-h-screen">
        <div class="grid flex items-center justify-items-center gap-8 mx-10 h-screen lg:grid-cols-2">
          <div class="flex flex-col">
            <p class="text-2xl font-medium">In development</p>
            <h1 class="mb-4 text-8xl font-bold">Mhugin</h1>
            <p class="mb-6 max-w-lg text-2xl text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus</p>
            <a href="https://mhugin.beehiiv.com/subscribe" class="btn btn-primary text-2xl">Subcribe to the
              Newsletter</a>
          </div>

          <div class="mockup-phone">
            <div class="camera"></div>
            <div class="display">
              <div class="artboard artboard-demo w-80">
                <img src="../assets/images/screenshot_map.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid flex items-center justify-items-center gap-8 mx-10 py-12 lg:grid-cols-2">
        <div class="mockup-phone">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo w-80">
              <img src="./assets/images/screenshot_map.jpg" />
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <h2 class="mb-4 text-6xl font-semibold">Explore and keep track of your travel</h2>
          <p class="mb-6 max-w-lg text-2xl text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus</p>
        </div>
      </div>

      <div class="grid flex items-center justify-items-center gap-8 mx-10 py-12 lg:grid-cols-2">
        <div class="flex flex-col">
          <h2 class="mb-4 text-6xl font-semibold">Conquer areas and gain control</h2>
          <p class="mb-6 max-w-lg text-2xl text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus</p>
        </div>

        <div class="mockup-phone">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo w-80">
              <img src="./assets/images/screenshot_map.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div class="grid flex items-center justify-items-center gap-8 mx-10 pt-12 pb-72 lg:grid-cols-2">
        <div class="mockup-phone">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo w-80">
              <img src="./assets/images/screenshot_map.jpg" />
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <h2 class="mb-4 text-6xl font-semibold">Grow and compete with others</h2>
          <p class="mb-6 max-w-lg text-2xl text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus</p>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer p-10 bg-neutral text-neutral-content text-xl">
    <FooterContainer />
  </footer>
</template>

<style scoped></style>
