import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SignInPage