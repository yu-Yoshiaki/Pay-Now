import { useState } from "react";
import { useForm } from "react-hook-form";

export const Comment = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  return (
    <div className="h-60 bg-gray-500">
      <form
        className="flex flex-col p-8 mx-auto w-1/2 bg-white"
        onSubmit={handleSubmit((data) => {
          return setResult(JSON.stringify(data));
        })}
      >
        <input {...register("Name")} placeholder="name " className="border" />
        <input {...register("Comment")} placeholder="comment" className="border" />
        <p>{result}</p>
        <input type="submit" className="p-10" />
      </form>
    </div>
  );
};
