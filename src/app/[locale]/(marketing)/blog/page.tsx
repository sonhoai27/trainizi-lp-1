import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

import { db } from '@/libs/firebase';

import BlogList from '@/components/BlogList';

interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: string;
  image: string;
  createdAt?: any;
  updatedAt?: any;
}

async function getPosts() {
  const postsCollection = collection(db, 'blogs');
  const q = query(postsCollection, orderBy('date', 'desc'), limit(9));
  const documentSnapshots = await getDocs(q);
  const posts = documentSnapshots.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      date: data.date.toDate().toISOString(),
      createdAt: null,
      updatedAt: null,
    };
  }) as Post[];
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <main className="min-h-screen">
        <section className="bg-framer-light-purple py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
              Trainizi Blog
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Insights on AI, education, and the future of learning.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogList initialPosts={posts} />
          </div>
        </section>
      </main>
    </div>
  );
}