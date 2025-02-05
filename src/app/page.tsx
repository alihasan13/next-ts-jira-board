import {Button} from "@/components/ui/button"
import {TestComponent} from "@/features/test"
export default function Home() {
  return (
    <div>
      <Button variant="destructive" size="sm">Click me</Button>
      <p className = "text-red-500 font-semibold">Hasan</p>
      <TestComponent></TestComponent>
    </div>
  );
}
