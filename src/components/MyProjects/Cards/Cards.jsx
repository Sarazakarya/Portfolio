import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsData } from "@/lib/Constant/projects";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";

export function CardImage() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
      {projectsData.map((ele) => {
        return (
          <Card
            className="relative mx-auto w-full max-w-sm pt-0 border border-gray-200/10 shadow-lg bg-foreground overflow-hidden group"
            key={ele.id}
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={ele.image}
                alt={ele.title}
                className="h-full w-full object-cover transition-all duration-300 group-hover:grayscale group-hover:scale-105"
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
        );
      })}
    </div>
  );
}
