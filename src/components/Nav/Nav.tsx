"use client";

import Link from "next/link";

import styles from "./Nav.module.scss";

const Nav = () => {
    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        e.preventDefault();

        const el = document.querySelector(id);
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <ul>
                    <li>
                        <Link
                            href="#hochzeit-agenda"
                            onClick={(e) => handleClick(e, "#hochzeit-agenda")}
                        >
                            Agenda
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#hochzeit-anfahrt"
                            onClick={(e) => handleClick(e, "#hochzeit-anfahrt")}
                        >
                            Anfahrt
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#hochzeit-unterkunft"
                            onClick={(e) =>
                                handleClick(e, "#hochzeit-unterkunft")
                            }
                        >
                            Unterkunft
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#hochzeit-dresscode"
                            onClick={(e) =>
                                handleClick(e, "#hochzeit-dresscode")
                            }
                        >
                            Dresscode
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#hochzeit-geschenkeliste"
                            onClick={(e) =>
                                handleClick(e, "#hochzeit-geschenkeliste")
                            }
                        >
                            Geschenkeliste
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#hochzeit-fragen"
                            onClick={(e) => handleClick(e, "#hochzeit-fragen")}
                        >
                            Fragen
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
