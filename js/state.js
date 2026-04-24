// js/state.js

// State
export const state = {
  currentPage: window.location.pathname,

  formData: {
    name: "",
    email: "",
    message: "",
  },

  reviews: [],
};

// Update state
export function setState(key, value) {
  state[key] = value;

  const event = new CustomEvent("stateChange", { detail: state });
  window.dispatchEvent(event);
}
