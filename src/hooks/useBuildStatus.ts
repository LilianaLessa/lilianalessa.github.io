// src/hooks/useBuildStatus.ts
import { useEffect, useState } from "react";

type BuildStatus = {
  status: "success" | "failure" | "in_progress" | "unknown",
  buildId?: string,
}

export function useBuildStatus(): BuildStatus {
  const [status, setStatus] = useState<BuildStatus>({status:"unknown"});

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/LilianaLessa/lilianalessa.github.io/actions/workflows/deploy.yml/runs?branch=master&per_page=1",
      { headers: { Accept: "application/vnd.github+json" } }
    )
      .then((r) => r.json())
      .then((data) => {
        const run = data.workflow_runs?.[0];
        if (!run) return;    
        
        const buildStatus: BuildStatus = {
            status : "unknown",
            buildId: run.id,
        }
        switch (run.conclusion) {
          case "success":
            buildStatus.status = "success";
            break;
          case "failure":
            buildStatus.status = "failure";
            break;
          case "in_progress":
            buildStatus.status = "in_progress";
            break;
          default:
            buildStatus.status = "unknown";
        }
        setStatus(buildStatus);
      })
      .catch(() => setStatus({status:"unknown"}));
  }, []);

  return status;
}
