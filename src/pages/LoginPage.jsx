import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../component";
import { toast } from "react-toastify";
import { CustomFetch } from "../utils";
import { LoginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const response = await CustomFetch.post("/auth/local", data);
      toast.success("logged successful");
      console.log(store);
      store.dispatch(LoginUser(response.data));
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
    return null;
  };

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsguest = async () => {
    const guss = {
      identifier: "test@test.com",
      password: "secret",
    };
    try {
      const response = await CustomFetch.post("/auth/local", guss);
      toast.success("welcom guess user");
      dispatch(LoginUser(response.data));
      return navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("you can'n login as a guess try later");
      return null;
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-block btn-secondary "
          onClick={loginAsguest}
        >
          guess
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default LoginPage;
