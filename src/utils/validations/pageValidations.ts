import { z } from "zod";
import { createManyUnion } from "../../config/zod";
import { ICardRadio } from "../../types/appTypes";
import { pageTypeOptions } from "../pageUtils";

const pageTypes = pageTypeOptions.map((option: ICardRadio) => option.value);
const pageTypeOptionsSchema = createManyUnion(
  pageTypes as typeof pageTypes & [string, string, ...string[]]
);

export const pageSchema = z.object({
  type: pageTypeOptionsSchema
});
