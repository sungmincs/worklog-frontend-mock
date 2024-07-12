export const scrollToElement = (element: HTMLElement) => {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};
