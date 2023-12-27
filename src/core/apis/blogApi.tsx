import { LikeBlogInterface, UpdateBlogInterface } from '../redux/interfaces/blogInterface'
import AXIOS from './index'

const url = '/blogs'


export const createBlog = async (token: string, payload: any) => {
    try {
        const res = await AXIOS.post(`${url}/create`, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
                'token': `Bearer ${token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getAllBlogs = async (payload: any) => {
    try {
        const res = await AXIOS.get(`${url}/get-all`, {
            headers: {
                "Content-Type": "application/json",
                'token': `Bearer ${payload}`
            }
        })
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

export const getBlogsPopular = async (token: string) => {
    try {
        const res = await AXIOS.get(`${url}/get-popular`, {
            headers: {
                "Content-Type": "application/json",
                'token': `Bearer ${token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const deleteBlog = async ({ token, payload }: any) => {
    try {
        const res = await AXIOS.delete(`${url}/delete/${payload}`, {
            headers: {
                "Content-Type": "application/json",
                'token': `Bearer ${token}`
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
