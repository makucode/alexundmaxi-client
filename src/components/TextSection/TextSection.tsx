import Link from "next/link";

import Section from "../Section/Section";

import { TextSectionData } from "@/types/content";

import styles from "./TextSection.module.scss";

const TextSection = ({ content }: { content: TextSectionData }) => {
    return (
        <Section id={content.id}>
            <div className={styles.TextSection}>
                <h2>{content.title}</h2>

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
