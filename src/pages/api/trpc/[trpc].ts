import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "@/backend/router";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});

// import * as trpcNext from "@trpc/server/adapters/next";
// import { AppRouter } from "@/backend/router";

// // export API handler
// export default trpcNext.createNextApiHandler({
//   router: AppRouter,
//   createContext: () => null,
// });
