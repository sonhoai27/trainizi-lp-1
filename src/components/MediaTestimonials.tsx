import { useTranslations } from 'next-intl';

interface MediaLogo {
  name: string;
  src: string;
  link: string;
  alt: string;
}

const mediaLogos: MediaLogo[] = [
  {
    name: 'YouTube',
    src: 'https://framerusercontent.com/images/OSlEvxV1EPm3vfi8dbfnUqreSlQ.png?scale-down-to=1024',
    link: 'https://www.youtube.com/watch?v=Bv0j3V0xmfA',
    alt: 'YouTube logo'
  },
  {
    name: 'Naver',
    src: 'https://framerusercontent.com/images/kgxoysjexl24Z32kSWDYwfnQs4.webp?scale-down-to=512',
    link: 'https://n.news.naver.com/article/029/0002843090?sid=105',
    alt: 'Naver News logo'
  },
  {
    name: 'Facebook',
    src: 'https://framerusercontent.com/images/7gaisJ3TcQ4jA9iG5GipHZVHs.png?scale-down-to=2048',
    link: 'https://fb.watch/prsHIsFphf/?mibextid=v7YzmG',
    alt: 'Facebook logo'
  },
  {
    name: 'TuoiTre',
    src: 'https://framerusercontent.com/images/wq66Lxd95tCi92L3epBvqHwaEM.png?scale-down-to=1024',
    link: 'https://tuoitre.vn/trainizi-bai-hoc-1-phut-cho-nguoi-lao-dong-20240125153905683.htm',
    alt: 'TuoiTre newspaper logo'
  },
  {
    name: 'ThanhNien',
    src: 'https://framerusercontent.com/images/W26FhLIeU3Yc1kBzUSgSBm2nP0.png?scale-down-to=1024',
    link: 'https://thanhnien.vn/startup-cong-nghe-viet-trainizi-duoc-vinh-danh-tai-han-quoc-185230915010710976.htm',
    alt: 'ThanhNien newspaper logo'
  }
];

const MediaTestimonials = () => {
  const t = useTranslations('MediaTestimonials');

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 wow animate__animated animate__fadeInUp">
          <h2 className="text-3xl sm:text-4xl text-black mb-4">{t("title")}</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {mediaLogos.map((media, index) => (
            <a
              key={index}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group wow animate__animated animate__fadeInUp block transition-all duration-300"
            >
              <img
                src={media.src}
                alt={media.alt}
                className="h-12 sm:h-16 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="pb-16"></div>
    </section>
  );
};

export default MediaTestimonials;