const URL = "https://wbdv-sp21-fallon-server-node.herokuapp.com/"


export const getAllQuizzes = () =>
    fetch(URL + "api/quizzes")
    .then(response => response.json())

const api = {
  getAllQuizzes
}

export default api;