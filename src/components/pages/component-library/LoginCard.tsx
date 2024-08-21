import { Button } from "@/components/ui/button/Button";

const LoginCard = () => {
  return (
    <div className="col-span-1 flex flex-col justify-start gap-24 rounded-md border p-24">
      <div className="">
        <h3>Log in</h3>
        <p className="text-muted">
          Dont have and account?
          <span className="pl-8 underline">
            <a href="">Sign up</a>
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <p>Email</p>
            <div className="flex h-40 items-center justify-between rounded-sm border px-8 text-muted">
              user@mail.com
            </div>
          </div>
          <div>
            <p>Password</p>
            <div className="flex h-40 items-center justify-between rounded-sm border px-8 text-muted">
              <p>Enter password</p>
              <img src="/eye_open.svg" alt="" className="h-16 w-16" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <input type="checkbox" checked />
            <p>Remember me</p>
          </div>
          <p className="text-sm">Forgot Password?</p>
        </div>
        <Button variant="primary" className="w-full">
          Login
        </Button>
      </div>

      <div className="h-[1px] bg-neutral-30" />
      <div className="flex flex-col">
        <div className="flex h-full w-full flex-col justify-end gap-8">
          <Button variant="outline" className="flex w-full gap-8">
            <img src="/google.svg" className="h-20 w-20" alt="google-icon" />
            Google
          </Button>
          <Button variant="outline" className="flex w-full gap-8">
            <img src="/githubw.svg" className="h-20 w-20" alt="github-icon" />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
