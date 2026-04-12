"use client";

import { useEffect, useRef } from "react";
import { ImageSectionData } from "@/types/content";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./ImageSection.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ImageSection = ({ content }: { content: ImageSectionData }) => {
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { y: -125 },
                {
                    y: 125,
                    ease: "none",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                },
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.ImageSection} id={content.id}>
            <div ref={imageRef} className={styles.Images}>
                <Image
                    src={content.images[0].src}
                    alt={content.images[0].alt}
                    width={1920}
                    height={1920}
                    sizes="100vw"
                />
            </div>
        </section>
    );
};

export default ImageSection;
