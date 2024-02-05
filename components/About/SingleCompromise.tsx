
const Singlecomp = ({ comp, icon }) => {
  const { title, paragraph } = comp;
  return (
    <div className="w-full pt-4">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex">
          <div className=" mb-5 mr-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-black bg-opacity-10 text-black dark:bg-gray-800 dark:text-white">
            {icon}
          </div>
          <h3 className="mb-5  text-base font-bold text-black dark:text-gray-light sm:text-xl lg:text-2xl">
            {title}
          </h3>
        </div>
        <p className="h-28 pr-2 text-justify text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default Singlecomp;
