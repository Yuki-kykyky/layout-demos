import React from "react";
import Link from "next/link";
import { STCV2Routes } from "../../reference/route-reference";

export const Header = () => {
  const { header } = STCV2Routes.routes.global;

  return (
    <div className="bg-white py-4 px-8 flex items-center justify-between">
      <Link
        href={header.logo.path}
        className="text-2xl font-semibold text-gray-800"
      >
        Realestic
      </Link>
      <div className="space-x-6">
        {header.items.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="text-gray-600 hover:text-gray-800"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700"
      >
        Contact Us
      </Link>
    </div>
  );
};
