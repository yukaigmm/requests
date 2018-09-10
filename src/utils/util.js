const getQueryString = (params) => {
    let queryString = '';
    for(let key in params){
        queryString += `${key}=${params[key]}&`
    }
    queryString = queryString.substring(0,queryString.length-1);
    return queryString;
}


module.exports = {
    getQueryString,
}