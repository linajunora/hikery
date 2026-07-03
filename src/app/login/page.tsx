"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else setMessage("Account created! Check database.");
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else setMessage("Signed in! Auth works.");
    router.push("/dashboard");
    setLoading(false);
  };

  return (
    <div>
      <h1>Hikery Login</h1>

      <div style={{ marginBottom: "10px" }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>

      {message && <p>{message}</p>}
      <button onClick={handleSignIn} disabled={loading}>
        Log in
      </button>
      <button onClick={handleSignUp} disabled={loading}>
        Sign up
      </button>
    </div>
  );
}
