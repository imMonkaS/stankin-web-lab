import config from "../config/config";

function dict_to_qparams(dict){
    let str = [];
    for(let p in dict){
        if(dict[p] != ''){
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(dict[p]));
        }
    }
        
    return str.join("&");
}

const fetcher = async (path, method = "GET", body = null, auth = false, queryParams = null) => {
    const headers = { "Content-Type": "application/json" };
    if (auth) {
        const token = localStorage.getItem("token");
        if (token) headers["Authorization"] = `Bearer ${token}`;
    }

    const options = { method, headers };
    if (body) options.body = JSON.stringify(body);

    let requestURL = `${config.apiLink}/v1${path}`

    if (queryParams) requestURL += '?' + dict_to_qparams(queryParams)

    const response = await fetch(requestURL, options);
    return response.ok ? response.json() : Promise.reject(await response.json());
};

export default fetcher;
