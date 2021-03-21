import React, {useState} from 'react'

const ParagraphWidget = (
    {
      widget,
      updateWidget,
      deleteWidget
    }) => {

  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState(widget)
  return (
      <div>
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
                <select onChange={(e) => setWidgetCache(
                    widget => ({...widget, type: e.target.value}))}
                        value={widgetCache.type} className="form-control">
                  <option value={"HEADING"}>Heading</option>
                  <option value={"PARAGRAPH"}>Paragraph</option>
                </select>
                <textarea
                    onChange={(e) => setWidgetCache({...widget, text: e.target.value})}
                    value={widgetCache.text}
                    className="form-control"></textarea>
              </div>
        }
        {
          !editing &&
              <div>
                <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
                <p>
                  {widget.text}
                </p>
              </div>
        }
      </div>
  )
}

export default ParagraphWidget