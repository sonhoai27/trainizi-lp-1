import Marquee from "react-fast-marquee";

/* eslint-disable @next/next/no-img-element */

const logos = [
  {
    name: "image30",
    src: "/assets/framer/XGbC896bpD3XgYgZUl5rcn0Itw.png",
  },
  {
    name: "image33",
    src: "/assets/framer/1tdu3w277xYc5QGzKTXlNggDGk.png",
  },
  {
    name: "image45",
    src: "/assets/framer/RqVOTcpj93wJiTUUOBbNMCC5NjU.png",
  },
  {
    name: "image36",
    src: "/assets/framer/KiymnzX7hNAhdoccP5wsUvhQiY.png",
  },
  {
    name: "image28",
    src: "/assets/framer/l1mkBYIyMY9wK97bzKgmBftG4.png",
  },
  {
    name: "image62",
    src: "/assets/framer/X7D4ndaukhd4LKmM4BypXr9hUXw.png",
  },
  {
    name: "image31",
    src: "/assets/framer/FaU4T13QwaRwx2ZBvs2OFhoHBEw.png",
  },
  {
    name: "tracybee",
    src: "/assets/framer/AMsc97X4uULDlBHR6fnxWpfAxg.png",
  },
  {
    name: "image42",
    src: "/assets/framer/U8Ngo18SmxwvXFWM68nuY71CgQ4.png",
  },
  {
    name: "image44",
    src: "/assets/framer/LHoHooTIRIceT1i67VFBQFXi2k.png",
  },
  {
    name: "image60",
    src: "/assets/framer/z0ieuagq2WBBtusAYw9mL69YPdk.png",
  },
  {
    name: "logo_2_",
    src: "/assets/framer/6qkTEHxszXOP5X4OcbZeAemG0M.png",
  },
  {
    name: "$065929_ad1b8b40a76b45f7990c901f41ebcbd0_mv2",
    src: "/assets/framer/KN6eNsd3qlTT7jMTDynw4MwEjJA.png",
  },
  {
    name: "image51",
    src: "/assets/framer/QkskAooZ4mFt2QsZPGE634mg.png",
  },
  {
    name: "image39",
    src: "/assets/framer/lruWHhZJwcb6kqJhj21lokoLX00.png",
  },
  {
    name: "image34",
    src: "/assets/framer/h04gwfE1ani8x8Xfda8WGU9nCoU.png",
  },
  {
    name: "Logo_3_",
    src: "/assets/framer/tXEGZYf98EljSWsQ2FuUTqsMGU.png",
  },
];

export default function TrustedBy() {
  const firstRow = logos.slice(0, 8);
  const secondRow = logos.slice(8);
  return (
    <div className="relative z-10 mx-auto max-w-6xl text-center">
      <div className="mt-8 space-y-8">
        <Marquee>
          {firstRow.map((logo, index) => (
            <div key={index} className="px-8">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 opacity-50 w-auto max-w-none grayscale"
              />
            </div>
          ))}
        </Marquee>
        <Marquee direction="right">
          {secondRow.map((logo, index) => (
            <div key={index} className="px-8">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 opacity-50 w-auto max-w-none grayscale"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}