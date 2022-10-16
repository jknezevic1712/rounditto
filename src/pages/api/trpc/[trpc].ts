import * as trpcNext from "@trpc/server/adapters/next";
import { AppRouter } from "@/backend/router";

// export API handler
export default trpcNext.createNextApiHandler({
  router: AppRouter,
  createContext: () => null,
});
