export interface AuthFormType {
  userName: string;
  memberName: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
}

export type AccountDeletionFormType = Pick<AuthFormType, "password"> & { reason: string };
export type LoginFormType = Pick<AuthFormType, "userName" | "password">;

export type PasswordResettingType = Pick<AuthFormType, "password"> & {
  newPassword: string;
};
export type PasswordSettingFormType = PasswordResettingType & {
  newPasswordConfirmation: string;
};

export type InputType = "text" | "email" | "password" | "date" | "time";

export type BasicInformationType = Pick<AuthFormType, "phoneNumber">;
export type UserInformationType = BasicInformationType & { id: string; userName: string };
