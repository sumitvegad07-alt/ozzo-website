/**
 * Content for the /salesman-location-tracking-software landing page.
 *
 * WHY THIS PAGE EXISTS: the 2026-10-25 audit found the phrase "salesman
 * location tracking" on 27 pages — every one of them an /industries/* page,
 * where it sits in a secondary SEO paragraph. The two product pages never use
 * the word "salesman" at all, and "route management" appeared on exactly one
 * page in the whole site. So the site held 27 weak fragments of its own primary
 * target term and no page that actually answers it.
 *
 * This is that page: the plain-language answer to "salesman location tracking
 * software in India". The 27 industry pages are its spokes — industry-page.tsx
 * auto-links the phrase here, so this page is the hub and they feed it.
 *
 * It must stay distinct from /products/sfa. That page sells the whole field
 * product (tracking + orders + collections + distribution). THIS page answers
 * the tracking question only, in the buyer's own words, and hands the ordering
 * side off to /products/sfa. If it drifts into "here is all of SFA" the two
 * compete and both lose.
 *
 * HONESTY BAR: every claim below is a shipped capability. `trackingLimits`
 * states plainly what OZZO does not do — people buying a tracking tool ask
 * these exact questions, and answering them straight is why the comparison
 * pages work.
 *
 * Geo-fenced punch in/out is claimed here on the founder's explicit call
 * (2026-10-25): it is live on web and ships in the mobile build.
 *
 * The field app runs on BOTH Android and iPhone — the iOS build went live on
 * the App Store on 2026-11-10. This page used to carry "Android today, iOS on
 * the way" as one of its four stated limits; platform is not a limit any more.
 */

export type TrackingCapability = {
  /** lucide icon name (rendered via <Icon/>). */
  icon: string;
  title: string;
  body: string;
  points: string[];
};

/** The four things a manager actually wants from a tracking tool. */
export const trackingCapabilities: TrackingCapability[] = [
  {
    icon: "Fingerprint",
    title: "Selfie + GPS attendance",
    body: "The rep punches in from the phone with a selfie and the location stamped on it — and the odometer reading too, if you require it. The day is on the clock and on record from the first minute, instead of a WhatsApp message that says “reached”.",
    points: [
      "Selfie taken at punch-in, stored against the day",
      "Punch-in and punch-out location recorded as coordinates",
      "Measured against the shift you configure, with a grace period",
      "Day, user and month views, plus leave and holiday on the same calendar",
    ],
  },
  {
    icon: "Navigation",
    title: "Live location through the day",
    body: "While a rep is punched in, location is recorded on an interval in the background. You get the day drawn as a route on a map — where they started, where they went, how long they stopped — not a single last-known dot.",
    points: [
      "Background GPS at a set interval while punched in",
      "Full day replayed on the map, with a location timeline",
      "Distance travelled per rep, per day",
      "Location history kept per rep and viewable any time",
    ],
  },
  {
    icon: "MapPin",
    title: "Geo-tagged customer visits",
    body: "A visit is checked in at the customer and stamped with the position it was made from, against that customer's own record. Coverage becomes something you can see rather than something you are told about after dark.",
    points: [
      "Check-in and check-out time, with duration",
      "Position recorded against the customer or lead",
      "Visit photo and feedback captured on the spot",
      "A productive visit is one that produced an order — measured, not assumed",
    ],
  },
  {
    icon: "Route",
    title: "Beat routes and territory",
    body: "Plan the beat, assign it, and the rep opens today's route in one tap and works down it outlet by outlet. The app knows which stops are covered and which are still to go, so route compliance is a number instead of an argument.",
    points: [
      "Routes planned on a calendar and assigned to a rep",
      "Today's stops in the app, in order, with resume if the day breaks",
      "Territory hierarchy so areas roll up to a manager",
      "Planned versus actually-covered, per day",
    ],
  },
];

/** What OZZO deliberately does not do. Buyers of tracking tools ask all four. */
export const trackingLimits: { title: string; body: string }[] = [
  {
    title: "It is a phone app, not a vehicle tracker",
    body: "Tracking runs on the rep's own phone — Android or iPhone, whichever they carry. There is no GPS hardware box, no SIM-based tracking and no vehicle telematics. If you need to track trucks rather than people, this is the wrong tool.",
  },
  {
    title: "It needs a reasonably current phone",
    body: "The field app is live on both Google Play and the Apple App Store, so Android and iPhone teams are both covered — but iPhones need iOS 16.4 or later, and a very old Android handset will struggle with GPS and camera capture. Managers use the web dashboard in any modern browser.",
  },
  {
    title: "It is not payroll software",
    body: "Attendance, leave and holidays are all here, and you can export them. Salary processing, payslips and statutory filing are not — OZZO feeds your payroll, it does not replace it.",
  },
  {
    title: "No AMC, warranty or service-ticket module",
    body: "After-sales work is handled as service visits and tasks tracked to closure. If you need contract management, warranty claims or a spare-parts inventory, OZZO is not that system.",
  },
];

export const trackingFaqs: { q: string; a: string }[] = [
  {
    q: "What is salesman location tracking software?",
    a: "It is software that records where your field salesmen are during the working day. A mobile app on the rep's own phone — Android or iPhone — handles attendance, captures their location through the day and stamps each customer visit with the place it happened. A web dashboard shows managers the result on a map.",
  },
  {
    q: "How does OZZO track a salesman's location?",
    a: "The rep punches in from the OZZO SALES app — on Android or iPhone — with a selfie and GPS. While they are punched in, the app records location on an interval in the background. You see the day as a route on the map, with each geo-tagged visit and the distance travelled.",
  },
  {
    q: "Is a salesman tracked outside working hours?",
    a: "No. Tracking follows the punch, not the clock. Location is recorded only while the rep is punched in, and it stops when they punch out. There is no tracking on a day off or after the day is closed.",
  },
  {
    q: "Can it stop a salesman marking a visit he did not make?",
    a: "Yes, with geo-fencing. Turn it on and a rep must be within a set radius of the customer's saved location to check in, or they are told they are not in range. You choose the radius, and whether it applies to check-in, check-out or both.",
  },
  {
    q: "Can I fix where my team is allowed to punch in from?",
    a: "Yes. Geo-fencing for attendance pins punch-in and punch-out to work locations you set, each location deciding whether it fences punch-in, punch-out or both. Anyone with no location assigned keeps punching from anywhere, so turning it on cannot lock your team out of its own attendance.",
  },
  {
    q: "Does it work without internet in the field?",
    a: "Yes. The app works offline. Reps punch in, record visits and capture orders in markets with no signal, and everything syncs by itself once the connection comes back. Nothing has to be written on paper and re-typed in the evening.",
  },
  {
    q: "How much does salesman location tracking cost?",
    a: "The WFA plan — attendance, live location, geo-tagged visits, beat routes, territory and expenses — is ₹150 per user per month on yearly billing, plus 18% GST. Every rate is published on the plans page; there is no “contact us for pricing”.",
  },
  {
    q: "Do I need the full sales system, or can I buy tracking only?",
    a: "Tracking only is fine. WFA is the tracking tier and stands on its own. If you later want the same reps to take orders, collect payments and run outstanding and stock, move up to SFA at ₹300 per user per month — the tracking comes with it.",
  },
];
