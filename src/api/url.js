const UNSPLASH_API_URL = `https://api.unsplash.com/photos/?` +
  `per_page=12&client_id=UL0TYCn-Sya6Err5ivn2FMNe5nRmG8_KQmxUeeXpmsI`;


const UNSPLASH_API_URL_SEARCH = (searchKey) => {
  return `https://api.unsplash.com/search/photos?` +
    `query=${searchKey}&` +
    `per_page=12&` +
    `client_id=UL0TYCn-Sya6Err5ivn2FMNe5nRmG8_KQmxUeeXpmsI`
}


const UNSPLASH_API_URL_PER_PAGE = (searchKey, i) => {
  return `https://api.unsplash.com/search/photos?` +
    `query=${searchKey}&`+
    `per_page=12&` +
    `page=${i}&`+
    `client_id=UL0TYCn-Sya6Err5ivn2FMNe5nRmG8_KQmxUeeXpmsI`
}


export { UNSPLASH_API_URL, UNSPLASH_API_URL_SEARCH, UNSPLASH_API_URL_PER_PAGE }