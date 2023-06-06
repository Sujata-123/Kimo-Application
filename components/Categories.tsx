import React, { useState } from "react";
import { categoriesData } from "./data";
import { NextPage } from "next";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { Category } from "./types";

const ActivityList: NextPage<Category> = () => {
  const [expandedCategory, setExpandedCategory] = useState<string>("");

  const toggleActivities = (categoryName: any) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory("");
    } else {
      setExpandedCategory(categoryName);
    }
  };
  return (
    <div className="lg:w-1/2 md:w-full sm:w-full">
      <div className="space-y-4 ">
        {categoriesData.map((category: any) => (
          <div
            key={category.name}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleActivities(category.name)}
            >
              <h2 className="text-xl font-bold">{category.name}</h2>
              {expandedCategory === category.name ? (
                <FaArrowUp
                  className="transform rotate-180"
                  size={15}
                  color="green"
                />
              ) : (
                <FaArrowRight
                  size={15}
                  color="green"
                  style={{ fontWeight: 100 }}
                />
              )}
            </div>
            {expandedCategory === category.name && (
              <ul className="mt-4 space-y-2 list-disc pl-4">
                {category.activities.map((activity: any, index: any) => (
                  <li key={index}>{activity.title}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
