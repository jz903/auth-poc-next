import { getSession, login, logout } from "@/lib";

import Logout from "@/components/Logout";

export default async function Page() {
  const session = await getSession();

  return (
    <section>
      <h1>Dashboard</h1>
      <pre>current user: {JSON.stringify(session, null, 2)}</pre>
      <Logout />
    </section>
  );
}
