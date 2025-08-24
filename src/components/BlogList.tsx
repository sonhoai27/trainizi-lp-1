'use client';

import { collection, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore';
import Link from 'next/link';
import { useState } from 'react';

import { db } from '@/libs/firebase';
import { useTranslations } from 'next-intl';

interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: string;
  image: string;
  createdAt?: any;
}

async function getMorePosts(last: any) {
  const postsCollection = collection(db, 'blogs');
  const q = query(
    postsCollection,
    orderBy('date', 'desc'),
    startAfter(last),
    limit(9),
  );
  const documentSnapshots = await getDocs(q);
  const posts = documentSnapshots.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      date: data.date.toDate().toISOString(),
    };
  }) as Post[];
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  return { posts, lastVisible };
}

export default function BlogList({ initialPosts }: { initialPosts: Post[] }) {
  const t = useTranslations('blog');
  const [posts, setPosts] = useState(initialPosts);
  const [last, setLast] = useState<any>(
    initialPosts[initialPosts.length - 1]?.date,
  );
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    const { posts: newPosts, lastVisible } = await getMorePosts(last);
    setPosts((prev) => [...prev, ...newPosts]);
    setLast(lastVisible);
    setLoading(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={post.image}
                  className="w-full h-full object-cover"
                  alt={post.title}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl min-h-[32px] line-clamp-2 text-black mb-2">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          type="button"
          onClick={loadMore}
          disabled={loading}
          className="bg-izi-600 text-white px-6 py-3 rounded-lg"
        >
          {loading ? <span className='spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-current border-t-transparent' /> : t("loadMore")}
        </button>
      </div>
    </>
  );
}