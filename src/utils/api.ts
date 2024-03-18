import User from "@/models/User";
import Job from "@models/Job";
import Provider from "@models/Provider";

const API_URL = "http://localhost:3000/";

export const getProviders = async () => {
  const response = await fetch(`${API_URL}providers`);
  const providers = await response.json();
  return providers as Provider[];
};

export const getJobs = async () => {
  const response = await fetch(`${API_URL}jobs`);
  const jobs = await response.json();
  return jobs as Job[];
};

export const login = async (email: string, password: string) => {
  // TODO UPDATE LOGIN WITH BACKEND
  console.log(email, password);
  return { message: "Login successfull ", token: "Token", response: true };
  // return { message: "Login failed", response: false, token: "" };
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}users`);
  const users = await response.json();
  return users as User[];
};

export const enableUser = async (id: string, isEnabled: boolean) => {
  const response = await fetch(`${API_URL}users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ enabled: isEnabled }),
  });
  return response;
};
