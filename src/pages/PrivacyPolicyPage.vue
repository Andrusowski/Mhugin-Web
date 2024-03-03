<script setup lang="ts">
import FooterContainer from '../components/FooterContainer.vue';

</script>

<template>
    <main>
        <div class="w-full min-h-screen max-w-7xl mx-auto my-12">
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><a>Privacy Policy</a></li>
                </ul>
            </div>

            <h2 class="text-4xl font-bold">Privacy Policy</h2>
            <p>Personal data (usually referred to just as "data" below) will only be processed by us to the extent
                necessary
                and for the purpose of providing a functional and user-friendly website, including its contents, and the
                services offered there.</p>
            <p>Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter
                referred to as the „GDPR“), „processing“ refers to any operation or set of operations such as
                collection,
                recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use,
                disclosure by transmission, dissemination, or otherwise making available, alignment, or combination,
                restriction, erasure, or destruction performed on personal data, whether by automated means or not.</p>
            <p>The following privacy policy is intended to inform you in particular about the type, scope, purpose,
                duration, and legal basis for the processing of such data either under our own control or in conjunction
                with others. We also inform you below about the third-party components we use to optimize our website
                and
                improve the user experience which may result in said third parties also processing data they collect and
                control.</p>
            <p>Our privacy policy is structured as follows:</p>
            <p>I. Information about us as controllers of your data<br>II. The rights of users and data subjects<br>III.
                Information about the data processing</p>
            <h3 class="text-4xl font-bold">I. Information about us as controllers of your data</h3>
            <p>The party responsible for this website (the „controller“) for purposes of data protection law is:</p> c/o
            IP-Management #24947<br>Andreas Saks<br>Ludwig-Erhard-Str. 18<br>20459 Hamburg <p>Phone:
                025113396512<br>E-Mail:
                legal@andrus.io</p>
            <h3 class="text-4xl font-bold">II. The rights of users and data subjects</h3>
            <p>With regard to the data processing to be described in more detail below, users and data subjects have the
                right</p>
            <ul>
                <li>to confirmation of whether data concerning them is being processed, information about the data being
                    processed, further information about the nature of the data processing, and copies of the data (cf.
                    also
                    Art. 15 GDPR);</li>
                <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
                <li>to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if
                    further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing
                    per
                    Art. 18 GDPR;</li>
                <li>to receive copies of the data concerning them and/or provided by them and to have the same
                    transmitted
                    to other providers/controllers (cf. also Art. 20 GDPR);</li>
                <li>to file complaints with the supervisory authority if they believe that data concerning them is being
                    processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).</li>
            </ul>
            <p>In addition, the controller is obliged to inform all recipients to whom it discloses data of any such
                corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR.
                However, this obligation does not apply if such notification is impossible or involves a
                disproportionate
                effort. Nevertheless, users have a right to information about these recipients.</p>
            <p><strong>Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the
                    controller’s
                    future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection
                    to
                    data processing for the purpose of direct advertising is permissible.</strong></p>
            <h3 class="text-4xl font-bold">III. Information about the data processing</h3>
            <p>Your data processed when using our website will be deleted or blocked as soon as the purpose for its
                storage
                ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations
                or
                unless otherwise stipulated below.</p>
            <h4 class="text-3xl font-semibold">Server data</h4>
            <p>For technical reasons, the following data sent by your internet browser to us or to our server provider
                will be collected, especially to ensure a secure and stable website: These server log files record the
                type and version of your browser, operating system, the website from which you came (referrer URL), the
                webpages on our site visited, the date and time of your visit, as well as the IP address from which you
                visited our site.</p>
            <p>The data thus collected will be temporarily stored, but not in association with any other of your data.
            </p>
            <p>The basis for this storage is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the
                improvement, stability, functionality, and security of our website.</p>
            <p>The data will be deleted within no more than seven days, unless continued storage is required for
                evidentiary purposes. In which case, all or part of the data will be excluded from deletion until the
                investigation of the relevant incident is finally resolved.</p>
            <h4 class="text-3xl font-semibold">Ackee</h4>
            <p>Our website uses Ackee. This is open-source software with which we can analyze the use of our site. Data
                such
                as your IP address, the pages you visit, the website from which you came (referrer URL) and the duration
                of
                your visit is processed.</p>
            <p>No personally identifyable information is stored in Ackee and no cookies are used to track you between
                sessions.</p>
            <p><a href="https://www.generator-datenschutzerklärung.de" target="_blank" rel="noopener">Model Data
                    Protection
                    Statement</a> for <a href="https://www.bewertung-löschen24.de" rel="nofollow noopener"
                    target="_blank">Anwaltskanzlei Weiß &amp; Partner</a></p><br>
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
