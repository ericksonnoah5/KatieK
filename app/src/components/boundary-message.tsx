import { Spinner } from "@/components/ui/spinner";

export function BoundaryMessage({
  title,
  showSpinner = false,
}: {
  title: string;
  showSpinner?: boolean;
}) {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex items-center gap-6">
        <h1 className="font-display text-2xl text-[#0f1f4d]">{title}</h1>
        {showSpinner && <Spinner className="size-14" />}
      </div>
    </div>
  );
}
