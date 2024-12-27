import React from "react";
import SectionHeading from "./SectionHeading";
import { properties } from "@/data/data";
import PropertyCard from "./PropertyCard";

const Property = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[89%] max-w-screen-xl mx-auto">
        {" "}
        {/* Added max-w-screen-xl */}
        <SectionHeading heading="Discover Our Properties" />
        <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
          {properties.map((property, i) => {
            return (
              <div
                key={property.id}
                data-aos="zoom-in"
                data-aos-delay={`{i*150}`}
                data-aso-anchor-placement="top-center"
              >
                <PropertyCard property={property} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Property;
