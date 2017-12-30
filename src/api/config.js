
let backendHost;
export const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

switch (hostname) {
    case '10.33.50.83':
        backendHost = 'http://10.33.50.83:9000';
        break;
    default:
        backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:9000';      
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;

export const config = {
    getCalculationsUrl: `${API_ROOT}/calculations`
}