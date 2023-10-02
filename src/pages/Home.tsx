import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useUser } from "@/context/auth";
import { useNavigate } from "react-router-dom";

interface FormValues {
  name: string;
}
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
    },
  });

  //   this just a Demo way to interact with application
  const { setUser } = useUser();
  const navigate = useNavigate();
  const onSubmit = (data: FormValues) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser({ name: data.name });
    navigate("/dashboard");
  };
  return (
    <section className="w-full flex flex-col h-screen items-center justify-center  ">
      <div className="flex flex-col gap-4">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Welcome to Marvel Character Dashboard
          </h2>
          <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Get started with your journey by entering your name
          </p>
        </div>
        <div className="w-full space-y-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:flex flex-col w-full space-y-2  md:space-x-2"
          >
            <Input
              {...register("name", { required: true })}
              className="w-full"
              placeholder="Enter your cool name"
              type="text"
            />
            <span className="my-1 block  text-red-500">
              {errors?.name && "Please Enter your name"}
            </span>
            <Button className="w-full" type="submit">
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
