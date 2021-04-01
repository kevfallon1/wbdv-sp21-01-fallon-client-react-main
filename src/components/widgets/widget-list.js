import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetService from "../../services/widget-service"
import {connect} from "react-redux"
import ImageWidget from "./image-widget";
import ListWidget from "./list-widget";

const WidgetList = (
    {
      widgets=[],
      createWidget,
      updateWidget,
      deleteWidget,
      findWidgetsForTopic,
      clearWidgets
    }
  ) => {


  const {lessonId, topicId} = useParams()
  useEffect(() => {
    if(topicId !== "undefined" && typeof topicId !== "undefined"
        && lessonId !== "undefined" && typeof lessonId !== "undefined") {
      findWidgetsForTopic(topicId)
      console.log(widgets)
    } else {
      clearWidgets()
    }
  }, [topicId])

  return(
      <div>
        <i onClick={() => createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
        <h1>Widget List </h1>
        <ul className="list-group">
          {
            widgets.map(_widget =>
                <li key={_widget.id} className="list-group-item">


                  {
                    _widget.type === "HEADING" &&
                    <HeadingWidget
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={_widget}

                    />
                  }
                  {
                    _widget.type === "PARAGRAPH" &&
                    <ParagraphWidget
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={_widget}/>
                  }
                  {
                    _widget.type === "IMAGE" &&
                    <ImageWidget
                      updateWidget={updateWidget}
                      deleteWidget={deleteWidget}
                      widget={_widget}/>
                  }
                  {
                    _widget.type === "LIST" &&
                      <ListWidget
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={_widget}/>
                  }
                </li>
            )
          }
        </ul>
      </div>
  )
}

const stpm = (state) => ({
  widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
  createWidget: (topicId) => {
    if(topicId !== "undefined" && typeof topicId !== "undefined") {
      widgetService.createWidget(topicId,
          {type: "HEADING", size: 2, text: "New Widget", ordered: false})
      .then(widget => dispatch({type: "CREATE_WIDGET", widget: widget}))
    } else {
      alert("Topic must be selected to add widgets")
    }
  },
  updateWidget: (newItem) => {
    widgetService.updateWidget(newItem.id, newItem)
    .then(status => dispatch({type: "UPDATE_WIDGET", updateWidget: newItem}))
  },
  deleteWidget: (widgetToDelete) => {
    widgetService.deleteWidget(widgetToDelete.id)
    .then(status => dispatch({type: "DELETE_WIDGET", widgetToDelete: widgetToDelete}))
  },
  findWidgetsForTopic: (topicId) => {
    widgetService.findWidgetsForTopic(topicId)
    .then(widgets => {
      console.log(widgets)
      dispatch({
      type: "FIND_WIDGETS_FOR_TOPIC",
      widgets: widgets
    })})
  },
  clearWidgets: () => {
    dispatch({
      type: "CLEAR_WIDGETS"
    })
  }
})

export default connect(stpm, dtpm)(WidgetList)