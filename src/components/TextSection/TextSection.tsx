"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Link from "next/link";
import Section from "../Section/Section";
import { TextSectionData } from "@/types/content";

import styles from "./TextSection.module.scss";

gsap.registerPlugin(ScrollTrigger);

const TextSection = ({ content }: { content: TextSectionData }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements =
                sectionRef.current?.querySelectorAll(`h2, p, h3, li`);

            if (!elements) return;

            gsap.from(elements, {
                opacity: 0,
                y: 10,
                filter: "blur(3px)",
                scale: 0.995,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reset",
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Section id={content.id}>
            <div ref={sectionRef} className={styles.TextSection}>
                <h2 className={`${content.items ? styles.Bigger : ""}`}>
                    {content.title}
                </h2>

                {content.paragraphs && (
                    <div className={styles.Paragraphs}>
                        {content.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                )}

                {content.items && (
                    <div className={styles.AgendaDays}>
                        {content.items.map((day) => (
                            <div className={styles.Day} key={day.title}>
                                <h3>{day.title}</h3>
                                <div className={styles.Text}>
                                    {day.paragraphs.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                                <ul className={styles.Times}>
                                    {day.items.map((item) => (
                                        <li key={day.title + item.label}>
                                            <span>{item.time}</span>
                                            <span>{item.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {content.links && (
                    <ul className={styles.Links}>
                        {content.links.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} target="_blank">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Section>
    );
};

export default TextSection;
