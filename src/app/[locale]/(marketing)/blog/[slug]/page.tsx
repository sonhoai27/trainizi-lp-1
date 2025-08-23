import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

import { db } from '@/libs/firebase';

interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  image: string;
}

async function getPost(slug: string) {
  const docRef = doc(db, 'blogs', slug);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Post;
  }
  return null;
}

async function getAllPosts() {
  const postsCollection = collection(db, 'blogs');
  const postsSnapshot = await getDocs(postsCollection);
  const posts = postsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Post[];
  return posts;
}


export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: any) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const description =
    "Rapidly create and deliver microlearning content at speed & scale with AI. #1 award-winning AI solution in Southeast Asia. For enterprises, schools and communities.";

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: 'article',
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: any) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <main className="min-h-screen">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-8">
              <span>
                {new Date(post.date.seconds * 1000).toLocaleDateString()}
              </span>
            </div>
            <img
              src={post.image}
              className="w-full h-auto rounded-lg mb-8"
            />
            <div
              className="prose lg:prose-xl text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>
      </main>
    </div>
  );
}