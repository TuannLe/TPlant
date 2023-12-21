import { CreateCommentInterface, UpdateCommentInterface } from '../redux/interfaces/commentInterface'
import AXIOS from './index'

const url = '/comments'

export const createComment = async (payload: CreateCommentInterface) => {
    try {
        const res = await AXIOS.post(`${url}/create`, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getAllComments = async (payload: number) => {
    try {
        const res = await AXIOS.get(`${url}/get-all/${payload}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const updateComment = async (id: number, payload: UpdateCommentInterface) => {
    try {
        const res = await AXIOS.post(`${url}/update/${id}`, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const deleteComment = async (payload: number) => {
    try {
        const res = await AXIOS.delete(`${url}/delete/${payload}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        return error
    }
}
