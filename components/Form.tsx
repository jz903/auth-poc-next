"use client";
import { FormEvent } from "react";

export default function Form() {
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
      window.location.href = "/";
    }
  };

  const handleUserLogout = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (res.ok) {
      window.location.href = "/";
    }
  };
  return (
    <>
      <form onSubmit={handleUserLogin}>
        <input name="email" type="email" placeholder="Email" />
        <br />
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleUserLogout}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
}
