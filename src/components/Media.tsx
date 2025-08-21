import React from 'react';

interface MediaLogo {
  name: string;
  imageUrl: string;
  link: string;
}

const mediaLogos: MediaLogo[] = [
  {
    name: 'Media 1',
    imageUrl: 'https://framerusercontent.com/images/OSlEvxV1EPm3vfi8dbfnUqreSlQ.png?scale-down-to=1024',
    link: 'https://www.youtube.com/watch?v=Bv0j3V0xmfA'
  },
  {
    name: 'Media 2',
    imageUrl: 'https://framerusercontent.com/images/kgxoysjexl24Z32kSWDYwfnQs4.webp?scale-down-to=512',
    link: 'https://n.news.naver.com/article/029/0002843090?sid=105'
  },
  {
    name: 'Media 3',
    imageUrl: 'https://framerusercontent.com/images/7gaisJ3TcQ4jA9iG5GipHZVHs.png?scale-down-to=2048',
    link: 'https://fb.watch/prsHIsFphf/?mibextid=v7YzmG'
  },
  {
    name: 'Media 4',
    imageUrl: 'https://framerusercontent.com/images/wq66Lxd95tCi92L3epBvqHwaEM.png?scale-down-to=1024',
    link: 'https://tuoitre.vn/trainizi-bai-hoc-1-phut-cho-nguoi-lao-dong-20240125153905683.htm'
  },
  {
    name: 'Media 5',
    imageUrl: 'https://framerusercontent.com/images/W26FhLIeU3Yc1kBzUSgSBm2nP0.png?scale-down-to=1024',
    link: 'https://thanhnien.vn/startup-cong-nghe-viet-trainizi-duoc-vinh-danh-tai-han-quoc-185230915010710976.htm'
  },
];

const Media: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Featured by international media as a top AI solution for learning
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {mediaLogos.map((logo) => (
            <a
              key={logo.name}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <img
                className="max-h-12 h-auto"
                src={logo.imageUrl}
                alt={logo.name}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;