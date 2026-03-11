import { quantitative } from "./quantitative";
import { logical } from "./logical";
import { verbal } from "./verbal";
import { puzzles } from "./puzzles";

export const aptitudeAreas = [quantitative, logical, verbal, puzzles];
export const aptitudeById = Object.fromEntries(aptitudeAreas.map((a) => [a.id, a]));

