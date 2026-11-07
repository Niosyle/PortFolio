type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="mb-12 max-w-2xl">
    <span aria-hidden="true" className="block w-10 h-px bg-primary mb-6" />
    <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-foreground">{title}</h2>
    {subtitle && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeading;
