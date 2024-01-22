import { useSelector } from 'react-redux';
import Content from './Content/Content'
import Header from './Header/Header';
import styles from './app.module.css'

function App() {

  const data = useSelector(state => state.content)

  return (
    <div className={styles.container}>
        <Header data={data}/>
        <div className={styles.content}>
          <Content content={data.content}/>
        </div>
    </div>
  )
}

export default App