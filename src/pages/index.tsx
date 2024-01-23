import Image from 'next/image'
import LandingPage from "@/components/LandingPage/LandingPage";
import '../app/globals.css'
import Head from 'next/head';
import Script from 'next/script'

export default function Home() {
    return (
        <main style={{height: "100%"}}>
            {/*<Head>*/}
                {/* Include external Script from a CDN */}
                <Script src="/plugins/bootstrap/dist/js/bootstrap.bundle.min.js"/>

                <Script src="/plugins/jarallax/dist/jarallax.min.js"/>
                <Script src="/plugins/jarallax/dist/jarallax-video.min.js"/>

                <Script src="/plugins/lightgallery.js/dist/js/lightgallery.min.js"/>
                <Script src="/plugins/lightgallery.js/demo/js/lg-thumbnail.min.js"/>
                <Script src="/plugins/lightgallery.js/demo/js/lg-video.js"/>

                <Script src="/plugins/aos/dist/aos.js"/>
                <Script src="/plugins/waypoints/lib/noframework.waypoints.min.js"/>
                <Script src="/plugins/counterup2/dist/index.js"/>
                <Script src="/plugins/flickity/dist/flickity.pkgd.min.js"/>
                <Script src="/plugins/typed.js/lib/typed.min.js"/>
                <Script src="/plugins/isotope-layout/dist/isotope.pkgd.min.js"/>
                <Script src="/plugins/smooth-scroll/dist/smooth-scroll.polyfills.min.js"/>
                <Script src="/plugins/vanilla-lazyload/dist/lazyload.min.js"/>
                <Script src="/plugins/hc-sticky/dist/hc-sticky.js"/>

                <Script src="/js/theme.js"/>
            {/*</Head>*/}
            <LandingPage />
        </main>
    )
}
