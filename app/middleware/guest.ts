import ROUTES from "~/constants/routes";

export default defineNuxtRouteMiddleware(() => {
  const userIsAuthenticated = true; // Replace with real auth check
  if (userIsAuthenticated) {
    return navigateTo(ROUTES.HOME);
  }
});
