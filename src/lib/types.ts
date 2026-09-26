export type MailKind = "person" | "newsletter" | "cold" | "receipt" | "internal";
export type Folder = "inbox" | "archived" | "sent";
export type PlanId = "solo" | "studio" | "house";

export type Email = {
  id: string;
  fromName: string;
  fromEmail: string;
  subject: string;
  body: string;
  receivedAt: string;
  folder: Folder;
  needsReply: boolean;
  waitingOnThem: boolean;
  snoozedUntil: string | null;
  followUpOn: string | null;
  draft?: string;
  labels: string[];
  kind: MailKind;
  threadId?: string;
  rfcMessageId?: string;
  urgency?: number | null;
};

export type Meeting = {
  id: string;
  title: string;
  when: string;
  withWhom: string;
  why: string;
  threadIds: string[];
  sentence: string;
};

export type Voice = {
  name: string;
  role: string;
  notes: string;
  signoff: string;
};

export type Rule = {
  id: string;
  name: string;
  match: string;
  action: "archive" | "label" | "block" | "draft";
  label: string;
};
