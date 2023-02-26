export default () => {
    const config = useRuntimeConfig();
    const wpApiUrl = config.public.wpApiUrl;

    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${wpApiUrl}${endpoint}`)
        
    }

    // Get all posts
    const getPosts = async <T>(categories?: string) => {
        if (categories) {
            let query = `posts?category=${categories}&number=100`;
            return get<T>(query)
        }
        else {
            let query = `posts?number=100`;
            return get<T>(query)
        }
    }
    // Get a single post 
    const getSinglePost = async <T>(slug: string) => {
        console.log(slug)
        let query = `posts/slug:${slug}`;
        return get<T>(query)
    }
       
    // Get all categories
    const getCategories = async <T>() => {
        return get<T>(`categories`)
    }
    // Get a single category
    const getSingleCategory = async (slug: string) => {
        get(`categories/slug:${slug}`)
    }

    return {
        get,
        getPosts,
        getSinglePost,
        getCategories,
        getSingleCategory
    }
}

