import { Workflow } from "./Shared";

export interface Tenant {
  id: string;
  active: boolean;
  confirmed: boolean;
  name: string;
  fullName: string;
  workflow: Workflow;
  domains: string[];
}
