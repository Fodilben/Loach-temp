import { useState } from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FromCheck from "./FromCheck";

const Filters = () => {
  const { meta, params } = useLoaderData();

  const { search, company, category, order, price, shipping } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        list={meta.categories}
        name={"category"}
        label="select category"
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        list={meta.companies}
        name={"company"}
        label="select company"
        size="select-sm"
        defaultValue={company}
      />
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* range */}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      {/* checkbox */}
      <FromCheck
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
