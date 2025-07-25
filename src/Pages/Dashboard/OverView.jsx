import AppointmentsList from "./AppointmentsList";
import StatsCard from "./StatsCard";

export default function Overview() {
  return (
    <>
      <h2 className="font-bold text-[40px] font-secondary">Overview</h2>
      <StatsCard />
      <AppointmentsList />
    </>
  );
}
