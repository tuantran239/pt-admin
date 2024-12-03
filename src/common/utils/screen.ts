const height = window.screen.height;
const width = window.screen.width;

export const wx = (input: number) => (width * input) / 100;
export const hx = (input: number) => (height * input) / 100;
