import { login, logout } from "@/lib";

export async function POST(req: Request) {
  const { pathname } = new URL(req.url);
  switch (pathname) {
    case "/api/auth/login":
      const res = await req.json();
      try {
        await login(res);

        return Response.json({ message: "Login api requested" });
      } catch (error) {
        return new Response("Login failed", { status: 401 });
      }
    case "/api/auth/logout":
      try {
        await logout();
        return Response.json({ message: "Logout api requested" });
      } catch (error) {
        return new Response("Logout failed", { status: 401 });
      }
    default:
      return Response.json({ message: "Hello from auth api!" });
  }
}

export async function GET(req: Request) {
  return Response.json({ message: "Hello from auth api!" });
}
