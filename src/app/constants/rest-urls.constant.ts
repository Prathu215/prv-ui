export const REST_URLS = {
    contactMe : "/api/contacts",
    getBlogs:    "/api/blogs?populate=*",
    // getBlogDetails: "api/blogs/{id}?populate=*"
    getBlogDetails: "/api/blogs?populate=*&filters[slug][$eq]={slug}",
    getProfile: "/api/profile?populate=*",
    getEvents: "/api/events?populate=*",
    getEventDetails: "/api/events?populate=*&filters[slug][$eq]={slug}",
    getMovies: "/api/movies?populate=*",
    getMovieDetails:"/api/movies?populate=*&filters[slug][$eq]={slug}"

}