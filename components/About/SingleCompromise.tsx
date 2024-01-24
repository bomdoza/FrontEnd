import { Feature } from "@/types/feature";

const Singlecomp = ({ comp }: { comp: Feature }) => {
  const { icon, title, paragraph} = comp;
  return (
    <div className="w-full pt-4">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex">
            <div className=" flex mb-5 mr-5 h-[70px] w-[70px] items-center justify-center rounded-md bg-black dark:bg-gray-800 bg-opacity-10 text-black dark:text-white">
            {icon}
            </div>
            <h3 className="mb-5  text-base font-bold text-black dark:text-gray-light sm:text-xl lg:text-2xl">
            {title}
            </h3>
        </div>
        <p className="text-justify pr-2 h-28 text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Singlecomp;
