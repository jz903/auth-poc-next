import { getSession, login, logout } from "@/lib";

import Form from "@/components/Form";

export default async function Page() {
  const session = await getSession();

  return (
    <section>
      <Form />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
