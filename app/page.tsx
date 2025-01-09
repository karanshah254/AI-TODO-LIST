"use client";

import { TasksList } from "@/components/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from '@copilotkit/react-core'
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <CopilotKit publicApiKey="ck_pub_78b3a2e240f2fb368a9a6214e5c6b288">
      <TasksProvider>
        <TasksList />
      </TasksProvider>
      <CopilotPopup />
    </CopilotKit>
  );
}