import { Skeleton } from "@/components/ui/skeleton"

export const SkeletonNavigation = () => {
  return (
    <div className="flex items-center gap-1 justify-center">
        <Skeleton className='w-8 h-8 rounded-full' />
        <Skeleton className='w-8 h-8 rounded-full'/>
        <Skeleton className='w-8 h-8 rounded-full'/>
        <Skeleton className='w-8 h-8 rounded-full'/>
    </div>
  )
}
