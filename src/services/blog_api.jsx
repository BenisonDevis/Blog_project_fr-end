import axios from './api'

export const useBlogServices = () =>{

    const getBlogList = async (params) => {
        const response = await axios.get("blog/create", {
          params: { ...params },
        });
        return response.data;
    };

    const postBlogCreate = async (data) =>{
        const response = await axios.post("blog/create", data)

        return response.data
    }

    return {
    getBlogList,

    postBlogCreate,
    }
}
