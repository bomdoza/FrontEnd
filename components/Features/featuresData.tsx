import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg 
      height="42"
      width="40"
      fill="currentColor"
      viewBox="0 0 16 16">
        <path
        fillRule="evenodd"
        d="M2.52 3.515A2.5 2.5 0 014.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 01.049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 00.381-.404l.792-1.848zM3 10a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2zM6 8a1 1 0 000 2h4a1 1 0 100-2H6zM2.906 5.189l.956-1.913A.5.5 0 014.309 3h7.382a.5.5 0 01.447.276l.956 1.913a.51.51 0 01-.497.731c-.91-.073-3.35-.17-4.597-.17-1.247 0-3.688.097-4.597.17a.51.51 0 01-.497-.731z"
        />
      </svg>
    ),
    title: "Lavagem de carros",
    paragraph:
      "Restaure o brilho e a frescura do seu veículo.",
      imgfundo: "/images/servicos/carros/pexels.jpg",
      price: "100$",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 16 16" className="fill-current">
        <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
      </svg>
    ),
    title: "Lavagem de tanques",
    paragraph:
      "Limpeza e descontaminização completa.",
      imgfundo: "/images/servicos/tanques/tanque.jpg",
      price: "100$",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="40" width="42" viewBox="0 0 640 512" className="fill-current">
       <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z"/>
      </svg>
    ),
    title: "Lavagem de mobílias",
    paragraph:
      "Restaurando a pureza, conforto e a aparência",
      imgfundo: "/images/servicos/tapetes/tapete1.jpeg",
      price: "100$",
  },
  
];
export default featuresData;
