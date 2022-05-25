import { Professor } from './Professor';

export interface Course {
    id: number;
    courseID: string;
    name: string;
    description: string;
    image?: string;
    professorID: number;
    creditHours: number;
    prerequisites?: number[];
}
