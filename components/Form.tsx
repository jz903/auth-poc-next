"use client";
import { useRef } from "react";

export default function Form() {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleUserLogin = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef?.current?.value,
      }),
    });

    if (res.ok) {
      window.location.href = "/";
    }
  };

  const handleUserLogout = async (e: any) => {
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
        <input name="email" type="email" placeholder="Email" ref={emailRef} />
        <br />
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleUserLogout}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
}
