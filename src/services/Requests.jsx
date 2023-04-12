import { http } from "./Services";

export const getContacts = () => {
  return http.get("/contacts");
};
export const getOneContact = (id) => {
  return http.get(`/contacts/${id}`);
};
export const postContact = (data) => {
  return http.post("/contacts", data);
};
export const deleteContact = (id) => {
  return http.get(`/contacts/${id}`);
};
export const updateContact = (data , id) => {
  return http.put(`/contacts/${id}` , data);
};
