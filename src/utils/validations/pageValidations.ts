import { z } from "zod";
import { ICardRadio } from "../../types/appTypes";
import { pageTypeOptions } from "../pageUtils";

const pageTypeOptionsSchema = z.union(
  pageTypeOptions.map((option: ICardRadio) => z.literal(option.value)) as any
);

export const pageSchema = z.object({
  type: pageTypeOptionsSchema
});
