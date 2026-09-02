 "use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, GitFork, Github, Star } from "lucide-react";

type Repo = { name: string; description: string | null; language: string | null; stars: number; forks: number; updated: string; url: string };

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  useEffect(() => { fetch("/api/github").then((r) => r.json()).then(setRepos).catch(() => setRepos([])); }, []);

  if (!repos.length) return null;

  return (
    <div className="github-grid">
      {repos.map((repo) => (
        <a className="github-card" href={repo.url} target="_blank" key={repo.name}>
          <div className="github-card-top"><Github size={17} /><ArrowUpRight size={15} /></div>
          <h3>{repo.name}</h3>
          <p>{repo.description || "Public repository from Shikha Singh."}</p>
          <div className="repo-meta">
            {repo.language && <span><i />{repo.language}</span>}
            <span><Star size={13} /> {repo.stars}</span>
            <span><GitFork size={13} /> {repo.forks}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
