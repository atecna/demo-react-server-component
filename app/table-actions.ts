"use server"

import { SortDescriptor } from "react-aria-components";
import * as DB from "./db";

export async function saveUserSort(sort: SortDescriptor) {
  return DB.setSort(sort);
}