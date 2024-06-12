import { getSession } from "@/lib";

import Login from "@/components/Login";

export default async function Page() {
  const session = await getSession();

  return (
    <section>
      <h1>Login</h1>
      <Login />
      <pre>current user: {JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
