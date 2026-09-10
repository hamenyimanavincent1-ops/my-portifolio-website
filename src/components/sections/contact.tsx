"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { portfolioService } from "@/services/api";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const { profile } = portfolio;
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDemo, setIsDemo] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const result = await portfolioService.sendContactMessage(form);
      if (result.success) {
        setStatus("success");
        if (result.demo) setIsDemo(true);
        setForm(initialForm);
        setTimeout(() => {
          setStatus("idle");
          setIsDemo(false);
        }, 8000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 8000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Contact Me"
          subtitle="Let me know how I can help you"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-4">
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Email</h3>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Phone</h3>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${profile.whatsapp.replace(/\s+/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {profile.whatsapp}
                    </a>
                  </div>
                </div>
              </Card>

              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <Card>
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.name ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? "border-red-500" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-primary"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.subject ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity"
                    className={`w-full resize-none rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.message ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <div
                    className="flex items-start gap-2 rounded-md bg-green-500/10 px-4 py-3 text-sm text-green-600"
                    role="status"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                      {isDemo
                        ? "Demo mode: the contact backend is not connected yet, so this message was not actually sent. For now, please email me directly at "
                        : "Your message has been sent. I will get back to you soon."}
                      {isDemo && (
                        <a
                          href={`mailto:${profile.email}`}
                          className="font-medium underline underline-offset-2 hover:text-green-700"
                        >
                          {profile.email}
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div
                    className="flex items-center gap-2 rounded-md bg-red-500/10 px-4 py-3 text-sm text-red-500"
                    role="alert"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    There was a problem sending your message. Please try again
                    later or email me directly.
                  </div>
                )}
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}