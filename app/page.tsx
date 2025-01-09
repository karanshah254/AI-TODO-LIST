"use client";

import { TasksList } from "@/components/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from '@copilotkit/react-core'
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <CopilotKit publicApiKey="<YOUR_PUBLIC_API_KEY>">
      <TasksProvider>
        <TasksList />
      </TasksProvider>
      <CopilotPopup />
    </CopilotKit>
  );
}
