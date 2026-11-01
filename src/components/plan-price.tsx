import { PLAN_RATE, formatRate, type Currency, type PlanId } from "@/lib/plans";

const CURRENCIES: Currency[] = ["INR", "USD"];

/**
 * One plan's price, in each currency, rendered into the HTML at build time.
 * <PricingShell/> reveals the right one with CSS.
 *
 * A server component on purpose: the numbers must be in the markup a crawler
 * receives, not produced by JavaScript after load. It is the difference
 * between an AI answering "OZZO is ₹100 per user per month" and answering
 * "OZZO does not publish pricing".
 *
 * It used to render all three billing terms as well, which meant six prices
 * per plan sat in the HTML with only CSS hiding five of them. A crawler reads
 * the markup, not the CSS, so Perplexity saw thirty numbers across the page
 * and reported the pricing as "incomplete and inconsistent". One rate per
 * currency now, and the term is a conversation with sales.
 */
export function PlanPrice({ id }: { id: PlanId }) {
  return (
    <div className="mt-3 border-y border-border/70 py-3">
      {CURRENCIES.map((currency) => (
        <div key={currency} data-price data-c={currency}>
          <span className="text-2xl font-extrabold tracking-tight text-foreground">
            {formatRate(currency, PLAN_RATE[currency][id])}
          </span>
          <span className="ml-1 text-xs font-medium text-muted-foreground">
            / user / month
          </span>
        </div>
      ))}
    </div>
  );
}
