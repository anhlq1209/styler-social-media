import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5001" })

export const createChat = (data) => API.post('chat', data)

export const userChat = (id) => API.get(`/chat/${id}`)

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`)