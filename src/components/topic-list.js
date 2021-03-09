import React, {useEffect} from 'react'
import {connect, Provider} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from "../services/topic-service"

const TopicList = (
    {
      topics=[],
      createTopic,
      updateTopic,
      deleteTopic,
      findTopicsForLesson,
      clearTopics
    }) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();
  useEffect(() => {
    console.log(lessonId);
    if(lessonId !== "undefined" && typeof lessonId !== "undefined"
      && moduleId !== "undefined" && typeof moduleId !== "undefined") {
      findTopicsForLesson(lessonId)
    } else {
      clearTopics()
    }
  }, [lessonId])


  return(
      <div className="topics">
        <ul className="float-right nav nav-pills row">
          {
            topics.map(topic =>
                <li className="nav-item">
                  <EditableItem
                      to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                      item={topic}
                      deleteItem={deleteTopic}
                      updateItem={updateTopic}/>

                </li>
            )
          }
        </ul>
        <div>
          <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x"></i>
        </div>
      </div>
  )
}

const stpm = (state) => ({
  topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
  createTopic: (lessonId) => {
    if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
      topicService.createTopic(lessonId, {title: 'New Topic'})
      .then(topic => dispatch({type: "CREATE_TOPIC", topic: topic}))
    } else {
      alert("Lesson must be selected to add topics")
    }
  },
  updateTopic: (newItem) => {
    topicService.updateTopic(newItem._id, newItem)
    .then(status => dispatch({type: "UPDATE_TOPIC", updateTopic: newItem}))
  },
  deleteTopic: (topicToDelete) => {
    topicService.deleteTopic(topicToDelete._id)
    .then(status => dispatch({type: "DELETE_TOPIC", topicToDelete: topicToDelete}))
  },
  findTopicsForLesson: (lessonId) => {
    topicService.findTopicsForLesson(lessonId)
    .then(topics => dispatch({
      type: "FIND_TOPICS_FOR_LESSON",
      topics: topics
    }))
  },
  clearTopics: () => {
    dispatch({
      type: "CLEAR_TOPICS",
    })
  }


})

export default connect(stpm, dtpm)(TopicList)


