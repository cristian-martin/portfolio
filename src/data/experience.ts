export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  tags: string[];
};

export const EXPERIENCE: Job[] = [
  {
    role: "iOS / AR Developer Intern",
    company: "City of Coral Gables",
    location: "Coral Gables, FL · On-site",
    period: "Jul 2024 – Sep 2024",
    points: [
      "Built augmented-reality experiences for city use with ARKit and SwiftUI in Xcode.",
      "Implemented 3D object placement, rotation and anchoring for stable, realistic AR scenes.",
      "Designed the SwiftUI interaction layer for selecting and manipulating AR content.",
    ],
    tags: ["Swift", "ARKit", "SwiftUI", "Xcode"],
  },
  {
    role: "QA Automation Engineer",
    company: "Temperies Solution",
    location: "Miami, FL",
    period: "2021 – 2022",
    points: [
      "Built and maintained automated end-to-end test suites for multiple client applications with TestCafe.",
      "Covered REST APIs and front-ends with TestCafe and SoapUI; authored test cases from requirements.",
      "Ran manual and automated regression cycles and reported defects to developers.",
    ],
    tags: ["TestCafe", "SoapUI", "REST APIs", "Test Automation"],
  },
  {
    role: "Technical Support Specialist",
    company: "Kelly Services",
    location: "Miami, FL",
    period: "2020 – 2021",
    points: [
      "First-line support for proprietary software; diagnosed issues and escalated to the right tier.",
      "Resolved customer problems over the phone against response-time targets.",
    ],
    tags: ["Troubleshooting", "Customer Support", "CompTIA A+"],
  },
];
