import { getContent } from "@/lib/i18n";
import type { HomeContent, Locale, ReviewContent } from "@/lib/types";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Persianas+Bayres+Mutxamel+reviews";

function Stars({ count }: { count: number }) {
  return (
    <div aria-hidden="true" className="text-primary-light">
      {"★".repeat(count)}
      <span className="text-white/20">{"★".repeat(Math.max(0, 5 - count))}</span>
    </div>
  );
}

export default async function Reviews({ locale }: { locale: Locale }) {
  const [home, reviews] = await Promise.all([
    getContent<HomeContent>(locale, "home"),
    getContent<ReviewContent[]>(locale, "reviews"),
  ]);

  return (
    <section id="resenas" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-primary-light">
            {home.reviews.label}
          </span>
          <h2 className="mt-2 font-heading text-3xl text-white sm:text-4xl">
            {home.reviews.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            {home.reviews.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <Stars count={review.stars} />
              <blockquote className="mt-3 text-sm text-white/80">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-white/50">
                {review.flag} {review.name} · {review.source}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            {home.reviews.ctaViewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
