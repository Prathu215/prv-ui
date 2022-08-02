export const REST_URLS = {
    contactMe : "/api/contacts",
    getBlogs:    "/api/blogs?populate=*",
    // getBlogDetails: "api/blogs/{id}?populate=*"
    getBlogDetails: "/api/blogs?populate=*&filters[slug][$eq]={slug}"

}