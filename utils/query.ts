import { API_PATH } from "@/utils/apiPath";
import axios from "axios";

export const getUniversities = async ({ page }: { page: number }) => {
    console.log("this is page : " + page)
    try {
        const universities = axios.get(`${API_PATH}/universities?page=${page}`);
        return universities;

    } catch (error) {
        console.log(error);
    }
}

export const getUniversity = async (uni_id: any) => {
    try {
        const university = axios.get(`${API_PATH}/universities/${uni_id}`)
        return university
    } catch (error) {
        console.log(error)
    }
}

export const getAllBlogs = async () => {
    try {
        const blogs = axios.get(`https://greendreamearth.org/wordpress/wp-json/wp/v2/posts`)
        return blogs
    } catch (error) {
        console.log(error)
    }
}

export const getBlogComments = async (slug: string) => {
    console.log("getblogcommments ", slug)
    try {
        const comments = axios.get(`${API_PATH}/comments?blogSlug=${slug}`)
        return comments
    } catch (error) {
        console.log(error)
    }
}

export const createBlogComment = async (formData: any) => {

    console.log("form datq : ", formData)
    try {
        const comment = axios.post(`${API_PATH}/comments`,
            formData
        )

        return comment
    } catch (error) {
        console.log(error)
    }

}