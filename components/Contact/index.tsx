import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";


const Contact = () => {
  const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section id="contact" className="overflow-hidden py-14 md:py-14 lg:py-14">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          
          <SectionTitle
            title="Contacto"
            paragraph=""
            center
            mb="1px"
            />

          <Breadcrumb
            pageName=""
            description="Estamos aqui para atender às suas necessidades de limpeza e restauração. 
            Entre em contato conosco para agendar nossos serviços e proporcionar uma renovação excepcional aos seus pertences."
          />
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">

              <List text="Endereço: palmarejo, Praia" />
              <List text="Swag: 5 99 99 99" />
              <List text="Play: 955 55 55" />
              <List text="Bomdoza@gmail.com" />
              

          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">

            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
