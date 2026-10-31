import Navbar from "@/components/Navbar/Navbar";
import Photography from "@/components/Photography/Photography";

import { photographyProjects } from "@/data/photography";

export default function PhotographyPage() {
  return (
    <>
      <Navbar />

      <main>
        <Photography projects={photographyProjects} />
      </main>
    </>
  );
}