import { Text } from "@/components/ds";
import { Reveal } from "@/components/site/Reveal";
import { Scramble } from "@/components/site/Scramble";
import { Collapsible } from "@/components/site/Collapsible";

/*
 * CaseSection — the numbered, collapsible section shell every case-study
 * block shares (Context, Scope, Process, Design, Outcome). `id` becomes the
 * section's stable deep-link anchor (#context, #scope, ...) and feeds the
 * case-dock scroll nav via data-label; `number` is the scrambled eyebrow
 * ("01 — Context & problem").
 */
export function CaseSection({ id, number, heading, label, defaultOpen = false, children }) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} data-label={label} className="container section case-section" aria-labelledby={headingId}>
      <Collapsible
        defaultOpen={defaultOpen}
        header={
          <div className="case-section__head">
            <Scramble className="eyebrow eyebrow--accent" text={number} />
            <Reveal mask>
              <Text variant="h2" id={headingId}>{heading}</Text>
            </Reveal>
          </div>
        }
      >
        {children}
      </Collapsible>
    </section>
  );
}
