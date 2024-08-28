import { Skeleton } from "@/components/ui/skeleton";
import { FaCalendar, FaClock, FaUserCircle } from "react-icons/fa";

export const SkeletonPost = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 mx-5 lg:container">
      <Skeleton className="">
        <Skeleton className="object-cover aspect-video w-full" />
        <div className="p-4 space-y-3 relative">
          <div className="flex items-center">
            <Skeleton className="bg-slate-500 py-2 w-28 rounded-md px-2 text-sm font-bold absolute -translate-y-1/2 top-0 left-[50px]"></Skeleton>
          </div>
          <div className="">
            <Skeleton className="line-clamp-3 text-justify text-sm bg-slate-500 py-2 "></Skeleton>
          </div>
          <div className="flex justify-between gap-4 text-sm mb-2">
            <Skeleton className="flex items-center gap-1">
              <FaClock />
              <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>
            </Skeleton>
            <Skeleton className="flex items-center gap-1">
              <FaCalendar />
              <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>

            </Skeleton>
          </div>
          <Skeleton className="flex items-center gap-1.5 text-sm ">
            <FaUserCircle />
            <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>
          </Skeleton>
        </div>
      </Skeleton>
      <Skeleton className="">
        <Skeleton className="object-cover aspect-video w-full" />
        <div className="p-4 space-y-3 relative">
          <div className="flex items-center">
            <Skeleton className="bg-slate-500 py-2 w-28 rounded-md px-2 text-sm font-bold absolute -translate-y-1/2 top-0 left-[50px]"></Skeleton>
          </div>
          <div className="">
            <Skeleton className="line-clamp-3 text-justify text-sm bg-slate-500 py-2 "></Skeleton>
          </div>
          <div className="flex justify-between gap-4 text-sm mb-2">
            <Skeleton className="flex items-center gap-1">
              <FaClock />
              <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>
            </Skeleton>
            <Skeleton className="flex items-center gap-1">
              <FaCalendar />
              <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>

            </Skeleton>
          </div>
          <Skeleton className="flex items-center gap-1.5 text-sm ">
            <FaUserCircle />
            <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>
          </Skeleton>
        </div>
      </Skeleton>
      <Skeleton className="">
        <Skeleton className="object-cover aspect-video w-full" />
        <div className="p-4 space-y-3 relative">
          <div className="flex items-center">
            <Skeleton className="bg-slate-500 py-2 w-28 rounded-md px-2 text-sm font-bold absolute -translate-y-1/2 top-0 left-[50px]"></Skeleton>
          </div>
          <div className="">
            <Skeleton className="line-clamp-3 text-justify text-sm bg-slate-500 py-2 "></Skeleton>
          </div>
          <div className="flex justify-between gap-4 text-sm mb-2">
            <Skeleton className="flex items-center gap-1">
              <FaClock />
              <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>
            </Skeleton>
            <Skeleton className="flex items-center gap-1">
              <FaCalendar />
              <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>

            </Skeleton>
          </div>
          <Skeleton className="flex items-center gap-1.5 text-sm ">
            <FaUserCircle />
            <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>
          </Skeleton>
        </div>
      </Skeleton>
      <Skeleton className="">
        <Skeleton className="object-cover aspect-video w-full" />
        <div className="p-4 space-y-3 relative">
          <div className="flex items-center">
            <Skeleton className="bg-slate-500 py-2 w-28 rounded-md px-2 text-sm font-bold absolute -translate-y-1/2 top-0 left-[50px]"></Skeleton>
          </div>
          <div className="">
            <Skeleton className="line-clamp-3 text-justify text-sm bg-slate-500 py-2 "></Skeleton>
          </div>
          <div className="flex justify-between gap-4 text-sm mb-2">
            <Skeleton className="flex items-center gap-1">
              <FaClock />
              <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>
            </Skeleton>
            <Skeleton className="flex items-center gap-1">
              <FaCalendar />
              <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>

            </Skeleton>
          </div>
          <Skeleton className="flex items-center gap-1.5 text-sm ">
            <FaUserCircle />
            <Skeleton className='bg-slate-400 w-28 py-2'></Skeleton>
          </Skeleton>
        </div>
      </Skeleton>
    </div>
  );
};
