import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl md:text-9xl font-black text-white tracking-widest">
          404
        </h1>

        <div className="h-1 w-32 bg-cyan-500 mx-auto rounded-full my-6"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Go Home
          </Link>

          <a
            href="/destination"
            className="px-6 py-3 rounded-2xl border border-slate-600 text-white font-semibold hover:bg-slate-800 transition duration-300"
          >
            Explore Destinations
          </a>
        </div>

        <div className="mt-14 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce delay-150"></div>
          <div className="w-3 h-3 rounded-full bg-indigo-500 animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NotFound;