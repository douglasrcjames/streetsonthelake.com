import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email.")
      .required("Email is required.")      
      .max(150,"Email must be at most 150 characters long.")
      .min(2,"Email must be at least 2 characters long."),
    name: yup
      .string()
      .required("Your name is required.")
      .max(150,"Name must be at most 150 characters long.")
      .min(2,"Name must be at least 2 characters long."),
    message: yup
      .string()
      .required("A message is required.")
      .max(30000,"Message must be at most 30000 characters long.")
      .min(10,"Message must be at least 10 characters long."),
})

export const rsvpNameSchema = yup.object().shape({
    name: yup
      .string()
      .required("Your name is required.")
      .max(150,"Name must be at most 150 characters long.")
      .min(2,"Name must be at least 2 characters long."),
})

export const rsvpCheckInSchema = yup.object().shape({
    partySize: yup
      .number()
      .required("A party size is required."),
    message: yup
      .string()
      .max(30000,"Message must be at most 30000 characters long.")
      .min(2,"Message must be at least 2 characters long."),
})

export const devFormSchema = yup.object().shape({
    password: yup
      .string()
      .required("A password is required."),
})