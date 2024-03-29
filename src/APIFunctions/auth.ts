import { BE_ENDPOINT } from "./../../clientAPIs";
import {
  AuthorizationTypes,
  SignInUserTypes,
  SignUpUserTypes,
  UpdateUserTypes,
} from "./types/auth.types";

export const SignInUser = ({ email, password }: SignInUserTypes) =>
  BE_ENDPOINT.post("/users/login", { email: email, password: password }).then(
    (res) => res.data
  );

export const SignUpUser = ({ email, password, name, age }: SignUpUserTypes) =>
  BE_ENDPOINT.post("/users", { email, password, name, age }).then(
    (res) => res.data
  );

export const GetProfileUser = ({ AUTH_TOKEN }: AuthorizationTypes) =>
  BE_ENDPOINT.get("/users/me", {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  }).then((res) => res.data);

export const UpdateUser = ({ email, name, age, AUTH_TOKEN }: UpdateUserTypes) =>
  BE_ENDPOINT.patch(
    "/users/me",
    { email, name, age },
    {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    }
  ).then((res) => res.data);

export const LogOutUser = ({ AUTH_TOKEN }: AuthorizationTypes) =>
  BE_ENDPOINT.post(
    "/users/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    }
  ).then((res) => res.data);

export const DeleteUser = ({ AUTH_TOKEN }: AuthorizationTypes) =>
  BE_ENDPOINT.delete("/users/me", {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  }).then((res) => res.data);

export const LogOutUserFromAllSessions = ({ AUTH_TOKEN }: AuthorizationTypes) =>
  BE_ENDPOINT.post(
    "/users/logoutall",
    {},
    {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    }
  ).then((res) => res.data);
