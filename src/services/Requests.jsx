import { http } from "./Services";

export const getContacts = () => {
  return http.get("/contacts");
};
export const postContact = (data) => {
  return http.post("/contacts", data);
};
export const deleteContact = (id) => {
  return http.get(`/contacts/${id}`);
};
