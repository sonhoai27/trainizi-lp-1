import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-section py-16" id="hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Scale your training with our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              ✦ plug-and-play academy
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            <span className="font-bold text-2xl">218%</span> (*) higher income per employee when training is delivered effectively
          </p>
        </div>
        <div className="text-center mb-12">
          <Link href="https://calendar.app.google/jE5PFU8BvX9rvNC57" target="_blank" rel="noopener" className="inline-block bg-secondary text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors">
            Book A Demo
          </Link>
        </div>
        <div className="images-container grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <video src="https://framerusercontent.com/assets/RMgKLWfr1IVEsA4vjcrH1pK9Xgg.mp4" loop autoPlay muted playsInline className="rounded-lg shadow-lg"></video>
          </div>
          <div className="md:col-span-1">
            <Image src="https://framerusercontent.com/images/3TcvLLzZE1NGbvQUHIIX0xmxVp0.jpg" alt="Image 02" width={251} height={220} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:col-span-1">
            <Image src="https://framerusercontent.com/images/WtGH2uQR627jXOraycnBE2wFR4.jpg" alt="Image 03" width={251} height={220} className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="fact-numbers-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          <div>
            <p className="text-5xl font-bold">80%</p>
            <p className="text-gray-600">time and cost saved</p>
          </div>
          <div>
            <p className="text-5xl font-bold">100%</p>
            <p className="text-gray-600">learning data processed & analyzed</p>
          </div>
          <div>
            <p className="text-5xl font-bold">24/7</p>
            <p className="text-gray-600">Q&A with an in-house trainer bot</p>
          </div>
          <div>
            <p className="text-5xl font-bold">Swiftly</p>
            <p className="text-gray-600">and securely integrated to your system</p>
          </div>
        </div>
        <p className="text-right text-sm text-gray-500 mt-8">(*) Source: Association of Training & Development</p>
      </div>
    </section>
  );
}