"use client";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema, API_URL } from "@/lib";

export default function ContactForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm({
    defaultValues: { msg: "", name: "", email: "" },
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const { type, message } = await res.json();
      if (type === "success") {
        toast(message);
        reset();
      } else {
        // console.error(message);
        toast.error(message);
      }
    } catch (err: any) {
      console.table(data);
      // console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-12 gap-y-5 transition-all duration-300 sm:gap-6">
        <div className="col-span-12 transition-all duration-300 sm:col-span-6">
          <label htmlFor="name" className="mb-1 block text-gray-700">
            Your Full Name
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            placeholder="Your Full Name"
            className='
							text-primary mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2
							text-sm shadow-sm transition-all
							duration-300 hover:border-gray-400 focus:border-sky-600
							focus:outline-none aria-[invalid="true"]:border-red-700 sm:text-base
						'
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors?.name && (
            <small role="alert" className="italic text-red-700">
              {errors.name.message}
            </small>
          )}
        </div>
        <div className="col-span-12 transition-all duration-300 sm:col-span-6">
          <label htmlFor="email" className="mb-1 block text-gray-700">
            Your Email
          </label>
          <input
            {...register("email")}
            type="text"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Your Email"
            className='
							text-primary mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2
							text-sm shadow-sm transition-all duration-300 hover:border-gray-400 focus:border-sky-600
							focus:outline-none aria-[invalid="true"]:border-red-700 sm:text-base
						'
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors?.email && (
            <small role="alert" className="italic text-red-700">
              {errors.email.message}
            </small>
          )}
        </div>
        <div className="col-span-12">
          <label htmlFor="msg" className="mb-1 block text-gray-700">
            Your Message
          </label>
          <div className="mt-1">
            <textarea
              {...register("msg")}
              id="msg"
              name="msg"
              rows={5}
              placeholder="Your Message"
              className='
								text-primary mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2
								text-sm shadow-sm transition-all duration-300 hover:border-gray-400 focus:border-sky-600
								focus:outline-none aria-[invalid="true"]:border-red-700 sm:text-base
							'
              aria-invalid={errors.msg ? "true" : "false"}
            />
            {errors?.msg && (
              <small role="alert" className="italic text-red-700">
                {errors.msg.message}
              </small>
            )}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <button
            disabled={!isDirty || isSubmitting}
            type="submit"
            id="btnSubmitContact"
            title="Submit Contact"
            className="
							w-full rounded-md bg-section-head px-12 py-4 font-semibold text-white duration-300 hover:bg-main-blue sm:w-auto
						"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
}
