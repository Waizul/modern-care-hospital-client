import axios from 'axios'

const BASE_URL = 'https://moderncarehospital.herokuapp.com'

export const userRequest = axios.create({
    baseURL : BASE_URL
})

export const adminRequest = axios.create({
    baseURL : BASE_URL
})