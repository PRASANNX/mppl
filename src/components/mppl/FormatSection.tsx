'use client';

const steps = [
  {
    number: '01',
    title: 'Qualifying Rounds',
    description: '4 rounds held across 4 different cities in Madhya Pradesh',
  },
  {
    number: '02',
    title: 'Player Auctions',
    description: 'Top performers get drafted into franchise teams',
  },
  {
    number: '03',
    title: 'League Matches',
    description: '10 teams compete in a structured head-to-head format',
  },
  {
    number: '04',
    title: 'Grand Finals',
    description: 'One team. One crown. ₹18 Lac+ prize pool',
  },
];

export default function FormatSection() {
  return (
    <section className="section-neon-orange py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Label — black variant for orange background */}
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="block w-10 h-px bg-black/60" />
          <span className="font-dm-sans text-xs font-semibold tracking-[4px] uppercase text-league-black">
            How It Works
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-bebas text-league-black leading-none mb-16">
          The Road To
          <br />
          The Crown
        </h2>

        {/* ═══ DESKTOP TIMELINE (lg+) ═══ */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-stretch">
              {/* Step card */}
              <div className="relative flex-1 px-5">
                {/* Watermark number */}
                <span className="font-bebas text-[80px] leading-none text-black/10 select-none pointer-events-none">
                  {step.number}
                </span>

                {/* Title */}
                <h4 className="font-montserrat font-extrabold uppercase text-league-black text-sm tracking-wide mt-2 mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="font-dm-sans text-sm text-black/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting line between steps */}
              {i < steps.length - 1 && (
                <div className="flex items-center">
                  <div className="w-px h-16 bg-black/20 lg:w-12 lg:h-px" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ═══ MOBILE/TABLET TIMELINE (<lg) ═══ */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical connecting line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-black/20" />

          <div className="flex flex-col gap-12">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Dot on the vertical line */}
                <div className="absolute -left-[29px] top-4 w-2.5 h-2.5 rounded-full bg-league-black" />

                {/* Watermark number */}
                <span className="font-bebas text-[80px] leading-none text-black/10 select-none pointer-events-none block -mb-4">
                  {step.number}
                </span>

                {/* Title */}
                <h4 className="font-montserrat font-extrabold uppercase text-league-black text-sm tracking-wide mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="font-dm-sans text-sm text-black/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
