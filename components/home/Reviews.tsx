import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale, ReviewContent } from "@/lib/types";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Persianas+Bayres+Mutxamel+reviews";

function Stars({ count }: { count: number }) {
  return (
    <div aria-hidden="true" className="text-primary">
      {"★".repeat(count)}
      <span className="text-white/20">{"★".repeat(Math.max(0, 5 - count))}</span>
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

export default async function Reviews({ locale }: { locale: Locale }) {
  const [home, reviews] = await Promise.all([
    getContent<HomeContent>(locale, "home"),
    getContent<ReviewContent[]>(locale, "reviews"),
  ]);

  return (
    <section id="resenas" className="px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-primary-bright">
            {home.reviews.label}
          </span>
          <h2 className="mt-2 font-heading text-3xl text-white sm:text-4xl">
            {home.reviews.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            {home.reviews.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30"
            >
              <Stars count={review.stars} />
              <blockquote className="mt-3 text-[15px] text-white/70">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 text-sm text-white/50">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-soft to-bright text-xs font-medium text-white">
                  {getInitials(review.name)}
                </span>
                <span>
                  {review.flag} {review.name} · {review.source}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.02] hover:bg-white/10"
          >
            {home.reviews.ctaViewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
