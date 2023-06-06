import React from "react";
import { HighlightsProps } from "../components/types";
import Link from "next/link";
const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    // <div>
    <div className="flex justify-center mt-10 gap-5 lg:gap-12 md:gap-12">
      {highlights.map((highlight: any) => {
        return (
          <div
            key={highlight.title}
            className="bg-white rounded-lg shadow-lg p-3 w-[300px] lg:w-[350px] md:w-[350px]"
          >
            <img
              src={highlight.image}
              alt={highlight.title}
              className="lg:w-full md:w-full w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-bold mb-2 text-[#008080] tracking-wide">
              {highlight.title}
            </h2>
            <div className="flex justify-between">
              <p className="text-gray-600 tracking-wide">
                {highlight.description}
              </p>

              <Link href={highlight.title.split(" ")[0].toLowerCase()}>
                <img
                  src={"/img/right-arrow.svg"}
                  alt="copy"
                  className="pt-2 h-10 w-10"
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
    // </div>
  );
};
export default Highlights;
