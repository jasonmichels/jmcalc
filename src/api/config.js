
let backendHost;
export const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

switch (hostname) {
    case 'bikefreetv.com':
        backendHost = 'http://bikefreetv.com:3001';
        break;
    default:
        backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3001';      
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`;

export const config = {
    getCalculationsUrl: `${API_ROOT}/calculations`,
    backendHost: backendHost
}