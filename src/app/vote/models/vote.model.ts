export enum ConfidenceLevel {
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2
}
export interface Vote {
    voteId: number;
    cardValue: number;
    voteTimestamp: string ;
    confidenceLevel: ConfidenceLevel;
}
  