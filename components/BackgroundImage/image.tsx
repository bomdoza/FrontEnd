import Image from "next/image";

const BackgroundImage = ({image}) => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Image
        src={image}
        alt="image hero"
        fill={true}
        style={{
          objectFit: "cover",
        }}
        priority={true}
      />
    </div>
  );
};

export default BackgroundImage;
