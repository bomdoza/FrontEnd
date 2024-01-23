import { Feature } from "@/types/feature";

const Singlecomp = ({ comp }: { comp: Feature }) => {
  const { icon, title, paragraph, imgfundo } = comp;
  return (
    <div className="w-fullp-2 pt-4">
      <div className="wow fadeInUp" data-wow-delay=".15s">

        <div className="flex">
            <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-white bg-opacity-10 text-white">
            {icon}
            </div>
            <h3 className="mb-5 ml-8 text-xl font-bold text-black dark:text-gray-light sm:text-2xl lg:text-xl xl:text-2xl ">
            {title}
            </h3>
        </div>
        <p className="text-justify pr-[10px] h-28 text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Singlecomp;
