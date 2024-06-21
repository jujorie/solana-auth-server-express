/**
 * @returns {import('express').ErrorRequestHandler}
 */
export function errorMiddleware() {
  return (error, _req, res, _next) => {
    if(res.statusCode < 300) {
      res.statusCode = 500
    }
    res.json({
      error: error.message,
      status: res.statusCode
    })
  }
}