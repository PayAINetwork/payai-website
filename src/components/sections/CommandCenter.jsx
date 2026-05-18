import { DashboardPanel } from "@/components/ui/DashboardPanel";

export function CommandCenter() {
  return (
    <section id="command-center" className="bg-white border-t border-[#E4E4E7]">
      <div className="container-payai py-14 lg:py-24">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-2xl lg:text-[40px] font-medium text-[#09090B] leading-tight tracking-[-0.01em]">
            Get Discovered by
            <br />
            200K+ Ready Buyers
          </h2>
          <p className="mt-4 text-sm lg:text-base text-[#71717A] max-w-[560px] mx-auto">
            List your service on 12+ active catalogs and reach thousands of
            buyers already looking to pay.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs lg:text-sm font-medium text-[#1D45D8]">
              Command Center
            </p>
            <h3 className="mt-3 text-xl lg:text-[28px] font-medium text-[#09090B] leading-tight">
              Your Distribution Control Center
            </h3>
            <p className="mt-4 text-sm lg:text-base text-[#71717A] leading-relaxed">
              One dashboard to control your distribution: see live revenue,
              toggle networks, manage pricing per network or product, and watch
              revenue per channel in real time.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Live earnings across every chain",
                "Toggle catalogs and listings in one click",
                "Per-network pricing and overrides",
                "Real-time analytics on every endpoint",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4D63F6]" />
                  <span className="text-sm text-[#09090B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <DashboardPanel footerLabel="Networks Active" footerValue="5 / 5" />
          </div>
        </div>
      </div>
    </section>
  );
}
