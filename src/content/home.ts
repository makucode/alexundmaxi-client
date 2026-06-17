import { ImageSectionData, TextSectionData } from "@/types/content";

export const homeAgenda: TextSectionData = {
    id: "hochzeit-agenda",
    title: "Agenda",
    items: [
        {
            title: "Trauung",
            paragraphs: [
                "Der Platz während der standesamtlichen Trauung am <br />08. Oktober 2026 ist leider begrenzt, daher findet diese nur im engsten Kreis statt.\n\n Falls ihr aber trotzdem unbedingt dabei sein möchtet, könnt ihr gerne zu einem kleinen Sektempfang nach der Trauung im Schloss von Hammerstein vorbeischauen.",
                "",
            ],
            items: [
                {
                    time: "16 30 Uhr",
                    label: "Sektempfang im Schloss von Hammerstein",
                },
            ],
        },
        {
            title: "Hochzeitsfeier",
            paragraphs: [
                "Die Hochzeitsfeier findet am 10. Oktober 2026 statt und startet in der Lukaskirche in der List.",
            ],
            items: [
                {
                    time: "13 00 Uhr",
                    label: "Trauung in der Lukaskirche Hannover",
                },
                {
                    time: "15 00 Uhr",
                    label: "Empfang im Schloss von Hammerstein",
                },
                { time: "18 30 Uhr", label: "Abendessen" },
                { time: "20 00 Uhr", label: "Beginn der Party" },
                { time: "24 00 Uhr", label: "Mitternachtssnack" },
            ],
        },
    ],
};

export const homeAgendaFull: TextSectionData = {
    id: "hochzeit-agenda",
    title: "Agenda",
    items: [
        {
            title: "Trauung",
            paragraphs: ["Der Ablaufplan ist folgendermaßen..."],
            items: [
                { time: "12 00 Uhr", label: "Ereignis 1" },
                { time: "13 30 Uhr", label: "Ereignis 2" },
                { time: "14 30 Uhr", label: "Ereignis 3" },
                { time: "16 00 Uhr", label: "Ereignis 4" },
                { time: "18 00 Uhr", label: "Ereignis 5" },
            ],
        },
        {
            title: "Hochzeitsfeier",
            paragraphs: ["Der Ablaufplan ist folgendermaßen..."],
            items: [
                { time: "10 00 Uhr", label: "Ereignis 1" },
                { time: "11 00 Uhr", label: "Ereignis 1" },
                { time: "12 00 Uhr", label: "Ereignis 1" },
                { time: "13 30 Uhr", label: "Ereignis 2" },
                { time: "14 30 Uhr", label: "Ereignis 3" },
                { time: "16 00 Uhr", label: "Ereignis 4" },
                { time: "18 00 Uhr", label: "Ereignis 5" },
                { time: "20 00 Uhr", label: "Ereignis 5" },
            ],
        },
    ],
};

export const homeImages1: ImageSectionData = {
    id: "hochzeit-bilder-1",
    images: [{ src: "/images/alexundmaxi-5.jpg", alt: "Bild 1" }],
};
export const homeImages2: ImageSectionData = {
    id: "hochzeit-bilder-2",
    images: [{ src: "/images/alexundmaxi-3.jpg", alt: "Bild 2" }],
};

export const homeImages3: ImageSectionData = {
    id: "hochzeit-bilder-3",
    images: [{ src: "/images/alexundmaxi-4.jpg", alt: "Bild 2" }],
};

export const homeAnfahrt: TextSectionData = {
    id: "hochzeit-anfahrt",
    title: "Anfahrt",
    blocks: [
        {
            text: "Damit ihr nicht in 65 separaten Autos anreisen müsst, gibt es eine Whatsapp-Gruppe für die Organisation von Mitfahrgelegenheiten.",
        },
        {
            text: "Link zur Whatsapp-Gruppe",
            href: "https://maps.app.goo.gl/",
        },
        { text: "" },
        {
            text: "Der Parkplatz des Schlosses befindet sich gegenüber von Hauptstraße 29, 31552 Apelern.",
        },
        {
            text: "Einfahrt zum Parkplatz",
            href: "https://maps.app.goo.gl/rj8XnrYLjgdwzvqT8",
        },
        { text: "" },
        {
            text: "Lukaskirche Hannover\nDessauerstraße 2, 30161 Hannover",
            href: "https://maps.app.goo.gl/gwPNhUHKTY34FCqK8",
        },
        {
            text: "Schloss von Hammerstein\nGroßer Winkel 17, 31552 Apelern",
            href: "https://maps.app.goo.gl/GRtcKsoHoTeKWedF6",
        },
    ],
};

export const homeUnterkunft: TextSectionData = {
    id: "hochzeit-unterkunft",
    title: "Unterkunft",
    blocks: [
        {
            text: "Falls ihr in der Nähe übernachten möchtet, haben wir hier ein paar Hotels für euch aufgelistet.",
        },
        {
            text: "Sporthotel Fuchsbachtal",
            href: "https://sporthotel-fuchsbachtal.de/",
        },
        {
            text: "Hotel Schaumburg Ritter",
            href: "https://schaumburger-ritter.de/",
        },
        {
            text: "Schmiedegasthaus Gehrke",
            href: "https://www.schmiedegasthaus.de/",
        },
    ],
};

export const homeDresscode: TextSectionData = {
    id: "hochzeit-dresscode",
    title: "Dresscode",
    blocks: [
        {
            text: "Einen richtigen Dresscode gibt es nicht. Zieht an, worin ihr euch wohlfühlt und was euch festlich genug für eine Hochzeit erscheint!",
        },
    ],
};

export const homeGeschenkeliste: TextSectionData = {
    id: "hochzeit-geschenke",
    title: "Geschenke",
    blocks: [
        {
            text: "Wir freuen uns sehr über eine kleine Spende, da eine Hochzeit mit allem drum & dran ganz schön teuer ist. Falls ihr aber eine andere schöne Idee habt, freuen wir uns darüber natürlich auch.",
        },
    ],
};

export const homeFragen: TextSectionData = {
    id: "hochzeit-fragen",
    title: "Fragen",
    blocks: [
        {
            text: "Bei weiteren Fragen, falls ihr eine Rede halten oder eine Überraschung organisieren möchtet, könnt ihr euch gerne an Maxis Trautzeugin Judith wenden.",
        },
        { text: "0157 3203 7961", href: "tel:+4915732037961" },
    ],
};
