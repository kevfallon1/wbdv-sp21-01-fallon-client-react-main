const URL = "http://wbdv-sp21-fallon-server-node.herokuapp.com"

export const findQuestionsForQuiz = (quizId) =>
    fetch(`${URL}/api/quizzes/${quizId}/questions`)
    .then(response => response.json())

const api = {
  findQuestionsForQuiz
}

export default api;