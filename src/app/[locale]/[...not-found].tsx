'use client';
import { motion } from 'framer-motion'; // Cần cài đặt framer-motion
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-8 text-center lg:px-40"
        >
          {/* Error Code */}
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className="mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-9xl font-bold text-transparent"
          >
            404
          </motion.h1>

          {/* Main Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-4xl font-medium text-gray-700"
          >
            Oops! Page Not Found
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-lg text-gray-600"
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => router.back()}
              className="rounded-lg bg-gray-800 px-6 py-3 text-white transition-all duration-200 hover:bg-gray-700 hover:shadow-lg"
            >
              Go Back
            </button>

            <Link
              href="/public"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-lg"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
