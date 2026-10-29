import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectDetailContent } from "@/components/project-detail-content";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const pageTitle = project.seoTitle || project.shortTitle || project.title;

  return {
    title: pageTitle,
    description: project.summary,
    openGraph: {
      title: `${pageTitle} | Christian Jude`,
      description: project.summary,
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | Christian Jude Eraldo`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8 py-4 sm:py-6 animate-fade-up">
      {/* Return Link to Home / Projects */}
      <div>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-(--ink-secondary) hover:text-(--ink) transition-colors px-3 py-1.5 rounded-full bg-black/4 dark:bg-white/6 border border-black/4 dark:border-white/8 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Back to Projects</span>
        </Link>
      </div>

      <ProjectDetailContent project={project} showBackLink />
    </article>
  );
}

