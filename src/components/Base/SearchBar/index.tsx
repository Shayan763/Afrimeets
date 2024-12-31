"use client";
import React, { useState } from "react";
import BaseImage from "@/components/Base/BaseImage";
import Container from "@/components/Base/Container";
import Button from "@/components/Base/Button";

const JobSearchBar = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSearch = () => {
    if (jobTitle || location || availability) {
      console.log("Searching for:", { jobTitle, location, availability });
    } else {
      console.log("Please fill in at least one field.");
    }
  };

  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex items-center p-2 bg-white border border-gray-300 rounded-lg w-full max-w-5xl">
          <div className="flex-1 relative">
            <BaseImage
              src="/assets/images/search.png"
              alt="Search Icon"
              width={24}
              height={24}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Job title or restaurant"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-2 pl-10 border-r border-gray-300 outline-none rounded-l-lg"
            />
          </div>
          <div className="flex-1 relative">
            <BaseImage
              src="/assets/images/map-pin.png"
              alt="Location Icon"
              width={24}
              height={24}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="City, state, zipcode or remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 pl-10 border-r border-gray-300 outline-none"
            />
          </div>
          <div className="flex-1 relative">
            <BaseImage
              src="/assets/images/clock-3.png"
              alt="Availability Icon"
              width={24}
              height={24}
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full p-2 pl-10 border-r border-gray-300 outline-none"
            />
          </div>
          <Button
            title="Find Jobs"
            onClick={handleSearch}
            isPrimary={true}
            className="ml-3 py-2 px-4 rounded-r-lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default JobSearchBar;
