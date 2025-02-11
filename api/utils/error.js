export function errorHandler(statusCode, message){
    const error = new Error(message)
    error.statusCode = message
    error.message = message
    return error
}