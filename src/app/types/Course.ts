import { Professor } from './Professor';

export interface Course {
    _data_id: number;
    id: string;
    name: string;
    professor: Professor;
    creditHours: number;
}
