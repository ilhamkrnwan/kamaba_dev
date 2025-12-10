export default defineNuxtRouteMiddleware((to) => {
  const userIsAuthenticated = false; // Replace with real auth check
  if (to.meta.auth && !userIsAuthenticated) {
    return navigateTo("/login");
  }
});
