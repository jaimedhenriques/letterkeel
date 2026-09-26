import type { Email, PlanId } from "./types";

export const PLANS: { id: PlanId; name: string; price: string; seats: string; note: string }[] = [
  { id: "solo", name: "Solo", price: "$19", seats: "1 seat", note: "One voice, one desk." },
  { id: "studio", name: "Studio", price: "$39", seats: "1 voice", note: "Shared rules, still one person." },
  { id: "house", name: "House", price: "$79", seats: "5 seats", note: "Seats are copy until accounts exist." },
];

export function planById(id: PlanId) {
  return PLANS.find((plan) => plan.id === id) ?? PLANS[1];
}

export function isSnoozed(email: Email, now = Date.now()) {
  return Boolean(email.snoozedUntil && new Date(email.snoozedUntil).getTime() > now);
}

export function isNeedsYou(email: Email, now = Date.now()) {
  return email.folder === "inbox" && email.needsReply && !isSnoozed(email, now);
}

export function isNoise(email: Email) {
  return email.kind === "newsletter" || email.kind === "cold";
}

export function isWaitingOnThem(email: Email) {
  return email.waitingOnThem && email.folder === "sent";
}

export function isDueBack(email: Email, now = Date.now()) {
  if (!isWaitingOnThem(email)) return false;
  if (isSnoozed(email, now)) return false;
  if (!email.followUpOn) return false;
  return new Date(email.followUpOn).getTime() <= now;
}

export function dueBack(emails: Email[], now = Date.now()) {
  return emails
    .filter((email) => isDueBack(email, now))
    .sort((a, b) => new Date(a.followUpOn ?? 0).getTime() - new Date(b.followUpOn ?? 0).getTime());
}

export function waiting(emails: Email[], now = Date.now()) {
  return emails
    .filter((email) => isWaitingOnThem(email) && !isDueBack(email, now))
    .sort((a, b) => new Date(a.followUpOn ?? 0).getTime() - new Date(b.followUpOn ?? 0).getTime());
}
