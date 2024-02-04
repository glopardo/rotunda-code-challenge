export function parseUrl(urlFormatString, urlInstance) {
    let retObject = {}
    let optParams = ''
    const queryStringIndex = urlInstance.indexOf('?')

    if (queryStringIndex !== -1) {
        optParams = urlInstance.slice(queryStringIndex + 1)
        urlInstance = urlInstance.slice(0, queryStringIndex)
    }
    const urlInstanceSplitted = urlInstance.split('/')

    urlFormatString.split('/')
        .forEach((part, index) => {
            if (part[0] === ':') {
                retObject[part.slice(1)] = urlInstanceSplitted[index]
            }
    })
    return {...retObject, ...mapQueryStringParamsToObject(optParams)}
}

function mapQueryStringParamsToObject(queryString) {
    const pairs = queryString.split('&')
    let result = {};

    for (let i = 0; i < pairs.length; i++) {
        const keyValue = pairs[i].split('=');
        result[keyValue[0]] = keyValue[1];
    }

    return result    
}