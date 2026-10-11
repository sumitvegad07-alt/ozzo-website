import {
  PLAN_RATE,
  TERM_MONTHS,
  billingTerms,
  formatRate,
  type Currency,
  type PlanId,
} from "@/lib/plans";

const CURRENCIES: Currency[] = ["INR", "USD"];

/**
 * Every price for one plan — both currencies, all three terms — rendered into
 * the HTML at build time. <PricingShell/> reveals one with CSS.
 *
 * This is a server component on purpose: the numbers must be in the markup that
 * crawlers receive, not produced by JavaScript after load. It is the difference
 * between an AI answering "OZZO starts at ₹100 per user per month" and
 * answering "OZZO does not publish pricing".
 */
export function PlanPrice({ id }: { id: PlanId }) {
  return (
    <div className="mt-3 border-y border-border/70 py-3">
      {CURRENCIES.map((currency) =>
        billingTerms.map((term) => {
          const rate = PLAN_RATE[currency][id][term];
          return (
            <div key={`${currency}-${term}`} data-price data-c={currency} data-t={term}>
              <span className="text-2xl font-extrabold tracking-tight text-foreground">
                {formatRate(currency, rate)}
              </span>
              <span className="ml-1 text-xs font-medium text-muted-foreground">
                / user / month
              </span>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                billed every {TERM_MONTHS[term]} months
              </p>
            </div>
          );
        }),
      )}
    </div>
  );
}
