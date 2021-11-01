import React from "react";
import Image from "../../images/logo.jpeg";
import {
  Header,
  Form,
  Button,
  Input,
  Img,
  Sub3,
  Sub1,
  P,
  Title,
} from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema/schema";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../../redux/todoSlice";

const Index = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    dispatch(addTodoAsync(data));
  };

  return (
    <Header>
      <Img src={Image} alt="image" />
      <Title>Employees Info</Title>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Sub3>
          <Input
            type="text"
            {...register("firstname")}
            placeholder="Enter FirstName..."
          />
          <Input
            type="text"
            {...register("lastname")}
            placeholder="Enter Lastname..."
          />
          <Input
            type="email"
            {...register("email")}
            placeholder="Enter Email..."
          />
        </Sub3>
        <Sub1>
          <P>{errors.firstname?.message}</P>
          <P>{errors.lastname?.message}</P>
          <P>{errors.email?.message}</P>
        </Sub1>
        <Button>Add Employee</Button>
      </Form>
    </Header>
  );
};

export default Index;
