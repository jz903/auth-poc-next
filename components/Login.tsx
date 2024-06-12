"use client";
import { FormEvent } from "react";

export default function Login() {
  const handleUserLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });

    if (res.ok) {
      window.location.href = "/dashboard";
    }
  };
  return (
    <>
      <form onSubmit={handleUserLogin}>
        <input name="email" type="email" placeholder="Email" />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
