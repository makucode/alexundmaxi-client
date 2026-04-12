import { ImageSectionData, TextSectionData } from "@/types/content";

export const homeAgenda: TextSectionData = {
    id: "hochzeit-agenda",
    title: "Agenda",
    items: [
        {
            title: "Trauung",
            paragraphs: [
                "Der Platz während der standesamtlichen Trauung am 08.10.2026 ist leider begrenzt, daher findet diese nur im engsten Kreis statt.\n\n Falls ihr aber trotzdem unbedingt dabei sein möchtet, könnt ihr gerne zu einem kleinen Sektempfang nach der Trauung im Schloss von Hammerstein vorbeischauen.",
                "",
            ],
            items: [
                {
                    time: "18 00 Uhr",
                    label: "Sektempfang im Schloss von Hammerstein",
                },
            ],
        },
        {
            title: "Hochzeitsfeier",
            paragraphs: [
                "Die Hochzeitsfeier findet am 10.10.2026 statt und startet in der Lukaskirche in der List.",
            ],
            items: [
                {
                    time: "13 00 Uhr",
                    label: "Trauung in der Lukaskirche Hannover",
                },
                {
                    time: "16 00 Uhr",
                    label: "Empfang im Schloss von Hammerstein",
                },
                {
                    time: "17 00 Uhr",
                    label: "Anschnitt der Hochzeitstorte",
                },
                { time: "18 00 Uhr", label: "Abendessen" },
                { time: "20 00 Uhr", label: "Umzug in den Gartensaal" },
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
    images: [{ src: "/images/images-1-1.png", alt: "Bild 1" }],
};

export const homeAnfahrt: TextSectionData = {
    id: "hochzeit-anfahrt",
    title: "Anfahrt",
    paragraphs: [
        "Damit ihr nicht in 65 separaten Autos anreisen müsst, gibt es eine Whatsapp-Gruppe für die Organisation von Mitfahrgelegenheiten.",
    ],
    links: [
        {
            title: "Link zur Whatsapp-Gruppe",
            href: "https://maps.app.goo.gl/",
        },
        {
            title: "Schloss von Hammerstein\nGroßer Winkel 17, 31552 Apelern",
            href: "https://maps.app.goo.gl/GRtcKsoHoTeKWedF6",
        },
        {
            title: "Lukaskirche Hannover\nDessauerstraße 2, 30161 Hannover",
            href: "https://maps.app.goo.gl/gwPNhUHKTY34FCqK8",
        },
    ],
};

export const homeUnterkunft: TextSectionData = {
    id: "hochzeit-unterkunft",
    title: "Unterkunft",
    paragraphs: [
        "Falls ihr in der Nähe übernachten möchtet, haben wir hier ein paar Hotels für euch aufgelistet.",
    ],
    links: [
        { title: "Hotel 1", href: "https://google.com/hotel1" },
        { title: "Hotel 2", href: "https://google.com/hotel2" },
    ],
};

export const homeDresscode: TextSectionData = {
    id: "hochzeit-dresscode",
    title: "Dresscode",
    paragraphs: [
        "Einen Dresscode gibt es nicht, wir wünschen uns vor allem, dass ihr euch wohlfühlt!",
    ],
};

export const homeGeschenkeliste: TextSectionData = {
    id: "hochzeit-geschenkeliste",
    title: "Geschenkeliste",
};

export const homeFragen: TextSectionData = {
    id: "hochzeit-fragen",
    title: "Fragen",
    paragraphs: [
        "Bei weiteren Fragen, falls ihr eine Rede halten oder eine Überraschung organisieren möchtet, könnt ihr euch gerne an Maxis Trautzeugin Judith wenden.",
    ],
    links: [{ title: "0157 3203 7961", href: "tel:+4915732037961" }],
};

export const homeImages2: ImageSectionData = {
    id: "hochzeit-bilder-2",
    images: [{ src: "/images/images-2-1.png", alt: "Bild 2" }],
};
