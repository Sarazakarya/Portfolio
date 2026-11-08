"use client";
import Link from "next/link";
import React from "react";
import { FaEye, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Form } from "./Form/Form";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(contactRef.current.children, {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);
  return (
    <section ref={contactRef} id="contact" className="my-12 md:my-12 py-24 gap-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Connect */}

        <div className="text-background flex flex-col gap-4 ">
          <h1 className="text-xl ">Let&apos;s Connect</h1>
          <p className="text-muted-foreground text-balance max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>

          <div className="flex gap-4  ">
            <Link href={"https://github.com/Sarazakarya"} target="_blank">
              <FaGithub size={40} />
            </Link>

            <Link
              href={"https://www.linkedin.com/in/sara-zakarya-7b1330232/"}
              target="_blank"
            >
              <FaLinkedinIn size={40} />
            </Link>
          </div>
        </div>

        {/* Form */}
        <Form />
      </div>
    </section>
  );
};

export default Contact;
