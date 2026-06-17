import React from "react";

import styles from "./Section.module.scss";

const Section = ({
    children,
    id,
    noPaddingTop = false,
}: {
    children: React.ReactNode;
    id: string;
    noPaddingTop?: boolean;
}) => {
    return (
        <section id={id} className={styles.Section}>
            <div
                className={`${styles.Content} ${
                    noPaddingTop ? styles.NoPaddingTop : ""
                }`}
            >
                {children}
            </div>
        </section>
    );
};

export default Section;
