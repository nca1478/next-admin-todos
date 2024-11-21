import { WidgetItem } from "@/components";

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title="Home">
        <div className="flex flex-col items-center">
          <span>Hola Mundo!!!</span>
        </div>
      </WidgetItem>
    </div>
  );
}
