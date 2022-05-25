import { Course } from './Course';
import { Person } from './Person';

export interface Student extends Person {
    level: number;
    registeredCourses?: number[];
    completedCourses?: number[];
}
