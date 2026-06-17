export type TextBlock = { text: string } | { text: string; href: string };

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
    blocks?: TextBlock[];
    items?: TextSectionBlock[];
};

export type ImageSectionData = {
    id: string;
    images: { src: string; alt: string }[];
};
