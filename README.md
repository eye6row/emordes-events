# EMORDES EVENTS

Static events + tickets site for Emordes Studio. Contact: jh@emordes.studio

## Pages
- `index.html` upcoming events
- `event.html?id=EVENT_ID` event detail, ticket tiers, Buy Tickets
- `tickets.html` My Tickets (saved on the guest's phone)
- `ticket.html?t=TICKET_ID` ticket with QR, Save image / Print
- `checkin.html` door scanner (camera + manual ID, VALID / ALREADY SCANNED)
- `live.html?id=EVENT_ID` event-day page: schedule, credits, menu, Wi-Fi, IG, tips
- `poster.html?id=EVENT_ID` printable venue QR poster linking to the live page

## What to fill in (all in `events.js`)
1. **Event details**: title, date (YYYY-MM-DD), time, venue, address, description, capacity, tiers. Set `placeholder: false` to remove the PLACEHOLDER tag.
2. **Stripe Payment Links**: in Stripe Dashboard > Payment Links > New, make one link per ticket tier (e.g. "Salu-Salo General $45", allow quantity). Paste it:
   ```js
   { name: "General", price: 45, stripePaymentLink: "https://buy.stripe.com/xxxx" }
   ```
   Empty `""` = demo checkout (name + email, generates a test ticket, no payment).
   Note: with a Stripe link, Stripe emails the receipt; QR tickets from Stripe sales need phase 2 (below) or a manual guest list.
3. **Tips**: `SITE.tips.venmo` (username, no @), `SITE.tips.cashapp` (cashtag, no $), `SITE.tips.stripeTipLink` (Payment Link with "customer chooses what to pay").
4. **Instagram**: `SITE.instagram`.
5. **Live page**: each event's `live` block (schedule, credits, menu, wifi).

## Photos
Drop JPGs in `images/`: `event-01.jpg` ... `event-06.jpg` (events use 01-03; 04-06 spare). 4:5 portrait works best. Missing images show a dark red gradient.

## Phase 2 (real fraud-proof tickets)
Check-in log + tickets live in each device's localStorage, so a copied QR could be reused at a second door phone. True validation needs a backend: Stripe Checkout + webhook > database of issued tickets > signed QR > scanner checks the server. Ask Kat when ready.

## Deploy
`vercel deploy --prod` (CLI, Hobby plan blocks non-owner git deploys).
