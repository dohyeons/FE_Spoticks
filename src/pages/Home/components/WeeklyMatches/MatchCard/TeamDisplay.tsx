import TeamLogo from "@/common/components/atoms/TeamLogo";

export default function TeamDisplay({ teamName }: { teamName: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <TeamLogo teamName={teamName} />
      <span className="w-16 text-center text-[16px] font-semibold">{teamName}</span>
    </div>
  );
}