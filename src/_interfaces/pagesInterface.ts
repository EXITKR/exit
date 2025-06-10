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