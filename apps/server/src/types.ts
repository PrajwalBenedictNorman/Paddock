export interface Issue {
  number: number;
  title: string;
  state: "open" | "closed";
}

export interface SandboxState {
  issues: Issue[];
  nextIssueNumber: number;
}

export interface Sandbox {
  id: string;
  state: SandboxState;
  seed: SandboxState;
}