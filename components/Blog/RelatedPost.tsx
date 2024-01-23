import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  image,
  slug,
  title,
  publishDate,
}: {
  image: string;
  slug: string;
  title: string;
  publishDate: string;
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <Link href={slug}>
          <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
            <Image src={image} alt={title} fill />
          </div>
        </Link>
      </div>
      <div className="w-full">
        <h5>
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title.slice(0, 53)}...
          </Link>
        </h5>
        <p className="text-xs font-medium text-body-color">{publishDate}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
