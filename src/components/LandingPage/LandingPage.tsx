import Form from "@/components/Forms/Form"
import {useState} from "react";
import ProgressBar from "@/components/LandingPage/components/ProgressBar";
import NavBar from "@/components/LandingPage/components/NavBar";

enum FormType {
    REGISTRATION= 'REGISTRATION',
    LOGIN = "LOGIN"
}
export default function LandingPage() {
    const [formTypeState, setFormTypeState] = useState<FormType>(FormType.LOGIN)

    const [show, setShow] = useState(false)

    return (
        // <main className="w-200" style={{height: "100%"}}>
        //     <h1 className="mx-auto w-fit text-4xl relative right-96 mt-2">Academis</h1>
        //     <div className="flex justify-evenly w-60 mx-auto relative top-20">
        //         <button onClick={() => setFormTypeState(FormType.LOGIN)} className={formTypeState === FormType.LOGIN ? "px-2 py-2 border-fuchsia-900 border-4 rounded-md text-white bg-fuchsia-900" : "px-2 py-2 border-fuchsia-900 border-4 rounded-md hover:text-white hover:bg-fuchsia-900"}>Login</button>
        //         <button onClick={() => setFormTypeState(FormType.REGISTRATION)} className={formTypeState === FormType.REGISTRATION ? "px-2 py-2 border-fuchsia-900 border-4 rounded-md text-white bg-fuchsia-900" : "px-2 py-2 border-fuchsia-900 border-4 rounded-md hover:text-white hover:bg-fuchsia-900"}>Register</button>
        //     </div>
        //     <Form formType={formTypeState}/>
        // </main>
        <main>
            <ProgressBar />
            <NavBar />
            <section className="hero section bg-gradient-primary py-8 py-lg-9 overflow-hidden">
                <div className="overlay bg-gradient-primary opacity-90 z-index-n1"></div>

                <div className="particle">
                    <div className="particle-move-up d-none d-lg-block particle-move-up-1 text-light z-index-n1 opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-315" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 512 512"><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path className="text-warning" fill="currentColor" d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                    </div>
                    <div className="particle-move-up particle-move-up-2 text-light z-index-n1 opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-315" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 512 512"><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path className="text-warning" fill="currentColor" d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                    </div>
                    <div className="particle-move-up d-none d-sm-block particle-move-up-3 text-light z-index-n1 opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-315" width="1.5rem" height="1.5rem" fill="currentColor" viewBox="0 0 512 512"><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path className="text-warning" fill="currentColor" d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                    </div>
                    <div className="particle-move-up d-none d-xl-block particle-move-up-4 text-light z-index-n1 opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-315" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 512 512"><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path className="text-warning" fill="currentColor" d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                    </div>
                    <div className="particle-move-up d-none d-sm-block particle-move-up-5 text-light z-index-n1 opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-315" width="1.2rem" height="1.2rem" fill="currentColor" viewBox="0 0 512 512"><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path className="text-warning" fill="currentColor" d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                    </div>
                    <div className="particle-move-up border-success text-light particle-move-up-6 z-index-n1 opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-315" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 512 512"><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path className="text-warning" fill="currentColor" d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                    </div>
                    <div className="particle-move-up particle-move-up-7 z-index-n1 text-light opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-315" width="1.5rem" height="1.5rem" fill="currentColor" viewBox="0 0 512 512"><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path className="text-warning" fill="currentColor" d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                    </div>
                    <div className="particle-move-up particle-move-up-8 z-index-n1 text-light opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-315" width="1.2rem" height="1.2rem" fill="currentColor" viewBox="0 0 512 512"><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path className="text-warning" fill="currentColor" d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                    </div>
                    <div className="particle-move-up particle-move-up-9 z-index-n1 text-light opacity-60">
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-315" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 512 512"><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path className="text-warning" fill="currentColor" d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                    </div>
                </div>
                <figure className="scribble scale-4 opacity-10 top-50 start-0 z-index-n1 aos-init aos-animate" data-aos="fade-up-right" data-delay-aos="300">
                    <svg className="text-secondary" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z" transform="translate(100 100)"></path>
                    </svg>
                </figure>
                <figure className="scribble scale-5 opacity-10 top-50 start-0 z-index-n1 aos-init aos-animate" data-aos="fade-up-right" data-delay-aos="200">
                    <svg className="text-secondary" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z" transform="translate(100 100)"></path>
                    </svg>
                </figure>
                <figure className="scribble scale-6 opacity-10 top-50 start-0 z-index-n1 aos-init aos-animate" data-aos="fade-up-right" data-delay-aos="100">
                    <svg className="text-secondary" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z" transform="translate(100 100)"></path>
                    </svg>
                </figure>
                <figure className="scribble scale-7 opacity-10 top-50 start-0 z-index-n1 aos-init aos-animate" data-aos="fade-up-right">
                    <svg className="text-secondary" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z" transform="translate(100 100)"></path>
                    </svg>
                </figure>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-6 align-self-center pe-lg-5 aos-init aos-animate" data-aos="flip-up">
                            <div className="text-center text-lg-start mt-4 mt-lg-0">
                                <div className="mb-3">
                                    <span className="badge bg-secondary rounded">New</span>
                                    <span className="text-light ms-1">Video Calling is now available!</span>
                                </div>
                                <div className="mb-5">
                                    <h1 className="display-5 fw-bold text-white mb-3"><span className="text-warning">Do everything</span><br /> All At Once. <span data-toggle="typed" data-options='{"strings": ["StartUp", "Apps", "Company", "Portfolio"]}'></span>
                                    </h1>
                                    <p className="lead text-light">Traverse is a onestop shop for all your social and entertainment needs. It's meant to delete every other app.</p>
                                </div>
                                <a className="btn btn-white hover-button-up" href="#performance" style={{display: "flex", width: "170px"}}>

                                    <svg xmlns="http://www.w3.org/2000/svg" className="me-1" width="1.2rem" height="1.2rem" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M315.27,33,96,304H224L192.49,477.23a2.36,2.36,0,0,0,2.33,2.77h0a2.36,2.36,0,0,0,1.89-.95L416,208H288L319.66,34.75A2.45,2.45,0,0,0,317.22,32h0A2.42,2.42,0,0,0,315.27,33Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path>
                                    </svg> <>Get Started</>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-9 col-lg-6 align-self-center">
                            <div className="px-3 px-sm-7 px-md-2 px-xl-7 mt-5 mt-lg-0 mb-n9 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                                <img className="img-fluid animated-up-down" src="/img-min/svg/start_up.svg" alt="images title" />
                            </div>
                        </div>
                    </div>

                </div>

                <figure className="waves-bottom-center text-light-dark mb-lg-n4 z-index-n1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="opacity-20 translate-top-2" fill="currentColor" fill-opacity="1" d="M0,160L60,186.7C120,213,240,267,360,245.3C480,224,600,128,720,106.7C840,85,960,139,1080,149.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        <path className="opacity-30 translate-top-1" fill="currentColor" fill-opacity="1" d="M0,160L60,186.7C120,213,240,267,360,245.3C480,224,600,128,720,106.7C840,85,960,139,1080,149.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        <path fill="currentColor" fill-opacity="1" d="M0,160L60,186.7C120,213,240,267,360,245.3C480,224,600,128,720,106.7C840,85,960,139,1080,149.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </figure>
            </section>

            <div className="text-center phone-hide" style={{marginTop: "-50px", position: "relative", zIndex: "20"}}>
                <h2 className="italic text-center">Created by: Isfar, Farhan, Bryan, Junming, Ayan</h2>
            </div>

            <a href="#features" className="phone-hide"><img src="/img/arrow.svg" className="arrow" /></a>

            <div id="features" className="section pt-6 pt-md-7 pb-4 pb-md-5 bg-light-dark" >
                <div className="container" style={{paddingTop: "50px"}}>
                    
                    <div className="row text-center">
                        <div className="col-12">
                            <div className="mb-5">
                                <h2 className="h3 fw-bold">Core Features</h2>
                                <hr className="divider my-4 mx-auto bg-warning border-warning" />
                                    <p className="lead text-muted">Modern features that will make your project easier.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up">
                            
                            <div className="p-4 mb-5 rounded-3 bg-body shadow-sm hover-box-up">
                                <div className="text-primary mb-3">
                                    
                                    
                                    <svg className="bi bi-bootstrap" width="3rem" height="3rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4z" clip-rule="evenodd"></path>
                                        <path fill-rule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="h5">Latest Bootstrap 5</h3>
                                <p className="text-muted">Supported latest Bootstrap 5, most popular front-end component library.</p>
                            </div> 
                        </div>

                        <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up" data-aos-delay="100">
                            
                            <div className="p-4 mb-5 rounded-3 bg-body shadow-sm hover-box-up">
                                <div className="text-primary mb-3">
                                    
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" enable-background="new 0 0 2459.5 2079.2" viewBox="0 0 2459.5 2079.2"><path className="opacity-80" d="m2177.5 1535.7h-830.9c-13.4 0-26.4 4.5-36.9 12.9l-619.2 492.3c-16 12.7-7 38.3 13.5 38.3h1483c146.6 0 278.4-131.6 268.1-289.9-9.4-144.4-132.4-253.6-277.6-253.6" fill="currentColor"/><path d="m1505.3 1021.8c0-.7-.1-1.4-.2-2.2-4.6-74.2-39.5-146.3-102.9-195.8l-964-766.4c-117.7-92-288-71.3-380.4 46.1-92.4 117.5-71.8 287.2 45.8 379.2l698.9 555.6-698.9 555.6c-117.6 91.9-138.2 261.7-45.8 379.1s262.7 138.1 380.4 46.1l964.1-766.5c63.4-49.5 98.3-121.6 102.9-195.8.1-.7.1-1.4.2-2.2.3-5.5.4-10.9.4-16.4 0-5.4-.2-10.9-.5-16.4" fill="currentColor"/><path d="m2459.5 1807.4c0 150.1-121.9 271.7-272.5 271.7-150.4 0-272.3-121.7-272.3-271.7s121.9-271.7 272.3-271.7c150.6 0 272.5 121.7 272.5 271.7" fill="currentColor"/></svg>

                                </div>
                                <h3 className="h5">Google Web Vitals</h3>
                                <p className="text-muted">Optimized by core web vital features from Google Web.Dev.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up" data-aos-delay="200">
                            
                            <div className="p-4 mb-5 rounded-3 bg-body shadow-sm hover-box-up">
                                <div className="text-primary mb-3">
                                    
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" viewBox="0 0 512 512"><path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z"/></svg>

                                </div>
                                <h3 className="h5">Vanilla Javascript</h3>
                                <p className="text-muted">Template and major plugins using pure vanilla javascript.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up">
                            
                            <div className="p-4 mb-5 rounded-3 bg-body shadow-sm hover-box-up">
                                <div className="text-primary mb-3">
                                    
                                    
                                    <svg width="3rem" height="3rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 6a6 6 0 1112 0A6 6 0 010 6z"></path>
                                        <path d="M12.93 5h1.57a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1.57a6.953 6.953 0 01-1-.22v1.79A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4h-1.79c.097.324.17.658.22 1z"></path>
                                    </svg>
                                </div>
                                <h3 className="h5">Pure Svg Icons</h3>
                                <p className="text-muted">In default, we use pure svg icon. This is the icon for the modern web.</p>
                            </div> 
                        </div>

                        <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up" data-aos-delay="100">
                            
                            <div className="p-4 mb-5 rounded-3 bg-body shadow-sm hover-box-up">
                                <div className="text-primary mb-3">
                                    
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="3rem" viewBox=".06996735 .173 130.05906531 125.30503265" width="3rem"><linearGradient id="a"><stop offset="0" stop-color="currentColor"/><stop offset="1" stop-color="currentColor"/></linearGradient><linearGradient id="b" x1="38.056%" x2="69.819%" xlinkHref="#a" y1="42.162%" y2="108.782%"/><linearGradient id="c" x1="5.867%" x2="48.514%" xlinkHref="#a" y1="1.842%" y2="100.616%"/><linearGradient id="d" x1="11.804%" x2="51.371%" y1="-2.162%" y2="102.471%"><stop offset="0" stop-color="#fff" stop-opacity=".549"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><radialGradient id="e"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="currentColor" stop-opacity=".891"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></radialGradient><g fill="none" fill-rule="evenodd"><path d="m17.978 20.869h15.782v15.856h-15.782z" fill="#000" stroke="#000" stroke-width="2.902"/><path d="m10.515 28.673h109.169a9.5 9.5 0 0 1 9.52 9.52v76.84a9.5 9.5 0 0 1 -9.52 9.52h-109.169a9.5 9.5 0 0 1 -9.52-9.52v-76.84a9.5 9.5 0 0 1 9.52-9.52z" fill="#000" stroke="#000" stroke-width="3.605"/><g stroke="currentColor"><path d="m17.978 20.869h15.782v15.856h-15.782z" fill="url(#b)" stroke-width="2.902"/><g stroke-width="3.605"><path d="m10.515 28.673h109.169a9.5 9.5 0 0 1 9.52 9.52v76.84a9.5 9.5 0 0 1 -9.52 9.52h-109.169a9.5 9.5 0 0 1 -9.52-9.52v-76.84a9.5 9.5 0 0 1 9.52-9.52z" fill="url(#c)"/><path d="m88.549 76.613c0 12.951-10.499 23.45-23.45 23.45-12.95 0-23.449-10.499-23.449-23.45 0-12.95 10.499-23.45 23.45-23.45 12.95 0 23.449 10.5 23.449 23.45z" fill="#fff" fill-rule="nonzero"/></g></g><path d="m13.103 32.047h103.56c6.762 0 9.033 2.835 9.033 8.82v71.182c0 5.985-2.49 8.82-9.032 8.82h-103.561c-6.761 0-9.032-2.615-9.032-8.82v-71.182c0-6.644 2.93-8.82 9.032-8.82z" stroke="url(#d)" stroke-linejoin="round" stroke-width="3.38"/><circle className="opacity-80" cx="99.641" cy="24.934" fill="url(#e)" fill-rule="nonzero" r="24.761"/></g></svg>
                                </div>
                                <h3 className="h5">Webp Images</h3>
                                <p className="text-muted">All png and jpg asset images are compressed to webp format.</p>
                            </div> 
                        </div>

                        <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up" data-aos-delay="200">
                            
                            <div className="p-4 mb-5 rounded-3 bg-body shadow-sm hover-box-up">
                                <div className="text-primary mb-3">
                                    
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" viewBox="0 0 512 512"><polyline points="160 368 32 256 160 144" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/><polyline points="352 368 480 256 352 144" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/><line x1="304" y1="96" x2="208" y2="416" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/></svg>

                                </div>
                                <h3 className="h5">Premium plugins</h3>
                                <p className="text-muted">Included premium plugins Lightgallery, Isotope and Flickity.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up">
                            
                            <div className="p-4 mb-5 rounded-3 bg-body shadow-sm hover-box-up">
                                <div className="text-primary mb-3">
                                    
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 512 512"><rect x="227.6" y="213.1" width="28.4" height="57.1" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></rect><path d="M0,156V327.4H142.2V356H256V327.4H512V156ZM142.2,298.9H113.8V213.2H85.3v85.7H28.4V184.6H142.2Zm142.2,0H227.5v28.6H170.6V184.6H284.4V298.9Zm199.2,0H455.2V213.2H426.8v85.7H398.4V213.2H370v85.7H313.1V184.6H483.8V298.9Z" style={{fill:"currentColor"}}></path></svg>

                                </div>
                                <h3 className="h5">NPM Software</h3>
                                <p className="text-muted">Enjoy with the public registry tools you already love to use.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up" data-aos-delay="100">
                            
                            <div className="p-4 mb-5 rounded-3 bg-body shadow-sm hover-box-up">
                                <div className="text-primary mb-3">
                                    
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="3rem" height="3rem" viewBox="0 0 256 512"><path style={{fill:"currentColor"}} d="M209.8 391.1l-14.1 24.6-4.6 80.2c0 8.9-28.3 16.1-63.1 16.1s-63.1-7.2-63.1-16.1l-5.8-79.4-14.9-25.4c41.2 17.3 126 16.7 165.6 0zm-196-253.3l13.6 125.5c5.9-20 20.8-47 40-55.2 6.3-2.7 12.7-2.7 18.7.9 5.2 3 9.6 9.3 10.1 11.8 1.2 6.5-2 9.1-4.5 9.1-3 0-5.3-4.6-6.8-7.3-4.1-7.3-10.3-7.6-16.9-2.8-6.9 5-12.9 13.4-17.1 20.7-5.1 8.8-9.4 18.5-12 28.2-1.5 5.6-2.9 14.6-.6 19.9 1 2.2 2.5 3.6 4.9 3.6 5 0 12.3-6.6 15.8-10.1 4.5-4.5 10.3-11.5 12.5-16l5.2-15.5c2.6-6.8 9.9-5.6 9.9 0 0 10.2-3.7 13.6-10 34.7-5.8 19.5-7.6 25.8-7.6 25.8-.7 2.8-3.4 7.5-6.3 7.5-1.2 0-2.1-.4-2.6-1.2-1-1.4-.9-5.3-.8-6.3.2-3.2 6.3-22.2 7.3-25.2-2 2.2-4.1 4.4-6.4 6.6-5.4 5.1-14.1 11.8-21.5 11.8-3.4 0-5.6-.9-7.7-2.4l7.6 79.6c2 5 39.2 17.1 88.2 17.1 49.1 0 86.3-12.2 88.2-17.1l10.9-94.6c-5.7 5.2-12.3 11.6-19.6 14.8-5.4 2.3-17.4 3.8-17.4-5.7 0-5.2 9.1-14.8 14.4-21.5 1.4-1.7 4.7-5.9 4.7-8.1 0-2.9-6-2.2-11.7 2.5-3.2 2.7-6.2 6.3-8.7 9.7-4.3 6-6.6 11.2-8.5 15.5-6.2 14.2-4.1 8.6-9.1 22-5 13.3-4.2 11.8-5.2 14-.9 1.9-2.2 3.5-4 4.5-1.9 1-4.5.9-6.1-.3-.9-.6-1.3-1.9-1.3-3.7 0-.9.1-1.8.3-2.7 1.5-6.1 7.8-18.1 15-34.3 1.6-3.7 1-2.6.8-2.3-6.2 6-10.9 8.9-14.4 10.5-5.8 2.6-13 2.6-14.5-4.1-.1-.4-.1-.8-.2-1.2-11.8 9.2-24.3 11.7-20-8.1-4.6 8.2-12.6 14.9-22.4 14.9-4.1 0-7.1-1.4-8.6-5.1-2.3-5.5 1.3-14.9 4.6-23.8 1.7-4.5 4-9.9 7.1-16.2 1.6-3.4 4.2-5.4 7.6-4.5.6.2 1.1.4 1.6.7 2.6 1.8 1.6 4.5.3 7.2-3.8 7.5-7.1 13-9.3 20.8-.9 3.3-2 9 1.5 9 2.4 0 4.7-.8 6.9-2.4 4.6-3.4 8.3-8.5 11.1-13.5 2-3.6 4.4-8.3 5.6-12.3.5-1.7 1.1-3.3 1.8-4.8 1.1-2.5 2.6-5.1 5.2-5.1 1.3 0 2.4.5 3.2 1.5 1.7 2.2 1.3 4.5.4 6.9-2 5.6-4.7 10.6-6.9 16.7-1.3 3.5-2.7 8-2.7 11.7 0 3.4 3.7 2.6 6.8 1.2 2.4-1.1 4.8-2.8 6.8-4.5 1.2-4.9.9-3.8 26.4-68.2 1.3-3.3 3.7-4.7 6.1-4.7 1.2 0 2.2.4 3.2 1.1 1.7 1.3 1.7 4.1 1 6.2-.7 1.9-.6 1.3-4.5 10.5-5.2 12.1-8.6 20.8-13.2 31.9-1.9 4.6-7.7 18.9-8.7 22.3-.6 2.2-1.3 5.8 1 5.8 5.4 0 19.3-13.1 23.1-17 .2-.3.5-.4.9-.6.6-1.9 1.2-3.7 1.7-5.5 1.4-3.8 2.7-8.2 5.3-11.3.8-1 1.7-1.6 2.7-1.6 2.8 0 4.2 1.2 4.2 4 0 1.1-.7 5.1-1.1 6.2 1.4-1.5 2.9-3 4.5-4.5 15-13.9 25.7-6.8 25.7.2 0 7.4-8.9 17.7-13.8 23.4-1.6 1.9-4.9 5.4-5 6.4 0 1.3.9 1.8 2.2 1.8 2 0 6.4-3.5 8-4.7 5-3.9 11.8-9.9 16.6-14.1l14.8-136.8c-30.5 17.1-197.6 17.2-228.3.2zm229.7-8.5c0 21-231.2 21-231.2 0 0-8.8 51.8-15.9 115.6-15.9 9 0 17.8.1 26.3.4l12.6-48.7L228.1.6c1.4-1.4 5.8-.2 9.9 3.5s6.6 7.9 5.3 9.3l-.1.1L185.9 74l-10 40.7c39.9 2.6 67.6 8.1 67.6 14.6zm-69.4 4.6c0-.8-.9-1.5-2.5-2.1l-.2.8c0 1.3-5 2.4-11.1 2.4s-11.1-1.1-11.1-2.4c0-.1 0-.2.1-.3l.2-.7c-1.8.6-3 1.4-3 2.3 0 2.1 6.2 3.7 13.7 3.7 7.7.1 13.9-1.6 13.9-3.7z"/></svg>

                                </div>
                                <h3 className="h5">Built with Gulp</h3>
                                <p className="text-muted">Gulp making your project automatic and easy to running.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 px-4 px-md-3" data-aos="fade-up" data-aos-delay="200">
                            
                            <div className="p-4 mb-5 rounded-3 bg-body shadow-sm hover-box-up">
                                <div className="text-primary mb-3">
                                    
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 512 512"><path style={{fill:"currentColor"}} d="M511.78,328.07v0c-1.47-11.92-7.51-22.26-18-30.77a3.58,3.58,0,0,0-.43-.44l0,0-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5,0,0a3.5,3.5,0,0,0-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09C383.28,271.36,382.07,257,389.2,235c1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54,2.86-6.2,5.83-4.7,22-18.36,42.1-31.57,61.5l-.78,1.14c-8.14-17.26-6.45-30.63-.78-47.38,1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62,1.93-13.72,19.82-21.65,41.24-2,5.39-3.72,10-4.75,12.15-2.45,5-4.79,10.7-7.27,16.75-5.6,13.69-11.91,29.1-20.93,38.78-3.28-7.25,1.88-18.68,6.89-29.77,5.93-13.11,11.53-25.5,5.08-33.41a11.82,11.82,0,0,0-8.33-4.32,13.26,13.26,0,0,0-6.15,1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48,14.88-45.75,26.8-6.84,8-22,14.1-35.31,19.45C129.37,305,124.37,307,120.2,309c-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11,42-65.14,79.88-84.43,28.71-14.6,53.67-24.28,76.31-29.57,31.8-7.43,58.66-5.93,79.82,4.44,11.58,5.67,17,18,13.56,30.68-9,32.95-46.29,55.53-78.18,65.69-19.21,6.12-35.56,8.68-50,7.84-18.1-1.05-32.88-10.13-39.2-14a21.18,21.18,0,0,0-3.2-1.8l-.29-.07a3.21,3.21,0,0,0-3.19,1c-1.3,1.55-.84,4-.37,5.24,6.15,16.07,18.85,26.22,37.74,30.17a92.09,92.09,0,0,0,18.78,1.79c44.21,0,100.62-25.49,121.34-46.48,14.13-14.3,24.42-29,28.68-54.35,4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5,12.21-82.4,34.41-114.94,60.93-40.12,32.67-54.62,63-43.12,90.25,11.81,27.93,40.61,45.4,68.46,62.3,9,5.45,17.56,10.64,25.27,16-2.32,1.13-4.69,2.28-7.1,3.43C67.06,335,40.54,347.75,25.83,368.82c-10.68,15.35-12.68,30.63-5.94,45.42,3.6,7.87,10,13.21,18.89,15.87A50,50,0,0,0,53,432c17.31,0,36.36-7,46.73-13.47,18.32-11.5,30.19-26.94,35.29-45.89,4.54-16.86,3.45-33.61-3.15-48.56l22.45-11.32c-10.83,36-2.53,57.5,6.59,69.36,3.36,4.37,9.42,7,16.19,7.12s13-2.43,16.52-6.77c6.66-8.25,11.58-17.9,16.11-27.55-.24,6.3.06,12.68,2.21,18.09,1.93,4.87,5.11,8.1,9.21,9.34,4.36,1.33,9.47.21,14.39-3.15,22.17-15.17,37.33-51.58,49.51-80.85,1.73-4.16,3.39-8.16,5-11.9a152.5,152.5,0,0,0,12.5,31.07c1.18,2.14,1.08,3.08-.52,4.84-2.41,2.64-5.77,5.83-9.33,9.21-10.78,10.23-24.2,23-26,34.23-.7,4.5,2.4,8.6,7.21,9.53,14.47,2.88,31.9-1.33,46.64-11.25,13.4-9,18.44-21.55,15-37.19-3.33-15.06,4.27-33.76,22.59-55.62,3,12.53,7,22.66,12.52,31.53l-.15.12c-13.34,11.65-31.62,27.6-28.78,46.95a13.35,13.35,0,0,0,5.58,9.22,14.22,14.22,0,0,0,11.2,2.06c17.47-3.67,30.62-11.06,40.18-22.57s6.07-24.27,2.85-34.17c25-6.78,47.26-6.61,68.1.5,11.7,4,20.09,10.57,24.93,19.64,6.09,11.41,2.8,21.94-9.29,29.65-3.71,2.37-5.5,3.82-5.61,5.65a2.65,2.65,0,0,0,1,2.23c1.4,1.15,5.72,3.15,15.49-3,9-5.65,14.28-13.34,15.63-23A39,39,0,0,0,511.78,328.07ZM112.05,353.13l-.1,1.28c-1.56,14.64-9,27.4-22.15,38-8.26,6.66-17.23,10.75-25.25,11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48,38.32-50.8,60.81-59.13A51.39,51.39,0,0,1,112.05,353.13ZM214.4,281.27h0c-3.7,21.09-14.49,60.9-31.45,76.35-.81.74-1.49,1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28,5-52.69,6.59-13.42,16-22.31,26.52-25a5.29,5.29,0,0,1,1.34-.19,1.58,1.58,0,0,1,1,.27A1.64,1.64,0,0,1,214.4,281.27Zm83.49,76.88c-3.19,3.33-7.56,2.88-6.53,1.66l16.24-17.24C306.29,348.5,302.42,353.41,297.89,358.15Zm67.37-14.91a14.07,14.07,0,0,1-4.93,1.39c-.46-9.07,8.33-19.28,17-26.09C379.66,328,374.89,338,365.26,343.24Z"/></svg>

                                </div>
                                <h3 className="h5">Built with Sass</h3>
                                <p className="text-muted">Change one variable from scss and the theme adapts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="performance" className="section py-6 py-md-7 bg-body">
                <div className="container">
                                        <div className="row text-center">
                        <div className="col-12">
                            <div className="mb-5">
                                <h2 className="h3 fw-bold">Onekit Test Drive</h2>
                                <hr className="divider my-4 mx-auto bg-warning border-warning" />
                                    <p className="lead text-muted">You should try "onekit" performance and features.</p>
                            </div>
                        </div>
                    </div>

                                        <div className="row mb-5 mb-lg-7">
                        <div className="col-lg-6 align-self-center">
                            <div className="px-5 px-md-7 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                                <img src="/img-min/svg/rocket_boy.svg" className="img-fluid" alt="landing page" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                                                        <ol className="process-vertical ps-0 aos-init aos-animate" data-aos="flip-up">
                                <li className="process-vertical-item">
                                    <div className="process-vertical-icon">
                                        <div className="process-vertical-icon-bg bg-light-dark me-auto rounded-circle p-2">
                      <span>
                        <svg className="bi bi-bar-chart text-primary" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V2a1 1 0 00-1-1h-2zM6 7a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm-5 4a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1v-3z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                                        </div>
                                    </div>

                                    <div className="process-vertical-content ms-lg-4">
                                        <h3 className="h5">Google Core Web Vitals</h3>
                                        <p>Test the performance of Onekit template with Google Core Web Vitals in Web.Dev.</p>
                                    </div>
                                </li>

                                <li className="process-vertical-item">
                                    <div className="process-vertical-icon">
                                        <div className="process-vertical-icon-bg bg-light-dark me-auto rounded-circle p-2">
                      <span>
                        <svg className="bi bi-lightning text-primary" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09zM4.157 8.5H7a.5.5 0 01.478.647L6.11 13.59l5.732-6.09H9a.5.5 0 01-.478-.647L9.89 2.41 4.157 8.5z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                                        </div>
                                    </div>

                                    <div className="process-vertical-content ms-lg-4">
                                        <h3 className="h5">Fast Loading Time</h3>
                                        <p>Test the loading speed of Onekit template with Google Pagespeed Insights.</p>
                                    </div>
                                </li>

                                <li className="process-vertical-item">
                                    <div className="process-vertical-icon">
                                        <div className="process-vertical-icon-bg bg-light-dark me-auto rounded-circle p-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="1.5rem" height="1.5rem" fill="currentColor" viewBox="0 0 512 512"><path d="M330.7,352l77.72-192H356.9L303.74,284.07,265.93,160H226.32L185.74,284.07l-28.63-56.53L131.21,307l26.3,45h50.7l36.68-111.27,35,111.27Z"></path><path d="M48.79,286.09H80.44a93.39,93.39,0,0,0,25.62-3.21l8.18-25.19,22.88-70.39a55.75,55.75,0,0,0-6-7.82Q113.54,160,79.59,160H0V352H48.79Zm41.9-81.92q6.89,6.92,6.88,18.52t-6,18.53q-6.64,7.62-24.44,7.61H48.79V197.25H67.21q16.59,0,23.48,6.92ZM376.85,317.61l14.79-37.25h42.69l-20.26-56.51L439.41,160,512,352H458.47l-12.4-34.39Z"></path></svg>
                      </span>
                                        </div>
                                    </div>

                                    <div className="process-vertical-content ms-lg-4">
                                        <h3 className="h5">Progressive Web App</h3>
                                        <p>Scan <a data-bs-toggle="tooltip" data-bs-placement="top" href="#qr-code" data-bs-original-title="Click to scan qr code">qr code</a> with your smartphone and open link. Click "Add to Home Screen" and site will installed like App.</p>
                                    </div>
                                </li>
                            </ol>                        </div>
                    </div>

                                        <div className="row mb-5 mb-lg-7">
                        <div className="col-lg-6 order-lg-2  align-self-center">
                            <div className="px-5 px-md-7 mb-5 my-lg-0 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
                                <img src="src/img-min/svg/coding.svg" className="img-fluid" alt="landing page" />
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-1">
                                                        <ol className="process-vertical ps-0 aos-init aos-animate" data-aos="flip-up">
                                <li className="process-vertical-item">
                                    <div className="process-vertical-icon">
                                        <div className="process-vertical-icon-bg bg-light-dark me-auto rounded-circle p-2">
                      <span>
                        <svg className="bi bi-bootstrap text-primary" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M12 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                                        </div>
                                    </div>

                                    <div className="process-vertical-content ms-lg-4">
                                        <h3 className="h5">Bootstrap 5</h3>
                                        <p>Onekit supported Bootstrap 5 with pure vanilla javascript and no Jquery dependency</p>
                                    </div>
                                </li>

                                <li className="process-vertical-item">
                                    <div className="process-vertical-icon">
                                        <div className="process-vertical-icon-bg bg-light-dark me-auto rounded-circle p-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="2rem" height="2rem" viewBox="5.006 23.881 199.987 95.238"><title>W3C Logo</title><desc>W3C is a trademark (registered in numerous countries) of the World Wide Web Consortium; marks of W3C are registered and held by its host institutions MIT, ERCIM, and Keio. For more information see: http://www.w3.org/</desc><path d="M52.352 24.412l16.955 57.643L86.26 24.412h45.965v5.73l-17.308 29.816c6.08 1.949 10.679 5.498 13.795 10.641 3.119 5.146 4.681 11.184 4.681 18.121 0 8.578-2.283 15.787-6.845 21.632-4.562 5.844-10.465 8.768-17.713 8.768-5.458 0-10.211-1.732-14.262-5.201-4.054-3.469-7.054-8.164-9.002-14.09l9.585-3.975c1.404 3.586 3.256 6.412 5.556 8.475 2.299 2.066 5.009 3.1 8.125 3.1 3.271 0 6.041-1.832 8.302-5.494 2.262-3.664 3.393-8.065 3.393-13.215 0-5.691-1.209-10.096-3.623-13.213-2.811-3.662-7.215-5.496-13.216-5.496h-4.674V64.4l16.367-28.297H95.63l-1.124 1.914-24.031 81.087h-1.169l-17.54-58.69-17.536 58.69h-1.168L5.006 24.408h12.276l16.953 57.643 11.46-38.815-5.611-18.826h12.273v-.004l-.005.006z" fill="currentColor"></path><path fill="currentColor" d="M196.02 24.412c-2.41 0-4.574.869-6.215 2.535-1.74 1.768-2.709 4.051-2.709 6.412s.922 4.549 2.611 6.266c1.717 1.74 3.928 2.686 6.314 2.686 2.334 0 4.6-.945 6.36-2.658 1.688-1.641 2.611-3.828 2.611-6.289a8.944 8.944 0 0 0-2.584-6.289c-1.7-1.745-3.94-2.663-6.38-2.663h-.008zm7.78 9.024c0 2.064-.799 3.979-2.26 5.393-1.543 1.494-3.457 2.289-5.569 2.289-1.986 0-3.949-.818-5.418-2.311-1.466-1.494-2.287-3.406-2.287-5.443 0-2.039.846-4.027 2.36-5.566 1.416-1.443 3.328-2.211 5.416-2.211 2.14 0 4.051.799 5.543 2.311 1.45 1.438 2.22 3.373 2.22 5.538h-.005zm-7.53-5.321h-3.826v10.143h1.914v-4.324h1.892l2.063 4.324h2.137l-2.264-4.621c1.465-.301 2.312-1.293 2.312-2.734.01-1.84-1.391-2.788-4.221-2.788h-.007zm-.35 1.244c1.789 0 2.609.498 2.609 1.74 0 1.191-.82 1.617-2.563 1.617h-1.616v-3.357h1.57zM180.971 23.881l1.987 12.09-7.039 13.469s-2.701-5.715-7.19-8.875c-3.781-2.664-6.246-3.244-10.101-2.449-4.948 1.021-10.562 6.938-13.01 14.234-2.931 8.727-2.959 12.953-3.063 16.832-.164 6.223.816 9.896.816 9.896s-4.275-7.906-4.234-19.486c.027-8.268 1.328-15.764 5.152-23.16 3.365-6.504 8.367-10.408 12.807-10.867 4.59-.473 8.215 1.738 11.021 4.131 2.94 2.516 5.916 8.01 5.916 8.01l6.92-13.825h.018zM181.84 92.289s-3.111 5.562-5.049 7.705c-1.939 2.145-5.408 5.918-9.691 7.807-4.283 1.887-6.529 2.24-10.764 1.836-4.229-.406-8.16-2.854-9.537-3.877-1.377-1.021-4.898-4.029-6.889-6.836-1.992-2.807-5.102-8.416-5.102-8.416s1.731 5.623 2.819 8.01c.623 1.375 2.541 5.576 5.267 9.232 2.541 3.41 7.475 9.283 14.973 10.609 7.498 1.328 12.65-2.041 13.926-2.855 1.273-.814 3.961-3.066 5.664-4.889 1.775-1.896 3.457-4.32 4.385-5.773.682-1.062 1.789-3.215 1.789-3.215l-1.79-9.331-.001-.007z"></path></svg>
                      </span>
                                        </div>
                                    </div>

                                    <div className="process-vertical-content ms-lg-4">
                                        <h3 className="h5">Validated by W3C</h3>
                                        <p>All HTML pages are validated by W3C standards, test Onekit quality code <a data-bs-toggle="tooltip" data-bs-placement="top" target="_blank" rel="noopener noreferrer" href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fonekit.madethemes.com%2F" data-bs-original-title="Click to test quality code">clik here</a> .</p>
                                    </div>
                                </li>

                                <li className="process-vertical-item">
                                    <div className="process-vertical-icon">
                                        <div className="process-vertical-icon-bg bg-light-dark me-auto rounded-circle p-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="1.5rem" height="1.5rem" fill="currentColor" viewBox="0 0 512 512"><line x1="48" y1="112" x2="336" y2="112" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></line><line x1="192" y1="64" x2="192" y2="112" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></line><polyline points="272 448 368 224 464 448" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></polyline><line x1="301.5" y1="384" x2="434.5" y2="384" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></line><path d="M281.3,112S257,206,199,277,80,384,80,384" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path><path d="M256,336s-35-27-72-75-56-85-56-85" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}></path></svg>
                      </span>
                                        </div>
                                    </div>

                                    <div className="process-vertical-content ms-lg-4">
                                        <h3 className="h5">RTL Supported</h3>
                                        <p>Supported RTL layout for Arabic, Persian, Urdu and etc. Test RTL layout <a data-bs-toggle="tooltip" data-bs-placement="top" href="index-rtl.html" data-bs-original-title="Click to test demo rtl">clik here</a></p>
                                    </div>
                                </li>
                            </ol>                        </div>
                    </div>

                                        <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="px-5 px-md-7 mb-5 my-lg-0 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                                <img src="src/img-min/svg/wallet.svg" className="img-fluid" alt="landing page" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                                                        <ol className="process-vertical ps-0 aos-init aos-animate" data-aos="flip-up">
                                <li className="process-vertical-item">
                                    <div className="process-vertical-icon">
                                        <div className="process-vertical-icon-bg bg-light-dark me-auto rounded-circle p-2">
                      <span>
                        <svg className="bi bi-arrows-fullscreen text-primary" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M1.464 10.536a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3.5a.5.5 0 01-.5-.5v-3.5a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M5.964 10a.5.5 0 010 .707l-4.146 4.147a.5.5 0 01-.707-.708L5.257 10a.5.5 0 01.707 0zm8.854-8.854a.5.5 0 010 .708L10.672 6a.5.5 0 01-.708-.707l4.147-4.147a.5.5 0 01.707 0z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M10.5 1.5A.5.5 0 0111 1h3.5a.5.5 0 01.5.5V5a.5.5 0 01-1 0V2h-3a.5.5 0 01-.5-.5zm4 9a.5.5 0 00-.5.5v3h-3a.5.5 0 000 1h3.5a.5.5 0 00.5-.5V11a.5.5 0 00-.5-.5z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M10 9.964a.5.5 0 000 .708l4.146 4.146a.5.5 0 00.708-.707l-4.147-4.147a.5.5 0 00-.707 0zM1.182 1.146a.5.5 0 000 .708L5.328 6a.5.5 0 00.708-.707L1.889 1.146a.5.5 0 00-.707 0z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M5.5 1.5A.5.5 0 005 1H1.5a.5.5 0 00-.5.5V5a.5.5 0 001 0V2h3a.5.5 0 00.5-.5z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                                        </div>
                                    </div>

                                    <div className="process-vertical-content ms-lg-4">
                                        <h3 className="h5">Lightgallery Js</h3>
                                        <p>Included Premium plugin Lightgallery.Js javascript lightbox gallery.</p>
                                    </div>
                                </li>

                                <li className="process-vertical-item">
                                    <div className="process-vertical-icon">
                                        <div className="process-vertical-icon-bg bg-light-dark me-auto rounded-circle p-2">
                      <span>
                        <svg className="bi bi-image text-primary" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M14.002 2h-12a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zm-12-1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2h-12z" clip-rule="evenodd"></path>
                          <path d="M10.648 7.646a.5.5 0 01.577-.093L15.002 9.5V14h-14v-2l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71z"></path>
                          <path fill-rule="evenodd" d="M4.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                                        </div>
                                    </div>

                                    <div className="process-vertical-content ms-lg-4">
                                        <h3 className="h5">Flickity Carousel</h3>
                                        <p>Included Premium plugin Flickity touch, responsive, flickable carousels.</p>
                                    </div>
                                </li>

                                <li className="process-vertical-item">
                                    <div className="process-vertical-icon">
                                        <div className="process-vertical-icon-bg bg-light-dark me-auto rounded-circle p-2">
                      <span>
                        <svg className="bi bi-filter text-primary" width="1.5rem" height="1.5rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M6 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                                        </div>
                                    </div>

                                    <div className="process-vertical-content ms-lg-4">
                                        <h3 className="h5">Isotope Filter</h3>
                                        <p>Included Premium plugin Isotope filter &amp; sort magical layouts.</p>
                                    </div>
                                </li>
                            </ol>                        </div>
                    </div>
                </div>

                                <figure className="waves-bottom-center z-index-n1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path className="text-light-dark" fill="currentColor" fill-opacity="1" d="M0,224L30,229.3C60,235,120,245,180,245.3C240,245,300,235,360,218.7C420,203,480,181,540,170.7C600,160,660,160,720,176C780,192,840,224,900,240C960,256,1020,256,1080,240C1140,224,1200,192,1260,186.7C1320,181,1380,203,1410,213.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    </svg>
                </figure>
            </div>

            <div id="team" className="section pt-6 pt-md-7 pb-4 pb-md-5 bg-light-dark">
                <div className="container">
                    <div className="text-center mx-auto mb-5">
                        <h2 className="h3 fw-bold"><span className="fw-light">Our</span> Team</h2>
                        <hr className="divider my-4 bg-warning border-warning" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-8 col-sm-6 col-md-5 col-lg-6">

                            <div className="team4 rounded-3 shadow-sm bg-body mb-5">

                                <div className="row g-0">
                                    <div className="col-lg-5">
                                        
                                        <div className="team-thumb z-index-1">
                                            
                                            <figure className="scribble scale-2 top-0 end-0 me-n5 mt-n6 z-index-n1 opacity-30 aos-init aos-animate" data-aos="fade-down-left">
                                                <svg className="text-white" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="currentColor" d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z" transform="translate(100 100)"></path>
                                                </svg>
                                            </figure>
                                            <img src="/img/isfar.png" className="img-fluid" alt="title image" />
                                                <div className="team-social bg-body">
                                                    <ul className="list-unstyled hover-social mb-0">
                                                        <li>
                                                            <a className="text-github" aria-label="Github link" href="https://github.com/iao233" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" className="bi bi-github">
                                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                                </svg>


                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-facebook" aria-label="Facebook link" href="https://www.facebook.com/isfar.oshir" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-instagram" aria-label="Instagram link" href="https://www.instagram.com/isfaroshir/" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path><path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path><path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-linkedin" aria-label="Linkedin link" href="https://www.linkedin.com/in/isfar-oshir/" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path></svg>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        
                                        <div className="team-info p-4">
                                            <p className="h4 mb-1">Isfar Oshir</p>
                                            <p className="text-primary mb-2">Software Engineer & Scrum Master</p>
                                            <p className="text-muted">Trying to do better.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-8 col-sm-6 col-md-5 col-lg-6">
                            
                            <div className="team4 rounded-3 shadow-sm bg-body mb-5">
                                
                                <div className="row g-0">
                                    <div className="col-lg-5">
                                        
                                        <div className="team-thumb z-index-1">
                                            
                                            <figure className="scribble scale-2 top-0 end-0 me-n5 mt-n6 z-index-n1 opacity-30 aos-init aos-animate" data-aos="fade-down-left">
                                                <svg className="text-white" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="currentColor" d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z" transform="translate(100 100)"></path>
                                                </svg>
                                            </figure>
                                            <img src="/img/bryan.png" className="img-fluid" alt="title image" />
                                                <div className="team-social bg-body">
                                                    <ul className="list-unstyled hover-social mb-0">
                                                        <li>
                                                            <a className="text-github" aria-label="Github link" href="https://github.com/briplomo1" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" className="bi bi-github">
                                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                                </svg>


                                                            </a>
                                                        </li>
                                                        {/*<li>*/}
                                                        {/*    <a className="text-facebook" aria-label="Facebook link" href="https://www.facebook.com/isfar.oshir" target="_blank">*/}

                                                        {/*        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path></svg>*/}
                                                        {/*    </a>*/}
                                                        {/*</li>*/}
                                                        <li>
                                                            <a className="text-instagram" aria-label="Instagram link" href="https://www.instagram.com/b1n4r33/" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path><path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path><path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-linkedin" aria-label="Linkedin link" href="https://www.linkedin.com/in/bryan-palomo-059b80223/" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path></svg>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        
                                        <div className="team-info p-4">
                                            <p className="h4 mb-1">Bryan Palomo</p>
                                            <p className="text-primary mb-2">Software Engineer</p>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-8 col-sm-6 col-md-5 col-lg-6">
                            
                            <div className="team4 rounded-3 shadow-sm bg-body mb-5">
                                
                                <div className="row g-0">
                                    <div className="col-lg-5">
                                        
                                        <div className="team-thumb z-index-1">
                                            
                                            <figure className="scribble scale-2 top-0 end-0 me-n5 mt-n6 z-index-n1 opacity-30 aos-init aos-animate" data-aos="fade-down-left">
                                                <svg className="text-white" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="currentColor" d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z" transform="translate(100 100)"></path>
                                                </svg>
                                            </figure>
                                            <img src="/img/farhan.png" className="img-fluid" alt="title image" />
                                                <div className="team-social bg-body">
                                                    <ul className="list-unstyled hover-social mb-0">
                                                        <li>
                                                            <a className="text-github" aria-label="Github link" href="https://github.com/fm1539" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" className="bi bi-github">
                                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                                </svg>


                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-facebook" aria-label="Facebook link" href="https://www.facebook.com/farhan.farhan.120" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-instagram" aria-label="Instagram link" href="https://www.instagram.com/farmash.87/" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path><path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path><path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-linkedin" aria-label="Linkedin link" href="https://www.linkedin.com/in/farhan-mashud/" target="_blank">

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path></svg>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        
                                        <div className="team-info p-4">
                                            <p className="h4 mb-1">Farhan Mashud</p>
                                            <p className="text-primary mb-2">Software Engineer</p>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-8 col-sm-6 col-md-5 col-lg-6">
                            
                            <div className="team4 rounded-3 shadow-sm bg-body mb-5">
                                
                                <div className="row g-0">
                                    <div className="col-lg-5">
                                        
                                        <div className="team-thumb z-index-1">
                                            
                                            <figure className="scribble scale-2 top-0 end-0 me-n5 mt-n6 z-index-n1 opacity-30 aos-init aos-animate" data-aos="fade-down-left">
                                                <svg className="text-white" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="currentColor" d="M42.5,-66.2C57.1,-56.7,72.5,-48.4,81.1,-35.3C89.8,-22.2,91.8,-4.4,89.6,13C87.3,30.4,80.7,47.4,69.5,60.1C58.3,72.9,42.4,81.5,25.9,84.6C9.5,87.8,-7.4,85.4,-22.7,79.8C-37.9,74.1,-51.5,65.2,-60.9,53.3C-70.4,41.4,-75.8,26.6,-79,10.8C-82.1,-5,-83.1,-21.7,-77.7,-36.4C-72.4,-51,-60.7,-63.7,-46.7,-73.5C-32.7,-83.3,-16.4,-90.1,-1.2,-88.2C13.9,-86.3,27.8,-75.7,42.5,-66.2Z" transform="translate(100 100)"></path>
                                                </svg>
                                            </figure>
                                            <img src="/img-min/team/avatar4.png" className="img-fluid" alt="title image" />
                                                <div className="team-social bg-body">
                                                    <ul className="list-unstyled hover-social mb-0">
                                                        <li>
                                                            <a className="text-github" aria-label="Twitter link" href="#">
                                                                
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-facebook" aria-label="Facebook link" href="#">
                                                                
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-instagram" aria-label="Instagram link" href="#">
                                                                
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path><path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path><path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path></svg>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="text-linkedin" aria-label="Linkedin link" href="#">
                                                                
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path></svg>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        
                                        <div className="team-info p-4">
                                            <p className="h4 mb-1">Daniel Emo</p>
                                            <p className="text-primary mb-2">Senior Designer</p>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-secondary">
                
                <div id="footer" className="footer-dark section pt-6 pb-5">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-lg-4">
                                
                                <div className="widget-content pe-lg-5">
                                    
                                    <h4 className="h5 mb-4">About Us</h4>
                                    <div className="widget-body">
                                        <p>Bootstrap template designer, we build web templates, themes and other goodies, putting a lot of love in every pixel and design.</p>
                                        <address>
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/><circle fill="currentColor" cx="256" cy="192" r="48" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/></svg>
                                            Amphitheatre, Mountain View,<br />
                                            San Francisco, CA 9321, United States
                                        </address>
                                        <p className="footer-info">
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/></svg>
                                            +(123) 456-7890</p>
                                        <p className="footer-info">
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 512 512"><rect fill="currentColor" x="48" y="96" width="416" height="320" rx="40" ry="40" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/><polyline fill="currentColor" points="112 160 256 272 400 160" style={{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/></svg>
                                            support@example.com</p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="footer-links col-md-6 col-lg-4">
                                
                                <div className="widget-content">
                                    
                                    <h4 className="h5 mb-4">Popular Links</h4>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="list-unstyled before-arrow">
                                                <li className="py-2"><a href="#">About us</a></li>
                                                <li className="py-2"><a href="#">Contact us</a></li>
                                                <li className="py-2"><a href="#">Privacy policy</a></li>
                                                <li className="py-2"><a href="#">Term of use</a></li>
                                                <li className="py-2"><a href="#">GDPR</a></li>
                                                <li className="py-2"><a href="#">Career</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="list-unstyled before-arrow">
                                                <li className="py-2"><a href="#">Latest post</a></li>
                                                <li className="py-2"><a href="#">Popular post</a></li>
                                                <li className="py-2"><a href="#">Blogs</a></li>
                                                <li className="py-2"><a href="#">Events</a></li>
                                                <li className="py-2"><a href="#">Fax</a></li>
                                                <li className="py-2"><a href="#">Category</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="widget col-md-6 col-lg-4">
                                
                                <div className="widget-content">
                                    
                                    <h4 className="h5 mb-4">Newsletter</h4>
                                    <p>Subscribe to our mailing list to receives daily updates direct to your inbox!</p>
                                    
                                    <div className="mx-auto mb-4">
                                        <form id="subscribe" action="#">
                                            <div className="input-group">
                                                <input type="email" className="form-control" name="email" required placeholder="Enter you email address" aria-label="subcribe newsletter" />
                                                    <button className="btn btn-warning" type="submit">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="my-1"></div>
                                    <ul className="footer-links list-unstyled social-icon mb-4">
                                        
                                        <li className="my-2 me-3">
                                            <a target="_blank" rel="noopener noreferrer" href="https://facebook.com" title="Facebook">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/></svg>
                                            </a>
                                        </li>
                                        
                                        <li className="my-2 me-3">
                                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com" title="Twitter">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/></svg>
                                            </a>
                                        </li>
                                        
                                        <li className="my-2 me-3">
                                            <a target="_blank" rel="noopener noreferrer" href="https://youtube.com" title="Youtube">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"/></svg>
                                            </a>
                                        </li>
                                        
                                        <li className="my-2 me-3">
                                            <a target="_blank" rel="noopener noreferrer" href="https://vk.com" title="VKontakte">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M484.7,132c3.56-11.28,0-19.48-15.75-19.48H416.58c-13.21,0-19.31,7.18-22.87,14.86,0,0-26.94,65.6-64.56,108.13-12.2,12.3-17.79,16.4-24.4,16.4-3.56,0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14,0-13.22,6.15-13.22,12.3,0,12.81,18.81,15.89,20.84,51.76V254c0,16.91-3,20-9.66,20-17.79,0-61-66.11-86.92-141.44C105,117.64,99.88,112,86.66,112H33.79C18.54,112,16,119.17,16,126.86c0,13.84,17.79,83.53,82.86,175.77,43.21,63,104.72,96.86,160.13,96.86,33.56,0,37.62-7.69,37.62-20.5V331.33c0-15.37,3.05-17.93,13.73-17.93,7.62,0,21.35,4.09,52.36,34.33C398.28,383.6,404.38,400,424.21,400h52.36c15.25,0,22.37-7.69,18.3-22.55-4.57-14.86-21.86-36.38-44.23-62-12.2-14.34-30.5-30.23-36.09-37.92-7.62-10.25-5.59-14.35,0-23.57-.51,0,63.55-91.22,70.15-122" style={{fillRule:"evenodd"}}/></svg>
                                            </a>
                                        </li>
                                        
                                        <li className="my-2 me-3">
                                            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com" title="Linkedin">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/></svg>
                                            </a>
                                        </li>
                                        
                                        <li className="my-2 me-3">
                                            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com" title="Instagram">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"/><path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"/><path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"/></svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="footer-dark">
                    <div className="container py-4 border-top border-smooth">
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="d-block my-3">Copyright &copy; Traverse | All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            
            <a href="#top" className="bg-body p-3 border position-fixed end-1 bottom-1 z-index-10 back-top" title="Scroll To Top">
                
                <svg className="bi bi-arrow-up" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path>
                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </main>
    )
}