import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar/Navbar";
import PhotographyProject from "@/components/PhotographyProject/PhotographyProject";

import { photographyProjects } from "@/data/photography";

export default async function PhotographyProjectPage({ params }) {
  const { slug } = await params;

  const project = photographyProjects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        <PhotographyProject project={project} />
      </main>
    </>
  );
}