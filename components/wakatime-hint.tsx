"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CodeEditor } from "@/components/code-block";
import { CircleHelp } from "lucide-react";

export function WakatimeHint() {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        <button className="text-muted-foreground hover:text-foreground transition-colors leading-none">
          <CircleHelp size={24} />
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[560px] p-0 mt-2 border-none shadow-none" side="bottom" align="center">
        <CodeEditor
          value={`const response = await fetch(\n  "https://wakatime.com/api/v1/users/alixz/stats/last_30_days"\n);\nconst res = await response.json();\nconst data = res.data.languages.slice(0, 5);`}
          language="ts"
          readOnly
          padding={0}
        />
      </HoverCardContent>
    </HoverCard>
  )
}