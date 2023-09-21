import { ClassDTO } from "./ClassDTO";

export interface CourseDTO {
    id: number;
    title: string;
    description: string;
    photo: string;
    teacher: string;
    duration: number;
    classes: ClassDTO[];
}