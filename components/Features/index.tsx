import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Link from 'next/link';

const Features = () => {
  return (
    <>
      <section id="features" className="mt-10 pt-10 md:pt-16 lg:pt-24">
        <div className="container">
          <SectionTitle
            title="Serviços"
            paragraph="Conheça a nossa gama de serviços, desde veículos e 
            equipamentos até tapetes e superfícies delicadas."
            center
            mb="60px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <Link key={feature.id} href={`/feature/${feature.id}`} passHref>
                <SingleFeature feature={feature} />            
            </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;