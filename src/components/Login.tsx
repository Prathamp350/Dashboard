import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded test credentials
  const TEST_EMAIL = "admin@atul.com";
  const TEST_PASSWORD = "admin123";


  const USER_EMAIL = "user@atul.com";
  const USER_PASSWORD = "user123";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple check against default credentials
    if (email === TEST_EMAIL && password === TEST_PASSWORD) {
      setError("");
      // Normally you'd store token or auth state here
      // For now just redirect to dashboard
      navigate("/dashboard"); // adjust path if your dashboard route is different
    } else if (email === USER_EMAIL && password === USER_PASSWORD) {
      setError("");
      navigate("/user-dashboard");    }
      else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background with Safety Signs */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-orange-50">
        {/* Safety Sign Bubbles (same as before) */}
        <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 flex items-center justify-center animate-pulse">
          <div className="text-4xl font-bold text-white">⚠️</div>
        </div>
        {/* ... keep all bubbles as you had them ... */}
        <div className="absolute top-[20%] right-[15%] w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20 flex items-center justify-center animate-bounce">
          <div className="text-3xl text-white">🚫</div>
        </div>
        <div className="absolute bottom-[15%] left-[15%] w-40 h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 flex items-center justify-center animate-pulse delay-1000">
          <div className="text-5xl text-white">✓</div>
        </div>
        <div className="absolute bottom-[25%] right-[10%] w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 flex items-center justify-center animate-bounce delay-500">
          <div className="text-3xl text-white">🛡️</div>
        </div>
        <div className="absolute top-[50%] left-[5%] w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-15 flex items-center justify-center animate-pulse delay-2000">
          <div className="text-2xl text-white">👷</div>
        </div>
        <div className="absolute top-[30%] left-[50%] w-24 h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-15 flex items-center justify-center animate-bounce delay-1500">
          <div className="text-3xl text-white">🔥</div>
        </div>
        <div className="absolute bottom-[40%] right-[30%] w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-15 flex items-center justify-center animate-pulse delay-3000">
          <div className="text-4xl text-white">⚡</div>
        </div>
        <div className="absolute top-[70%] left-[25%] w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-15 flex items-center justify-center animate-bounce delay-2500">
          <div className="text-2xl text-white">🥽</div>
        </div>
        <div className="absolute top-[80%] right-[40%] w-28 h-28 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-15 flex items-center justify-center animate-pulse delay-4000">
          <div className="text-3xl text-white">🔊</div>
        </div>
        <div className="absolute top-[5%] right-[50%] w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-15 flex items-center justify-center animate-bounce delay-3500">
          <div className="text-3xl text-white">🚪</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-22 px-4">
          {/* Illustration Section */}
          <div className="hidden lg:flex flex-1 flex-col items-center text-center">
            <div className="w-80 h-80 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-full mb-8 flex items-center justify-center shadow-2xl animate-float relative">
              <div className="text-8xl">🛡️</div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                ✓
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Safety First!
            </h2>
            <p className="text-xl text-gray-600 max-w-96 mb-6">
              Comprehensive safety training for a secure workplace environment
            </p>
          </div>

          {/* Login Section */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Safety Training Portal</h1>
                <p className="text-gray-600">Access your safety training modules</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="text-red-600 font-semibold text-center mb-4">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/10 transition-all bg-white"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      className="w-full h-12 pl-10 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-500/10 transition-all bg-white"
                      placeholder="Enter your password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded cursor-pointer" />
                    <label className="text-sm text-gray-600 cursor-pointer">Remember me</label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">Forgot Password?</a>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Access Training Portal
                </button>
              </form>

              <div className="text-center text-gray-600 mt-8">
                Need help?
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors ml-1">Contact Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Float Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;
