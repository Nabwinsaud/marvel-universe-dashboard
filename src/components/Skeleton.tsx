import { Skeleton as SkeletonLoading } from "@/components/ui/skeleton";

export default function Skeleton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2 w-full">
        <SkeletonLoading className="h-4 w-[400px]" />
        <SkeletonLoading className="h-5 w-[600px]" />
        <SkeletonLoading className="h-6 w-[800px]" />
        <SkeletonLoading className="h-7 w-[900px]" />
      </div>
    </div>
  );
}
