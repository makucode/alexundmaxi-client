export type TextLink = {
    title: string;
    href: string;
};

export type TextItem = {
    time: string;
    label: string;
};

export type TextSectionBlock = {
    title: string;
    paragraphs: string[];
    items: TextItem[];
};

export type TextSectionData = {
    id: string;
    title: string;
    paragraphs?: string[];
    items?: TextSectionBlock[];
    links?: TextLink[];
};

export type ImageSectionData = {
    id: string;
    images: { src: string; alt: string }[];
};
