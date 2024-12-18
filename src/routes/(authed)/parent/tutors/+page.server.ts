import { getAllUsers } from "$lib/server/services/user.service";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const users = getAllUsers();

  return { users };
}) satisfies PageServerLoad;
