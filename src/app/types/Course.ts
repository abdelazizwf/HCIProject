import { Professor } from './Professor';

export interface Course {
    id: number;
    courseID: string;
    name: string;
    professorID: number;
    creditHours: number;
    prerequisites?: number[];
}
