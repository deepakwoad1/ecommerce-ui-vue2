import authApi from "@/apis/modules/auth.api";

export async function registerUser(payload) {
  if (!payload?.email || !payload?.password) {
    throw new Error("Email and password are required");
  }

  try {
    await authApi.register(payload);
  } catch (error) {
    if (error.response?.status === 409) {
      throw new Error("User already exists");
    }
    throw error;
  }
}
