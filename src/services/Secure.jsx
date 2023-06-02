// function to set token in system 
function setToken() {
    localStorage.setItem('token', 16)
}

// function to get token 
function getToken() {
    const token = localStorage.getItem("token")
    return !!token 
}


// function to remove token 
function removeToken() {
    localStorage.removeItem("token")
}

export const serviceSecure = { setToken, getToken, removeToken }