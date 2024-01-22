import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editContent } from '../redux/slices/contentSlices';
import { deepCopy} from '../utils/deepCopy'
import { converterToObject } from '../utils/converterToObject';
import { makePath } from '../utils/makePath';
import { updateValueByPath } from '../utils/updateValueByPath';
import styles from './header.module.css'

export default function Header({data}) {
    const dispatch = useDispatch();
    const [path, setPath] = useState('');
    const [value, setValue] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const copyContent = deepCopy(data)
        const arrayPaths = makePath(path)
        const newObject = updateValueByPath(copyContent, arrayPaths, value, deepCopy, converterToObject)
        dispatch(editContent(newObject.content));
        setPath('');
        setValue('');
    };

  return (
    <header>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="" className={styles.label}>
              <p>Путь</p>
              <input
                type="text"
                value={path}
                onChange={(e) => setPath(e.target.value)} 
              />
            </label>
            <label htmlFor="" className={styles.label}>
              <p>Новое значение</p>
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </label>
            <button type='submit' className={styles.button}>Применить</button>
        </form>
    </header>
  )
}
