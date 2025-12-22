export const SITE = {
  TITLE: "JeanCarlos",
  DESCRIPTION: "Personal website",
  AUTHOR: "Jean Carlos",
};

export interface Config {
  TIME_FORMAT: {
    LANG: "en-US" | "es-ES";
    MONTH: "short" | "long";
    DAY: "2-digit";
    YEAR: "numeric";
  };
}

export const CONFIG: Config = {
  TIME_FORMAT: {
    LANG: "en-US",
    MONTH: "short",
    DAY: "2-digit",
    YEAR: "numeric",
  },
};
