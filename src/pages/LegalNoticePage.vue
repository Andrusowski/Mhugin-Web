<script setup lang="ts">
import FooterContainer from '../components/FooterContainer.vue';

</script>

<template>
    <main>
        <div class="w-full min-h-screen max-w-7xl mx-auto my-12">
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><a>Legal Notice</a></li>
                </ul>
            </div>

            <h1 class="text-4xl font-bold mb-2">Legal Notice</h1>
            <h2 class="text-2xl font-semibold">Information according to § 5 TMG</h2>
            <p>Andreas Saks<br> Ludwig-Erhard-Str. 18<br> c/o IP-Management #24947<br> 20459 Hamburg</p>
            <h2 class="text-2xl font-semibold">Contact</h2>
            <p>Phone: 025113396512<br> E-Mail: legal@andrus.io</p><br>
        </div>
    </main>

    <footer class="footer p-10 bg-neutral text-neutral-content text-xl">
        <FooterContainer />
    </footer>
</template>

<style scoped>
main {
    font-family: 'Courier New', Courier, monospace;
}

p {
    margin-bottom: 1.5rem;
}
</style>
