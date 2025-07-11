export const loggerMiddleware = (request, response, next) => {
  console.log(`logger: ${request.url} at ${Date.now()}`)
  next()
}
