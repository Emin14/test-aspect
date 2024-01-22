import styles from './content.module.css'

export default function Content({content}) {

  return (
    <>
    {content.map((element, index) => (
      <div key={index}>

      {element.type === 'panel' && (
        <div
          style={{
            width: `${element.props.width}px`,
            height: `${element.props.height}px`,
            border: '1px solid black',
            display: element.props.visible ? 'block' : 'none',
          }}
          className={styles.panel}
        >
        </div>
      )}
      
      {element.content && (
        <Content key={index} content={element.content} />
         )}

      {element.type === 'label' && (
        <span style={{ display: element.props.visible ? 'inline' : 'none' }}>
          {element.props.caption}
        </span>
      )}

      {element.type === 'button' && (
        <button
          style={{
            width: `${element.props.width}px`,
            height: `${element.props.height}px`,
            display: element.props.visible ? 'inline-block' : 'none',
          }}
          className={styles.button}
        >
          button
        </button>
      )}
    </div>
    ))}
    </>
  )
}
