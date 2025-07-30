import useSWR from "swr";
import { SubjectJSON } from "../domain/entities/Subject";
import { SubjectStatus } from "@prisma/client";

export const useSubjects = (
  defaultSubjects: SubjectJSON[] = [],
  options: {
    status?: SubjectStatus;
  } = {},
) => {
  if (!options.status) {
    options.status = "approved";
  }

  return useSWR(
    ["/api/subjects", options],
    async ([url, options]) => {
      const response = await fetch(url + "?" + new URLSearchParams(options));
      if (!response.ok) {
        throw new Error("Failed to fetch subjects");
      }
      const data = (await response.json()) as SubjectJSON[];
      return data;
    },
    {
      fallbackData: defaultSubjects,
    },
  );
};
