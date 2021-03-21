import React, {useState} from 'react'


const HeadingWidget = (
    {
      widget,
      updateWidget,
      deleteWidget
    }) => {

  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState(widget)
  return(
      <div>

        {widgetCache.size === 1 && <h1>{widgetCache.text}</h1>}
        {widgetCache.size === 2 && <h2>{widgetCache.text}</h2>}
        {widgetCache.size === 3 && <h3>{widgetCache.text}</h3>}
        {widgetCache.size === 4 && <h4>{widgetCache.text}</h4>}
        {widgetCache.size === 5 && <h5>{widgetCache.text}</h5>}
        {widgetCache.size === 6 && <h6>{widgetCache.text}</h6>}

        {
          !editing &&
          <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>

        }

        {
          editing &&
          <div>
            <>
              <i onClick={() => deleteWidget(widget)} className="fas fa-trash float-right"></i>
              <i onClick={() => {
                setEditing(false)
                updateWidget(widgetCache)
              }} className="fas fa-check float-right"></i>
            </>
            <input onChange={(e) => setWidgetCache(
                widget => ({...widget, text: e.target.value}))} value={widgetCache.text}
                   className="form-control"/>
            <select onChange={(e) => setWidgetCache(
                widget => ({...widget, size: parseInt(e.target.value)}))}
                    value={widgetCache.size} className="form-control">
              <option value={1}>Heading 1</option>
              <option value={2}>Heading 2</option>
              <option value={3}>Heading 3</option>
              <option value={4}>Heading 4</option>
              <option value={5}>Heading 5</option>
              <option value={6}>Heading 6</option>
            </select>
            <select onChange={(e) => setWidgetCache(
                widget => ({...widget, type: e.target.value}))}
                    value={widgetCache.type} className="form-control">
              <option value={"HEADING"}>Heading</option>
              <option value={"PARAGRAPH"}>Paragraph</option>
            </select>
          </div>
        }
      </div>)

}
export default HeadingWidget