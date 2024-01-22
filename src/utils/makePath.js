export const makePath = (path) => {
    const arrayPaths = path.split('.')
    const result = []
    for(let i=0; i< arrayPaths.length; i++) {
      if(arrayPaths[i].includes('[')) {
        const newitem1 = arrayPaths[i].replace(/[^A-Za-z]+/g, '')
        const newitem2 = arrayPaths[i].replace(/\D+/g, '')
        result.push(newitem1, newitem2)
      }
      else {
        result.push(arrayPaths[i])
      }
    }
    return result
  }