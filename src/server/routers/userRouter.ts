import { publicProcedure, router } from '../trpc';
import { prisma } from '../prisma';
import { createUserSchema } from '../schemas/userSchema';

export const userRouter = router({
  getUsers: publicProcedure.query(async () => {
    return await prisma.user.findMany();
  }),
  createUser: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ input }) => {
      console.log("input", input);
      return await prisma.user.create({
        data: input,
      });
    }),
});