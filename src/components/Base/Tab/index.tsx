"use client";
import React from "react";
import Link from "next/link";
import Heading from "@/components/Base/Heading";
import Container from "@/components/Base/Container";
import { usePathname } from "next/navigation";

export default function Tab() {
  const pathname = usePathname();

  return (
    <Container>
      <div className="p-8">
        <div className="flex col-span-2 justify-center gap-2 border-b">
          <Link
            href="/home"
            className="flex col-span-1 items-end justify-end cursor-pointer w-full"
          >
            <div
              className={`w-full max-w-72 p-2 text-center ${
                pathname === "/home" || pathname === "/"
                  ? "border-b-[0.3rem] rounded-sm border-b-primary text-secondary"
                  : "text-secondary"
              }`}
            >
              <Heading
                level={3}
                className={`${pathname === "/home" || pathname=== "/" ? "font-bold" : ""}`}
              >
                Jobs for you
              </Heading>
            </div>
          </Link>
          <Link
            href="/applied-shift"
            className="flex col-span-1 items-start justify-start cursor-pointer w-full"
          >
            <div
              className={`w-full max-w-72 p-2 text-center ${
                pathname === "/appliedjobs"
                  ? "border-b-[0.3rem] rounded-sm border-b-primary text-secondary"
                  : "text-secondary"
              }`}
            >
              <Heading
                level={3}
                className={`${pathname === "/appliedjobs" ? "font-bold" : ""}`}
              >
                My Jobs
              </Heading>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
