import { LikeBlogInterface, UpdateBlogInterface } from '../redux/interfaces/blogInterface'
import AXIOS from './index'

const url = '/blogs'

export const getAllBlogs = async () => {
    console.log('hahaha')
    try {
        const res = await AXIOS.get(`${url}/get-all`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log('heheh', res)
        return res
    } catch (error) {
        return error
    }
}

export const getDetailById = async (payload: number) => {
    try {
        const res = await AXIOS.get(`${url}/get-detail-by-id/${payload}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getBlogsPopular = async () => {
    try {
        const res = await AXIOS.get(`${url}/get-popular`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const deleteBlog = async (payload: number) => {
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

export const likeBLog = async (payload: LikeBlogInterface) => {
    try {
        const res = await AXIOS.post(`${url}/handle-emotion`, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const updateBlog = async (id: number, payload: UpdateBlogInterface) => {
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
