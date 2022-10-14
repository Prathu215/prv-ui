export const REST_URLS = {
    contactMe : "/api/contacts",
    // getContactMessages : "/api/contacts?populate=*",
    getBlogs:    "/api/blogs?populate=*",
    // getBlogDetails: "api/blogs/{id}?populate=*"
    getBlogDetails: "/api/blogs?populate=*&filters[slug][$eq]={slug}",
    getProfile: "/api/profile?populate=*",
    getEvents: "/api/events?populate=*",
    getEventDetails: "/api/events?populate=*&filters[slug][$eq]={slug}",
    getMovies: "/api/movies?populate=*",
    getMovieDetails:"/api/movies?populate=*&filters[slug][$eq]={slug}",
    comments:"/api/comments",
    commentList:"/api/comments?populate=*",
    loginURL:"/api/auth/local",
    getFoods: "/api/foods?populate=*",
    getFoodsDetails:"/api/foods?populate=*&filters[slug][$eq]={slug}",
}