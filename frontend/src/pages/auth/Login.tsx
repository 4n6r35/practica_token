import { useEffect, useState } from "react";
import { Button, TextInput } from "../../components";
import { loginApi } from "../../services";

export function LoginPage() {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  async function LoginClick(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const formData: any = {};
      const formElements = e.currentTarget.elements;

      for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i] as HTMLInputElement;
        if (element.id) {
          formData[element.id] = element.value;
        }
      }

      //TODO:
      const { successful, token }: any = await loginApi(formData);
      if (successful) {
        localStorage.setItem("token", token);
        window.location.href = "/";
      } else {
        throw Error;
      }
    } catch (e: any) {
      setMessage(e.response.data.message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <div className="px-8 py-6 mt-4 text-left bg-white  rounded-xl shadow-lg">
            <div className="flex flex-col items-center justify-center gap-2">
              <div
                className="w-16 bg-gradient-to-b from-transparent to-[#F8F8F888] border-1 border-custom-gray shadow-custom rounded-xl justify-center items-center flex"
                onClick={() => (window.location.href = "/")}
              ></div>
              <p className="m-0 text-[16px] font-semibold">
                Login to your Account
              </p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Get started with our app, just start section and enjoy
                experience.
              </span>
            </div>

            <form onSubmit={LoginClick} className="mt-8">
              <div className="my-3 grid grid-cols-1 items-end gap-x-4 gap-y-2">
                <TextInput
                  title="Email"
                  placeholder="example@example.com"
                  type="email"
                  id="email"
                />
                <TextInput
                  title="Password"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>

              <div className="my-4 text-xs text-red-500 font-semibold animate-bounce">
                {message}
              </div>
              <div className="mt-5">
                <Button text="Iniciar sección" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
