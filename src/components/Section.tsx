import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

const Section = ({ id, label, children }: SectionProps) => (
  <section id={id} className="page-section" aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>{label}</h2>
    <div className="min-w-0">{children}</div>
  </section>
);

export default Section;
