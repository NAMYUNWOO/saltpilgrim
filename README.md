# saltpilgrim — links and landing pages

GitHub Pages site for the SALT PILGRIM Instagram bio link: https://namyunwoo.github.io/saltpilgrim/

- `/` — link tree
- `/salt-pilgrim/` — Salt Pilgrim (1-bit deckbuilding roguelike)
- `/water-returned/` — Salt Pilgrim: The Water Returned (1-bit text RPG)

Static HTML/CSS, no build step. Store buttons are "coming soon" placeholders until the store pages exist. The Water Returned is out on the App Store (https://apps.apple.com/app/id6819164973, released 2026-10-10), and so is Salt Pilgrim (https://apps.apple.com/app/id6819187251, released 2026-10-12).
Salt Pilgrim App Store buttons are App Store Connect campaign links (`pt=119141594`, `ct` = source_[ad]_[content]_page, e.g. `ig_bio_lt`, `direct_sp`). `campaign.js` builds `ct` from `utm_*` · referrer · `fbclid` and carries the source from the link tree to the game page. Counts: App Store Connect → Analytics → Acquisition → Campaigns. No cookies or third-party requests.
Page font: PxPlus IBM VGA 8x16 by VileR (int10h.org), CC BY-SA 4.0 (modified subset — see fonts/LICENSE.txt). Tiles: Urizen OneBit by vurmux, CC0.
