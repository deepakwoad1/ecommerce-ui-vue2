import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  setInteractionMode,
} from "vee-validate";

import {
  required,
  email,
  min,
  max,
  confirmed,
  numeric,
  alpha_spaces,
} from "vee-validate/dist/rules";

// --------------------------------------------------
// Register vee-validate components
// --------------------------------------------------
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

// --------------------------------------------------
// UX: show errors only after user interaction
// --------------------------------------------------
setInteractionMode("lazy");

// --------------------------------------------------
// Basic rules (override messages for clarity)
// --------------------------------------------------
extend("required", {
  ...required,
  message: "{_field_} is required",
});

extend("email", {
  ...email,
  message: "Please enter a valid email address",
});

extend("min", {
  ...min,
  message: "{_field_} must be at least {length} characters",
});

extend("max", {
  ...max,
  message: "{_field_} must not exceed {length} characters",
});

extend("confirmed", {
  ...confirmed,
  message: "Passwords do not match",
});

extend("numeric", {
  ...numeric,
  message: "{_field_} must contain only numbers",
});

extend("alpha_spaces", {
  ...alpha_spaces,
  message: "{_field_} may contain only letters and spaces",
});

// --------------------------------------------------
// Custom production rules
// --------------------------------------------------

// Username: alphanumeric + underscore, 4–20 chars
extend("username", {
  validate: (value) => /^(?!_)(?!.*_$)[a-zA-Z0-9_]{4,20}$/.test(value),
  message:
    "Username must be 4–20 characters and contain only letters, numbers, or _",
});

// Indian phone number
extend("phone", {
  validate: (value) => /^[6-9]\d{9}$/.test(value),
  message: "Please enter a valid 10-digit mobile number",
});

// Strong password
extend("strong_password", {
  validate: (value) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value),
  message:
    "Password must contain uppercase, lowercase, number, and special character",
});
