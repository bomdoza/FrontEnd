const DivTitle = ({
    title,
    paragraph,
    center,
    mb = "70px",
  }: {
    title: string;
    paragraph: string;
    width?: string;
    center?: boolean;
    mb?: string;
  }) => {
    return (
      <>
        <div
          className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
          data-wow-delay=".1s"
          style={{  marginBottom: mb }}
        >
          <h2 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-2xl md:text-[28px]">
            {title}
          </h2>
          <p className="text-base text-justify !leading-relaxed text-body-color md:text-xl lg:text-base xl:text-xl">
            {paragraph}
          </p>
        </div>
      </>
    );
  };
  
  export default DivTitle;
  