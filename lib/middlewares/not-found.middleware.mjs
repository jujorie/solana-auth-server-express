/**
 * @returns {import("express").RequestHandler}
 */
export function notFoundMiddleware() {
  return (_, res, next) => {
    res.statusCode = 404
    next(new Error('NOT FOUND'))
  }
}