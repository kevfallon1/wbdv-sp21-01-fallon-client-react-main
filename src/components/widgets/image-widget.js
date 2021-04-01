import React, {useState} from 'react'


const ImageWidget = (
    {
      widget,
      updateWidget,
      deleteWidget
    }) => {

  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState(widget)
  return(
      <div>

        <h2>Image Widget</h2>

        {
          !editing && widgetCache.width && widgetCache.height &&
              <div>
                <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                <img src={widgetCache.src} width={widgetCache.width} height={widgetCache.height}/>
              </div>
        }
        {
          !editing && (!widgetCache.width || !widgetCache.height) &&
          <div>
            <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
            <img src={widgetCache.src} />
          </div>
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


            URL
            <input onChange={(e) => {
              setWidgetCache(widget => ({
                ...widget, src: e.target.value
              }))}} value={widgetCache.src} className="form-control"/>
            width
            <input onChange={(e) => {
              setWidgetCache(widget => ({
                ...widget, width: e.target.value
              }))}} value={widgetCache.width} className="form-control"/>
            height
            <input onChange={(e) => {
              setWidgetCache(widget => ({
                ...widget, height: e.target.value
              }))}} value={widgetCache.height} className="form-control"/>
            <select onChange={(e) => setWidgetCache(
                widget => ({...widget, type: e.target.value}))}
                    value={widgetCache.type} className="form-control">
              <option value={"HEADING"}>Heading</option>
              <option value={"PARAGRAPH"}>Paragraph</option>
              <option value={"IMAGE"}>Image</option>
              <option value={"LIST"}>List</option>
            </select>
          </div>
        }
      </div>)

}
export default ImageWidget