import { initTRPC } from '@trpc/server';
import { userRouter } from './routers/userRouter';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  user: userRouter,
  // Add more routers here as needed
});

export type AppRouter = typeof appRouter;