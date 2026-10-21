export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  half?: boolean;
};

const contactFields: FieldDef[] = [
  { name: "name", label: "Name", required: true, half: true },
  { name: "phone", label: "Phone", type: "tel", half: true },
  { name: "email", label: "Email", type: "email", required: true },
];

export const forms = {
  quote: {
    subject: "New quote request",
    submitLabel: "Request a quote",
    fields: [
      ...contactFields,
      {
        name: "customerType",
        label: "I am a…",
        type: "select",
        required: true,
        options: [
          "Landlord",
          "Letting / management agent",
          "Serviced accommodation operator",
          "Developer",
          "Homeowner",
          "Other",
        ],
        half: true,
      },
      {
        name: "service",
        label: "Type of work",
        type: "select",
        required: true,
        options: [
          "Planned maintenance",
          "Reactive repair",
          "Plumbing",
          "Electrical",
          "Joinery",
          "Plastering",
          "Decorating",
          "Gardens",
          "Flooring",
          "Cleaning",
          "General maintenance",
          "Not sure / multiple trades",
        ],
        half: true,
      },
      { name: "postcode", label: "Property postcode", required: true, half: true },
      {
        name: "urgency",
        label: "How soon?",
        type: "select",
        options: ["Urgent", "Within 2 weeks", "Within a month", "Flexible"],
        half: true,
      },
      {
        name: "message",
        label: "Job details",
        type: "textarea",
        required: true,
        placeholder: "Describe the work needed, access arrangements, etc.",
      },
    ],
  },
  contact: {
    subject: "New website message",
    submitLabel: "Send message",
    fields: [
      ...contactFields,
      { name: "message", label: "Message", type: "textarea", required: true },
    ],
  },
  trade: {
    subject: "New trade application",
    submitLabel: "Submit application",
    fields: [
      ...contactFields,
      { name: "company", label: "Company name (if applicable)", half: true },
      {
        name: "trade",
        label: "Primary trade",
        type: "select",
        required: true,
        options: [
          "Plumbing",
          "Electrical",
          "Joinery",
          "Plastering",
          "Decorating",
          "Gardens",
          "Flooring",
          "Cleaning",
          "General maintenance",
          "Other",
        ],
        half: true,
      },
      { name: "area", label: "Areas you cover", required: true, half: true },
      {
        name: "experience",
        label: "Years of experience",
        type: "select",
        options: ["Under 2", "2–5", "5–10", "10+"],
        half: true,
      },
      {
        name: "message",
        label: "Tell us about yourself",
        type: "textarea",
        placeholder: "Qualifications, insurance, availability, the type of work you prefer…",
      },
    ],
  },
  referral: {
    subject: "New referral",
    submitLabel: "Send referral",
    fields: [
      { name: "name", label: "Your name", required: true, half: true },
      { name: "phone", label: "Your phone", type: "tel", half: true },
      { name: "email", label: "Your email", type: "email", required: true },
      { name: "referralName", label: "Their name", required: true, half: true },
      { name: "referralContact", label: "Their phone or email", required: true, half: true },
      {
        name: "message",
        label: "What do they need?",
        type: "textarea",
        placeholder: "A short note about the property or job.",
      },
    ],
  },
} satisfies Record<string, { subject: string; submitLabel: string; fields: FieldDef[] }>;

export type FormKind = keyof typeof forms;

export function isFormKind(value: unknown): value is FormKind {
  return typeof value === "string" && Object.hasOwn(forms, value);
}
