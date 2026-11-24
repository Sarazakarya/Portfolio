"use client";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";
import Image from "next/image";
import gsap from "gsap";
import { projectsData } from "@/lib/Constant/projects";

export function CardImage() {
  const cardsRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current?.querySelectorAll(".project-card");

    if (!cards) return;

    const animation = gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  const [open, setOpen] = useState(6);
  const sliced = projectsData.slice(0, open);

  return (
    <div
      ref={cardsRef}
      className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10"
    >
      {sliced.map((ele) => (
        <Card
          key={ele.id}
          className="project-card relative mx-auto w-full max-w-sm pt-0 border border-gray-200/10 shadow-lg bg-foreground overflow-hidden group"
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={ele.image}
              alt={ele.title}
              fill
              className="object-cover transition-all duration-300 group-hover:grayscale group-hover:scale-105"
            />
            <div className="absolute inset-0 z-30 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Link
                href={ele.previewUrl}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform"
              >
                <FaEye size={18} />
              </Link>

              <Link
                href={ele.gitUrl}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-transform"
              >
                <FaGithub size={18} />
              </Link>
            </div>
          </div>

          <CardHeader className="text-background">
            <CardTitle>{ele.title}</CardTitle>
            <CardDescription>{ele.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
      {sliced.length < projectsData.length && (
        <div className="col-span-full flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setOpen((prev) => prev + 3)}
            className="col-span-full  mx-auto rounded-full bg-purple-500 hover:bg-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
