import { react } from "./react";
import { node } from "./node";
import { mysql } from "./mysql";
import { css } from "./css";

export const technologies = [react, node, mysql, css];

export const techById = Object.fromEntries(technologies.map((t) => [t.id, t]));

