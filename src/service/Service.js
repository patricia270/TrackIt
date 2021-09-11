import axios from "axios";

function postRegistration (body) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
}

function postForLogin (body) {
    return axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
}


export {
    postRegistration,
    postForLogin
}