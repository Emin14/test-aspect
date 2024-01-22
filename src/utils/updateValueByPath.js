export const updateValueByPath = (obj, path, value, copyobjFunction, converterToObject) => {
    const copyobj = copyobjFunction(obj)
    let newValue = value
    if(converterToObject(value)) {
      newValue = converterToObject(value)
    }

    path.reduce((accum, item, index) => {
        let newItem = item;

      if(index === path.length-1) {
        if(newValue !== null && typeof newValue === 'object' && accum[newItem].type === 'panel') {
          if( accum[newItem].content) {
            accum[newItem].content.push(newValue)
          }
          else {
            accum[newItem].content = []
            accum[newItem].content.push(newValue)
          }
          return
        }
        else if(newValue !== null && typeof newValue !== 'object') {
          return accum[newItem] = newValue
        }
      }
        return accum = accum[newItem]

    }, copyobj)

    return copyobj
  }
