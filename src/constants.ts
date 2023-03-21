export type TFilter = 'ALL' | 'COMPLETED' | 'INCOMPLETE'
export const VISIBILITY_FILTERS: Record<TFilter, string> = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
  };
  