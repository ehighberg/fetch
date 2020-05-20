let apiUrl
const apiUrls = {
    production: 'https://mysterious-anchorage-39512.herokuapp.com/',
    development: 'http://localhost:3000/'

}

if (window.location.hostname === 'localhost')
{
    apiUrl = apiUrls.development
} else
{
    apiUrl = apiUrls.production
}

export default apiUrl