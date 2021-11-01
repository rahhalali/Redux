import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAsync } from "../../redux/todoSlice";
import { getTodosAsync } from "../../redux/todoSlice";
import { Table, TH, TD, TR, Center, Span, Body } from "./style.js";

const Show = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handeldelete = (id) => {
    dispatch(deleteTodoAsync({ id: id }));
  };
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  return (
    <Table>
      <TR>
        <TH>FirstName</TH>
        <TH>Lastname</TH>
        <TH>Email</TH>
        <TH>Action</TH>
      </TR>
      <Body>
        {todos &&
          todos.map((item) => (
            <TR key={item._id}>
              <TD>{item.firstname}</TD>
              <TD>{item.lastname}</TD>
              <TD>{item.email}</TD>
              <Center>
                <Span onClick={() => handeldelete(item._id)}>Delete</Span>
              </Center>
            </TR>
          ))}
      </Body>
    </Table>
  );
};

export default Show;
