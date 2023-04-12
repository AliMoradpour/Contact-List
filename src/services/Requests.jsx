import { http } from "./Services";

export const getContacts = () => {
  return http.get("/contacts");
};
export const postContact = (contact) => {
  return http.post("/contacts", contact);
};
export const deleteContact = (id) => {
  return http.get(`/contacts/${id}`);
};
// export const getContacts = () => {
//   return http.get("/contacts");
// };
