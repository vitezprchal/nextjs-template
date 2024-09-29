import { router } from './trpc'
import { userRouter } from './routers/userRouter'

export const appRouter = router({
    user: userRouter,
    // Add more routers here as needed
})

export type AppRouter = typeof appRouter