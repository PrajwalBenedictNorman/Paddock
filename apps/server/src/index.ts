import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import userRouter from './router/user.js'
import sandboxRouter from './router/sandbox.js'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
const app = new Hono()

app.use('*', clerkMiddleware())
app.route("/user",userRouter)
app.route("/sandboxes",sandboxRouter)
app.get('/', (c) => {
  const auth = getAuth(c)

  if (!auth?.userId) {
    return c.json({
      message: 'You are not logged in.',
    })
  }

  return c.json({
    message: 'You are logged in!',
    userId: auth.userId,
  })
})


serve({
  fetch: app.fetch,
  port: 8080,
}, (info) => {
  console.log(`Server running at http://localhost:${info.port}`)
})


export default app