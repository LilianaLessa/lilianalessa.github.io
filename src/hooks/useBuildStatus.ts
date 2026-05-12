// src/hooks/useBuildStatus.ts
import { useEffect, useState } from "react";

type BuildStatus = "success" | "failure" | "in_progress" | "unknown";

export function useBuildStatus(): BuildStatus {
  const [status, setStatus] = useState<BuildStatus>("unknown");

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/LilianaLessa/lilianalessa.github.io/actions/workflows/deploy.yml/runs?branch=master&per_page=1",
      { headers: { Accept: "application/vnd.github+json" } }
    )
      .then((r) => r.json())
      .then((data) => {
        const run = data.workflow_runs?.[0];
        if (!run) return;
        if (run.conclusion === "success") setStatus("success");
        else if (run.conclusion === "failure") setStatus("failure");
        else if (run.status === "in_progress") setStatus("in_progress");
        else setStatus("unknown");
      })
      .catch(() => setStatus("unknown"));
  }, []);

  return status;
}
