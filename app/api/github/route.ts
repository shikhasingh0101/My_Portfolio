import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://api.github.com/users/shikhasingh0101/repos?sort=updated&per_page=6", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("GitHub request failed");
    const repos = await response.json();
    return NextResponse.json(repos.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated: repo.updated_at,
      url: repo.html_url,
    })));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
