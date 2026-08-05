interface LoaderProps {
  progress: number;
}

export default function Loader({ progress }: LoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#111111]">
      <div className="flex items-baseline gap-1 text-2xl font-bold tracking-tight">
        <span className="text-[#7B61FF]">Stephen</span>
        <span className="text-white">Olayiwola</span>
      </div>
      <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#6C63FF] transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs uppercase tracking-[3px] text-[#999999]">Loading {progress}%</p>
    </div>
  );
}
