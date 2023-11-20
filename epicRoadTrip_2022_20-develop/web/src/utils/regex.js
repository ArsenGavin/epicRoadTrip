import * as Yup from "yup";
import { forbiddenNames } from "./constants";

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("L'email doit être au format email@domaine.fr")
    .required("Champ obligatoire"),
  password: Yup.string()
    .min(
      5,
      ({ min }) => `Votre mot de passe doit contenir au moins ${min} caractères`
    )
    .required("Champ obligatoire"),
});

export const registrationValidation = Yup.object().shape({
  email: Yup.string()
    .email("L'email doit être au format email@domaine.fr")
    .required("Champ obligatoire"),
  password: Yup.string()
    .min(
      5,
      ({ min }) => `Votre mot de passe doit contenir au moins ${min} caractères`
    )
    .required("Champ obligatoire"),
  login: Yup.string()
    .min(
      3,
      ({ min }) =>
        `Votre nom d'utilisateur doit contenir au moins ${min} caractères`
    )
    .required("Champ obligatoire")
    .trim()
    .test(
      "Ce nom d'utilisateur est interdit",
      "Ce nom d'utilisateur est interdit",
      (item) =>
        item !== undefined && !forbiddenNames.includes(item.toLowerCase())
    ),
});
