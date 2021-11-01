import * as yup from "yup";

export const schema = yup.object().shape({
  search: yup.string().required(),
});
