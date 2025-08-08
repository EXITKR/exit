import { StaticImageData } from "next/image";

export interface clientBusinessInterface {
  name: string;
  img: StaticImageData;
}

export interface activeTabsInterface {
  name: string;
}

export interface attachmentsPathInterface {
  filename: string,
  path: string;
}

export interface OriginalInputState {
  element: HTMLInputElement | HTMLTextAreaElement;
  originalValue: string;
  originalPlaceholder: string;
  originalColor: string;
  originalWeight: string;
}

export interface ImageDataListInterface {
  image: StaticImageData;
  name: string;
  source: string;
}

export interface ContentListInterface {
  image_list?: ImageDataListInterface[];
  title?: string;
  content: string;
}

export interface ContentBoxInterface {
  title: string;
  background: string;
  content?: string;
  content_list?: ContentListInterface[];
}

export interface NavigationSubInterface {
  url: string;
  name: string;
}

export interface NavigationInterface {
  type: number,
  url: string;
  name: string;
  sub: NavigationSubInterface[]
}

export interface RoadmapInterface {
  sort: string;
  year: string;
  step: string;
  consulting: string;
  consulting_li: string[];
}