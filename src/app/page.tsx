import Hero from "@/components/Hero/Hero";
import TextSection from "@/components/TextSection/TextSection";

import {
    homeAgenda,
    homeAnfahrt,
    homeDresscode,
    homeFragen,
    homeGeschenkeliste,
    homeImages1,
    homeImages2,
    homeImages3,
    homeUnterkunft,
} from "@/content/home";

import styles from "./page.module.scss";
import ImageSection from "@/components/ImageSection/ImageSection";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Hero />
                <TextSection content={homeAgenda} />
                <ImageSection content={homeImages1} />
                <TextSection content={homeAnfahrt} />
                <TextSection content={homeUnterkunft} noPaddingTop />
                <ImageSection content={homeImages2} />
                <TextSection content={homeDresscode} />
                <TextSection content={homeGeschenkeliste} noPaddingTop />
                <TextSection content={homeFragen} noPaddingTop />
                <ImageSection content={homeImages3} />
            </main>
        </div>
    );
}
