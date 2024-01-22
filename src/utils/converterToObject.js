export const converterToObject = (text) => {
    const regex = /\{.+\}/g;
    if(regex.test(text)) {
      return JSON.parse(text.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":').replace(/'/g, '"'))
  }
}