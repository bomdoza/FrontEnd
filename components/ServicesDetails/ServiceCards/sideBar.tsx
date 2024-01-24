"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faChair, faWater } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname} from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  const services = [
    { title: "Lavagem de Carros", icon: faCar, url: "/service/Car-Wash" },
    {
      title: "Lavagem de Mobília",
      icon: faChair,
      url: "/service/Furniture-Washing",
    },
    {
      title: "Lavagem de Tanques",
      icon: faWater,
      url: "/service/Tank-Washing",
    },
  ];

  return (
    <>
      <div
        className="shadow-solid-4 dark:border-strokedark sticky top-[83px] 
      rounded-lg border border-gray-light bg-white p-4 shadow-three
      transition-all dark:border-dark dark:bg-gray-dark "
      >
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li
              key={index}
              className={`block ${
                pathname === service.url ? "bg-gray-light dark:bg-white/5" : ""
              }`}
            >
              <Link
                href={service.url}
                className="flex w-full rounded-sm px-3 py-2 text-base text-body-color
               hover:bg-gray-light  dark:text-body-color-dark dark:hover:bg-white/5"
              >
                {service.icon && (
                  <span className="mr-2">
                    <FontAwesomeIcon className="h-6 w-6" icon={service.icon} />
                  </span>
                )}
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="z-10 mt-3  h-[300px] w-full overflow-hidden  rounded-lg border bg-cover bg-center px-4 shadow-three"
        style={{
          backgroundImage: 'url("/images/servicos/tanques/tanque.jpg")',
        }}
      >
        <div className="py-8">
          <h1 className="mb-2 text-center text-[20px] font-bold leading-tight text-black dark:text-white">
            Quer fazer uma lavagem profissional completa?
          </h1>
          <p className="mb-2 text-center font-bold">
            Ligue para Bom Doza ou entre em contato
          </p>
          <h1 className="text-center text-[20px] font-bold">9888999</h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="/contact"
            className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Contacte-nos
          </Link>
        </div>
      </div>
    </>
  );
};
export default SideBar;
