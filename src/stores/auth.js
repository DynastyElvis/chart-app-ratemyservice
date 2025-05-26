import { defineStore } from "pinia";
import { ref } from "vue";
import AuthService from "../services/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  const login = async (credentials) => {
    try {
      const response = await AuthService.login(credentials);
      user.value = response.user;
      isAuthenticated.value = true;
      localStorage.setItem("authToken", response.token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const register = async (userData) => {
    try {
      await AuthService.register(userData);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = () => {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem("authToken");
  };

  return { user, isAuthenticated, login, register, logout };
});
