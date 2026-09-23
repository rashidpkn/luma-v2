import React, { useState, useEffect } from "react";

const STORAGE_KEY = "luma_waitlist_email";

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const [queueNumber, setQueueNumber] = useState<number>(1842);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setSubmittedEmail(saved);
        setStatus("success");
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmed = email.trim();
    if (!trimmed) {
      setErrorMessage("Please enter your email address.");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate fast API latency
    setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, trimmed);
      } catch {
        // LocalStorage fallback
      }
      // Generate randomized realistic queue number
      const num = Math.floor(1800 + Math.random() * 200);
      setQueueNumber(num);
      setSubmittedEmail(trimmed);
      setStatus("success");
    }, 600);
  };

  const handleReset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setSubmittedEmail(null);
    setEmail("");
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success" && submittedEmail) {
    return (
      <div className="w-full max-w-lg mx-auto bg-[#112240]/90 border border-[#00b4d8]/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,180,216,0.15)] text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-[#00b4d8] to-[#90e0ef] flex items-center justify-center text-slate-900 shadow-lg shadow-[#00b4d8]/30 mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-dmsans">
          You're on the VIP Waitlist!
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
          We've reserved priority access for{" "}
          <span className="text-[#90e0ef] font-semibold">{submittedEmail}</span>.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a192f] border border-[#00b4d8]/30 text-xs sm:text-sm text-[#00b4d8] font-mono font-medium mb-6">
          <span>Priority Queue:</span>
          <span className="font-bold text-white bg-[#00b4d8]/20 px-2 py-0.5 rounded">
            #{queueNumber.toLocaleString()}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white font-medium text-sm hover:opacity-95 shadow-md shadow-[#00b4d8]/20 transition-all"
          >
            <span>Join Telegram Community</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            Register another email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row items-stretch gap-2.5 p-2 rounded-2xl bg-[#112240]/80 border border-white/15 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] focus-within:border-[#00b4d8] focus-within:shadow-[0_0_25px_rgba(0,180,216,0.25)] transition-all duration-300">
          <div className="relative flex-1 flex items-center">
            <div className="absolute left-4 text-slate-400 pointer-events-none">
              <svg className="w-5 h-5 text-[#00b4d8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email for private beta access"
              disabled={status === "loading"}
              className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#00b4d8]/25 hover:shadow-[#00b4d8]/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 cursor-pointer overflow-hidden"
          >
            {/* Hover sheen effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                <span>Securing Spot...</span>
              </span>
            ) : (
              <>
                <span>Get Early Access</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>

        {status === "error" && errorMessage && (
          <p className="mt-2 text-xs text-rose-400 text-left pl-3 flex items-center gap-1.5 animate-in fade-in">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{errorMessage}</span>
          </p>
        )}
      </form>

      {/* Social proof counter */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
        <div className="flex -space-x-2 overflow-hidden">
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0a192f] bg-[#0077b6] text-[10px] text-white flex items-center justify-center font-bold">
            JD
          </div>
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0a192f] bg-[#00b4d8] text-[10px] text-white flex items-center justify-center font-bold">
            AL
          </div>
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0a192f] bg-[#112240] text-[10px] text-[#90e0ef] flex items-center justify-center font-bold border border-white/10">
            RK
          </div>
          <div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0a192f] bg-gradient-to-tr from-cyan-500 to-blue-600 text-[10px] text-white flex items-center justify-center font-bold">
            +4k
          </div>
        </div>
        <span>
          <strong className="text-white font-medium">4,850+</strong> traders &amp; digital nomads joined the waitlist
        </span>
      </div>
    </div>
  );
};

export default WaitlistForm;
