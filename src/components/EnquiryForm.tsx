"use client";

import { useState } from "react";
import { forms, type FieldDef, type FormKind } from "@/lib/forms";
import { site } from "@/lib/site";
import { Icon } from "./Icon";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

export function EnquiryForm({ kind }: { kind: FormKind }) {
  const config = forms[kind];
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...Object.fromEntries(new FormData(form)) }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="card flex flex-col items-start gap-4 p-8">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-ink">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h2 className="text-2xl font-semibold">Thanks — we’ve got it.</h2>
        <p className="text-muted">
          A member of the team will be in touch shortly. If it’s urgent, call us on{" "}
          <a href={site.phoneHref} className="font-semibold text-navy underline">
            {site.phone}
          </a>
          .
        </p>
        <button type="button" className="btn-outline" onClick={() => setStatus({ state: "idle" })}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
      {config.fields.map((field) => (
        <Field key={field.name} field={field} />
      ))}
      {/* Honeypot: hidden from people, often filled by bots. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Leave this empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2">
        <p className="text-xs text-muted">
          By submitting this form, you agree that your details may be shared with a member of our
          team to discuss your enquiry.
        </p>
        {status.state === "error" && (
          <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {status.message} You can also call us on {site.phone} or email {site.email}.
          </p>
        )}
        <button type="submit" className="btn-dark self-start" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending…" : config.submitLabel}
        </button>
      </div>
    </form>
  );
}

function Field({ field }: { field: FieldDef }) {
  const id = `f-${field.name}`;
  const common = {
    id,
    name: field.name,
    required: field.required,
    placeholder: field.placeholder,
    className: "field",
  };
  return (
    <div className={field.half ? "" : "sm:col-span-2"}>
      <label htmlFor={id} className="label">
        {field.label}
        {field.required && <span className="text-accent-600"> *</span>}
      </label>
      {field.type === "textarea" ? (
        <textarea {...common} rows={5} />
      ) : field.type === "select" ? (
        <select {...common} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {field.options?.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          {...common}
          type={field.type ?? "text"}
          autoComplete={
            field.name === "name" ? "name" : field.name === "email" ? "email" : field.name === "phone" ? "tel" : undefined
          }
        />
      )}
    </div>
  );
}
