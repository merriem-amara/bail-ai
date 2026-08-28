"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/services/auth";


export default function LoginPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);
    setError("");


    try {

      await login(form);

      router.push("/dashboard");


    } catch {

      setError(
        "Invalid email or password"
      );


    } finally {

      setLoading(false);

    }
  }


  return (

    <main className="flex min-h-screen items-center justify-center bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-xl border bg-white p-8 shadow-sm"
      >

        <div>

          <h1 className="text-2xl font-bold">
            Lawyer Login
          </h1>

          <p className="text-sm text-gray-500">
            Access your BailAI workspace
          </p>

        </div>


        <input
          className="w-full rounded-lg border p-3"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e)=>
            setForm({
              ...form,
              email:e.target.value
            })
          }
        />


        <input
          className="w-full rounded-lg border p-3"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e)=>
            setForm({
              ...form,
              password:e.target.value
            })
          }
        />


        {error && (
          <p className="text-sm text-red-600">
            {error}
          </p>
        )}


        <button
          disabled={loading}
          className="w-full rounded-lg bg-black py-3 text-white"
        >

          {loading ? "Logging in..." : "Login"}

        </button>


      </form>

    </main>

  );
}
