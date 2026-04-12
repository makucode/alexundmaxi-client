"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Logo from "../SVGs/Logo";
import styles from "./Hero.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const imageRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 📸 Bild Parallax (langsamer Scroll)
            gsap.to(imageRef.current, {
                y: 250,
                ease: "none",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // 🧾 Logo optional leicht bewegen
            gsap.to(logoRef.current, {
                y: 350,
                ease: "none",
                scrollTrigger: {
                    trigger: logoRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.Hero}>
            <div ref={logoRef} className={styles.Title}>
                <Logo style={{ maxWidth: 808, width: "100%" }} />
            </div>

            <div ref={imageRef} className={styles.Image}>
                <Image
                    src={"/images/hero.png"}
                    alt="Foto vom Garten von Schloss von Hammerstein"
                    width={1512}
                    height={982}
                    sizes="100vw"
                />
            </div>
        </section>
    );
};

export default Hero;
