import { z } from "zod";
import { router, publicProcedure } from "@/utils/trpc";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

// import * as trpc from "@trpc/server";
// import { z } from "zod";

// export const AppRouter = trpc.router().query("hello", {
//   input: z
//     .object({
//       text: z.string().nullish(),
//     })
//     .nullish(),
//   resolve({ input }) {
//     return {
//       greeting: `hello ${input?.text ?? "world"}`,
//     };
//   },
// });

// // export type definition of API
// export type AppRouter = typeof AppRouter;

// import { initTRPC, TRPCError } from '@trpc/server';

// // Avoid exporting the entire t-object since it's not very
// // descriptive and can be confusing to newcomers used to t
// // meaning translation in i18n libraries.
// const t = initTRPC.create();

// // Base router and procedure helpers
// export const router = t.router;
// export const publicProcedure = t.procedure;

// /**
//  * Reusable middleware that checks if users are authenticated.
//  * @note Example only, yours may vary depending on how your auth is setup
//  **/
// const isAuthed = t.middleware(({ next, ctx }) => {
//   if (!ctx.session?.user?.email) {
//     throw new TRPCError({
//       code: 'UNAUTHORIZED',
//     });
//   }
//   return next({
//     ctx: {
//       // Infers the `session` as non-nullable
//       session: ctx.session,
//     },
//   });
// });

// // Protected procedures for logged in users only
// export const protectedProcedure = t.procedure.use(isAuthed);
