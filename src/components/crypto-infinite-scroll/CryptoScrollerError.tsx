import { Button } from "@/components/ui/button/Button";

type CryptoScrollerErrorProps = {
  resetErrorBoundary: () => void;
};

const CryptoScrollerError: React.FC<CryptoScrollerErrorProps> = ({
  resetErrorBoundary,
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      data-testid="error-state"
      className="flex h-[300px] w-full flex-col items-center justify-center gap-16"
    >
      <h4>Oops! Something went wrong</h4>
      <Button onClick={() => resetErrorBoundary()}>Try again!</Button>
    </div>
  );
};

export default CryptoScrollerError;
