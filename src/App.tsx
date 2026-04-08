import landingLook from "./assets/landing-look.jpeg"
import arketLogo from "./assets/logo-arket.png"
import carharttLogo from "./assets/logo-carhartt.svg"
import cosLogo from "./assets/logo-cos.png"
import weekdayLogo from "./assets/logo-weekday.jpg"
import zalandoLogo from "./assets/logo-zalando.svg"

const brands = [
  {
    name: "Zalando",
    src: zalandoLogo,
    className: "h-3.5 translate-y-[-1px] sm:h-4",
  },
  {
    name: "COS",
    src: cosLogo,
    className: "h-5.5 translate-y-[-1px] sm:h-6",
  },
  {
    name: "Arket",
    src: arketLogo,
    className: "h-3.5 translate-y-[-1px] sm:h-4",
  },
  {
    name: "Weekday",
    src: weekdayLogo,
    className: "h-4.5 translate-y-[-1px] sm:h-5",
  },
  {
    name: "Carhartt",
    src: carharttLogo,
    className: "h-4 translate-y-[-4px] sm:h-4.5",
  },
] as const
const chromeWebStoreUrl =
  "https://chromewebstore.google.com/detail/outfit-check/jbmmpnjoahbnboljglngnejjjdfeolpm"
const shopHaulUrl = "https://www.shop-haul.com/"

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef5b8_0%,#f6f6f1_22%,#ece9df_100%)] px-4 py-4 text-[#20242c] sm:px-6 sm:py-6">
      <main className="mx-auto max-w-[1280px]">
        <section className="overflow-hidden rounded-[34px] border border-black/8 bg-[#f7f6f2] p-3 shadow-[0_34px_90px_rgba(0,0,0,0.14)] sm:p-4">
          <div className="grid overflow-hidden rounded-[28px] border border-black/8 bg-white lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-between px-5 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-10">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171717] text-[14px] font-semibold text-white">
                    OC
                  </div>
                  <div>
                    <p className="font-heading text-[20px] font-semibold tracking-[-0.06em] text-[#171717]">
                      Outfit Check
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#7a808a]">
                      Chrome Extension
                    </p>
                  </div>
                </div>

                <div className="mt-10 inline-flex items-center rounded-full border border-[#e2e4e8] bg-[#fafaf7] px-4 py-2 sm:mt-12 lg:mt-14">
                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#c5e815]" />
                  <span className="text-[13px] font-medium text-[#4b535f]">
                    Shop smarter, return less
                  </span>
                </div>

                <h1 className="mt-5 max-w-[12ch] font-heading text-[clamp(2.8rem,11vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.11em] text-[#171717] sm:max-w-[11ch]">
                  See the outfit on yourself first.
                </h1>

                <p className="mt-5 max-w-[31rem] text-[15px] leading-7 text-[#5a626d] sm:text-[17px]">
                  Try outfits on yourself before you buy and avoid unnecessary
                  returns.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={chromeWebStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#c5e815] px-6 py-3.5 text-center text-[14px] font-semibold text-black shadow-[0_12px_24px_rgba(197,232,21,0.24)] transition hover:translate-y-[-1px]"
                  >
                    Add to Chrome
                  </a>
                  <span
                    aria-disabled="true"
                    className="cursor-not-allowed rounded-full border border-[#e4e6ea] bg-[#f3f4ef] px-6 py-3.5 text-center text-[14px] font-semibold text-[#98a0ab]"
                  >
                    Watch demo (coming soon)
                  </span>
                </div>

                <p className="mt-5 text-[13px] leading-6 text-[#7a808a]">
                  Brought to you by{" "}
                  <a
                    href={shopHaulUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[#20242c] underline decoration-[#c5e815] decoration-2 underline-offset-3"
                  >
                    Shop Haul
                  </a>
                  .
                </p>
              </div>

              <div className="mt-10 sm:mt-12">
                <p className="text-[13px] text-[#9aa0aa]">Works while browsing</p>
                <div className="mt-4">
                  <div className="flex flex-nowrap items-center gap-3 sm:gap-5">
                  {brands.map((brand) => (
                    <div
                      key={brand.name}
                      className="flex h-8 items-center justify-center sm:h-10"
                    >
                      <img
                        src={brand.src}
                        alt={brand.name}
                        className={`${brand.className} min-w-0 shrink object-contain opacity-45 grayscale`}
                      />
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden border-t border-black/8 bg-[radial-gradient(circle_at_top,#eef5b8_0%,#f7f7f2_32%,#ebe8df_100%)] sm:min-h-[420px] lg:min-h-full lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_88%,rgba(0,0,0,0.26),rgba(255,255,255,0)_42%)]" />
              <div className="absolute inset-x-4 top-4 bottom-4 rounded-[24px] border border-white/55 bg-white/70 p-2.5 shadow-[0_26px_70px_rgba(0,0,0,0.16)] backdrop-blur-[3px] sm:inset-x-8 sm:top-8 sm:bottom-8 sm:rounded-[28px] sm:p-4">
                <div className="relative h-full overflow-hidden rounded-[24px] bg-[#f5f5f1]">
                  <img
                    src={landingLook}
                    alt="Editorial outfit preview"
                    className="h-full w-full object-cover object-center [object-position:center_top]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
