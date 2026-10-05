import type { Product } from "./types";
export type { Product } from "./types";
export const COUPON = "LOFT75";
export const COUPON_OFF = 75;
export const BRAND = "Loftline Realty";
export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}
export const products: Product[] = [
  {
    "id": "rl-1",
    "name": "Skyline Studio Tour",
    "price": 2499,
    "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    "tag": "Studio",
    "category": "Tours",
    "specs": [
      "45 min guided",
      "4K photo set",
      "Floor plate PDF"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Sunset slot",
        "priceDelta": 150
      },
      {
        "id": "v2",
        "label": "Architect on-call",
        "priceDelta": 400
      }
    ],
    "faq": [
      {
        "q": "Virtual or in-person?",
        "a": "Hybrid — drone exterior plus walk-through."
      }
    ],
    "rating": 4.9,
    "reviewCount": 128
  },
  {
    "id": "rl-2",
    "name": "Brick Loft Walkthrough",
    "price": 3200,
    "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
    "tag": "Loft",
    "category": "Tours",
    "specs": [
      "Exposed brick narrative",
      "Sound map",
      "Staging notes"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Evening lights",
        "priceDelta": 200
      }
    ],
    "faq": [
      {
        "q": "Includes furniture?",
        "a": "Digital staging overlays only."
      }
    ],
    "rating": 4.8,
    "reviewCount": 96
  },
  {
    "id": "rl-3",
    "name": "Penthouse Preview Pack",
    "price": 8900,
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    "tag": "Penthouse",
    "category": "Premium",
    "specs": [
      "Roof access",
      "Concierge intro",
      "Offer sheet"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Champagne welcome",
        "priceDelta": 350
      }
    ],
    "faq": [
      {
        "q": "NDA required?",
        "a": "Standard buyer NDA included."
      }
    ],
    "rating": 5,
    "reviewCount": 44
  },
  {
    "id": "rl-4",
    "name": "Industrial Floor Pass",
    "price": 1800,
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    "tag": "Floor",
    "category": "Access",
    "specs": [
      "Floor-wide sightlines",
      "Elevator audit"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "After-hours",
        "priceDelta": 120
      }
    ],
    "faq": [
      {
        "q": "Group size?",
        "a": "Up to 6 guests."
      }
    ],
    "rating": 4.7,
    "reviewCount": 210
  },
  {
    "id": "rl-5",
    "name": "Corner Unit Staging",
    "price": 4100,
    "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    "tag": "Staging",
    "category": "Services",
    "specs": [
      "48h install",
      "Neutral palette",
      "Photo day"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Art rental",
        "priceDelta": 600
      }
    ],
    "faq": [
      {
        "q": "Lease friendly?",
        "a": "All freestanding pieces."
      }
    ],
    "rating": 4.9,
    "reviewCount": 77
  },
  {
    "id": "rl-6",
    "name": "River View Listing Kit",
    "price": 2750,
    "image": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
    "tag": "Listing",
    "category": "Media",
    "specs": [
      "Twilight stills",
      "Copy deck",
      "Social crops"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Video add-on",
        "priceDelta": 900
      }
    ],
    "faq": [
      {
        "q": "MLS ready?",
        "a": "Delivered in MLS spec."
      }
    ],
    "rating": 4.8,
    "reviewCount": 153
  },
  {
    "id": "rl-7",
    "name": "Architect Consult Block",
    "price": 650,
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "tag": "Consult",
    "category": "Services",
    "specs": [
      "90 min session",
      "Redline PDF"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Site visit",
        "priceDelta": 250
      }
    ],
    "faq": [
      {
        "q": "Licensed architect?",
        "a": "RA-led studio partners."
      }
    ],
    "rating": 4.9,
    "reviewCount": 62
  },
  {
    "id": "rl-8",
    "name": "Photo River Bundle",
    "price": 990,
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    "tag": "Media",
    "category": "Media",
    "specs": [
      "Continuous scroll gallery",
      "Press kit"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Print folio",
        "priceDelta": 180
      }
    ],
    "faq": [
      {
        "q": "Usage rights?",
        "a": "12-month marketing license."
      }
    ],
    "rating": 4.6,
    "reviewCount": 89
  },
  {
    "id": "rl-9",
    "name": "Warehouse Conversion Audit",
    "price": 5200,
    "image": "https://images.unsplash.com/photo-1600047509807-ba8f99d2d462?w=800",
    "tag": "Audit",
    "category": "Premium",
    "specs": [
      "Structural skim",
      "Zoning memo"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Engineer call",
        "priceDelta": 800
      }
    ],
    "faq": [
      {
        "q": "Timeline?",
        "a": "Report in 10 business days."
      }
    ],
    "rating": 4.7,
    "reviewCount": 31
  },
  {
    "id": "rl-10",
    "name": "Gallery District Pass",
    "price": 2100,
    "image": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
    "tag": "District",
    "category": "Tours",
    "specs": [
      "3-building loop",
      "Art concierge"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Private car",
        "priceDelta": 400
      }
    ],
    "faq": [
      {
        "q": "Weekends?",
        "a": "Sat–Sun slots available."
      }
    ],
    "rating": 4.8,
    "reviewCount": 58
  }
];
export const categories = Array.from(new Set(products.map((p) => p.category)));
