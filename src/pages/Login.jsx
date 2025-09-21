import React, { useState } from 'react';

// You would typically use an icon library like 'react-icons' for production.
// For simplicity, we'll use emoji placeholders for the icons.
const GoogleIcon = () => <span className="text-xl mr-2">G</span>;
const EmailIcon = () => <span className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">📧</span>;
const LockIcon = () => <span className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">🔒</span>;
const ArrowIcon = () => <span className="ml-2">→</span>;

const TailwindLoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Call the onLogin prop passed from App.jsx
    // We'll use the email as the name for now.
    onLogin(email, email.split('@')[0]);
  };

  const handleGoogleSignIn = () => {
    // ⚠️ Placeholder for Google OAuth logic
    console.log('Continuing with Google...');
    alert('Redirecting to Google Sign-In...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-xl">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black-500">Welcome </h1>
          <p className="text-sm text-gray-500">Sign in to your account to continue</p>
        </div>

        {/* Continue with Google Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-5"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        {/* OR Divider */}
        <div className="relative flex justify-center items-center my-6">
          <div className="absolute w-full border-t border-gray-200"></div>
          <span className="bg-white px-3 text-xs uppercase text-gray-400 relative z-10">
            OR CONTINUE WITH
          </span>
        </div>

        <form onSubmit={handleSignIn}>
          
          {/* Email Input Group */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 sr-only">
              Email
            </label>
            <div className="relative">
              <EmailIcon />
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-sm"
              />
            </div>
          </div>

          {/* Password Input Group */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 sr-only">
              Password
            </label>
            <div className="relative">
              <LockIcon />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-sm"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Sign In <ArrowIcon />
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Don't have an account?
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
            Sign up
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default TailwindLoginPage;