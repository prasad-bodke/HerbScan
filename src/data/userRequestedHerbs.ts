import { MedicinalPlant } from '../types';
import { USER_HERBS_PART1 } from './userHerbsPart1';
import { USER_HERBS_PART2 } from './userHerbsPart2';

export const USER_REQUESTED_HERBS: MedicinalPlant[] = [
  ...USER_HERBS_PART1,
  ...USER_HERBS_PART2
];
