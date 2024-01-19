const DivTitle2 = ({
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
          className={`wow fadeInUp w-full ${
            center ? "mx-auto text-center" : ""
          }`}
          data-wow-delay=".1s"
          style={{ marginBottom: mb }}
        >
          <h1 className="mb-4 text-4xl font-bold !leading-tight text-black dark:text-white sm:leading-tight md:text-5xl md:leading-tight ">
            {title}
          </h1>
          <p className="text-justify text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        </div>
      </>
    );
  };
  
  export default DivTitle2;
  