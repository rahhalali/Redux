
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema/searchschema";
import { searchTodoAsync } from "../../redux/todoSlice";

import { useDispatch } from "react-redux";

import { Input, Button, Form, Inner, Container } from "./style.js";


 function Search() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    dispatch(searchTodoAsync(data));
  };
  const Reset = () => {
    window.location.reload(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Inner>
          <Input
            type="text"
            {...register("search")}
            placeholder="Search By Name..."
          />
          <Button> Search </Button>
          <Button onClick={() => Reset()}> Reset </Button>
        </Inner>
      </Form>
    </Container>
  );
}

export default Search;
