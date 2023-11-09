import { Contributor } from "./Contributor";

export class Task {
    id: number;
    title: string;
    description: string;
    assignee: Contributor;
}