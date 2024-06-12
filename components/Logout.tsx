"use client";
import { FormEvent } from "react";

export default function Logout() {
  const handleUserLogout = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (res.ok) {
      window.location.href = "/login";
    }
  };
  return (
    <form onSubmit={handleUserLogout}>
      <button type="submit">Logout</button>
    </form>
  );
}
