import { createLazyFileRoute } from "@tanstack/react-router";
import PageContainerWrapper from "@/layouts/PageContainerWrapper";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import HeroSection from "@/components/pages/index/HeroSection";
import FeaturesSection from "@/components/pages/index/FeaturesSection";
import DesignSection from "@/components/pages/index/DesignSection";
import StorybookSection from "@/components/pages/index/StorybookSection";
import GoWebServer from "@/components/pages/index/GoWebServer";
import CryptoScrollerSkeleton from "@/components/crypto-infinite-scroll/CryptoScrollerSkeleton";
import CryptoScrollerError from "@/components/crypto-infinite-scroll/CryptoScrollerError";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const CryptoScroller = lazy(
  () => import("@/components/crypto-infinite-scroll/CryptoScroller"),
);

function Index() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div className="">
      <PageContainerWrapper>
        <HeroSection />
        <FeaturesSection />
        <DesignSection />
        <StorybookSection />
        <GoWebServer />
        {/* Crypto Cards Scroller */}
        <div className="py-100">
          <div className="flex flex-col gap-12 pb-40">
            <div className="flex gap-8">
              <img src="/vitest.svg" alt="" className="h-32 w-32" />
              <img src="/playwright.svg" alt="" className="h-32 w-32" />
              <img src="/react-testing.svg" alt="" className="h-32 w-32" />
            </div>
            <div className="flex items-center justify-start gap-8">
              <h3>Slider Component</h3>
            </div>
            <p>
              Unit and Integration testing using Vitest, React Testing Library
              and Playwright.
            </p>
          </div>
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <CryptoScrollerError resetErrorBoundary={resetErrorBoundary} />
            )}
          >
            <Suspense fallback={<CryptoScrollerSkeleton />}>
              <CryptoScroller />
            </Suspense>
          </ErrorBoundary>
        </div>
      </PageContainerWrapper>
    </div>
  );
}
