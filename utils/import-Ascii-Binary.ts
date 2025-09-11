export function charToAscii(char: string): number {
  if (char.length !== 1) {
    throw new Error("Solo se permite un carácter.");
  }
  return char.charCodeAt(0);
}


export function stringToAsciiList(text: string): number[] {
  return [...text].map(char => char.charCodeAt(0));
}


console.log( stringToAsciiList('Santiago'));