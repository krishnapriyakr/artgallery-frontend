
const { BASE_URL } = require("./baseUrl")
const { commonAPI } = require("./commonAPI")


//register api
export const registerAPI = async (user) => {
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

//login
export const loginAPI = async (user) => {
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//add project
export const uploadArtworkAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST",`${BASE_URL}/artwork/add`,reqBody,reqHeader)
}


//all property
export const allArtworksAPI = async (reqHeader) => {
    return await commonAPI("GET",`${BASE_URL}/artwork/all`,{},reqHeader)
}