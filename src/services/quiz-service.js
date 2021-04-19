//const URL = "http://localhost:3002"
const URL = "https://wbdv-sp21-fallon-server-node.herokuapp.com"


export const getAllQuizzes = () =>
    fetch(`${URL}/api/quizzes`)
    .then(response => response.json())

export const submitQuiz = (quizId, questions) =>
  fetch(`${URL}/api/quizzes/${quizId}/attempts`, {
    method: 'POST',
    body: JSON.stringify(questions),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())


export const getQuizAttempts = (quizId) =>
  fetch(`${URL}/api/quizzes/${quizId}/attempts`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())



const api = {
  getAllQuizzes,
  submitQuiz,
  getQuizAttempts
}

export default api;