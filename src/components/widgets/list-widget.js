import React, {useState} from 'react'


const ListWidget = (
    {
      widget,
      updateWidget,
      deleteWidget
    }) => {

  const [editing, setEditing] = useState(false)
  const [widgetCache, setWidgetCache] = useState(widget)
  console.log("LIST WIDGET STATE: ",widgetCache)
  return(
      <div>



        {
          !editing &&
          <div>
            <i onClick={() => setEditing(true)} className="fas fa-cog float-right"></i>
            <img src={widgetCache.src}/>
            <>
              {
                widget.isOrdered &&
                <ol>
                  {
                    widget.text.split("\n").map(item => {
                      return(
                          <li>{item}</li>
                      )
                    })
                  }
                </ol>
              }
              {
                !widget.isOrdered &&
                <ul>
                  {
                    widget.text.split("\n").map(item => {
                      return(
                          <li>{item}</li>
                      )
                    })
                  }
                </ul>
              }
            </>
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

            <input onChange={(e) => {
              console.log(e.target.checked)
                return setWidgetCache(
                widget => ({...widget, isOrdered: e.target.checked}))}}
                   type="checkbox" checked={widgetCache.isOrdered}/> Ordered
            <br/>
            List Items
            <textarea onChange={(e) => setWidgetCache(
                widget => ({...widget, text: e.target.value}))}
                      rows={10} value={widgetCache.text} className="form-control"></textarea>

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
export default ListWidget