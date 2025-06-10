import { StyleSheet, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import AppSaveView from "../../components/views/AppSaveView";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

// Form Controller Imports
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/userSlice";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

type FormData = yup.InferType<typeof schema>;

const SignUpScreen = () => {

  const schema = yup
    .object({
      userName: yup
        .string()
        .required(t("sign_up_username_required"))
        .min(5, t("sign_up_username_min_length")),
      email: yup
        .string()
        .email(t("sign_up_email_invalid"))
        .required(t("sign_up_email_required")),
      password: yup
        .string()
        .required(t("sign_up_password_required"))
        .min(6, t("sign_up_password_min_length")),
    })
    .required();
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSignUpPress = async (data: FormData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      Alert.alert(t("sign_up_success"));
      navigation.navigate("MainAppBottomTabs");

      const userDataObj = {
        uid: userCredential.user.uid,
      };

      dispatch(setUserData(userDataObj));
    } catch (error: any) {
      let errorMessage = "";

      if (error.code === "auth/email-already-in-use") {
        errorMessage = t("sign_up_error_email_in_use");
      } else if (error.code === "auth/invalid-email") {
        errorMessage = t("sign_up_error_invalid_email");
      } else if (error.code === "auth/weak-password") {
        errorMessage = t("sign_up_error_weak_password");
      } else {
        errorMessage = t("sign_up_error_default");
      }

      showMessage({
        type: "danger",
        message: errorMessage,
      });
    }
  };

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController<FormData>
        control={control}
        name="userName"
        placeholder={t("sign_up_username_placeholder")}
      />
      <AppTextInputController<FormData>
        control={control}
        name="email"
        placeholder={t("sign_up_email_placeholder")}
        keyboardType="email-address"
      />
      <AppTextInputController<FormData>
        control={control}
        name="password"
        placeholder={t("sign_up_password_placeholder")}
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title={t("sign_up_create_account_button")}
        onPress={handleSubmit(onSignUpPress)}
      />
      <AppButton
        title={t("sign_up_goto_signin_button")}
        style={styles.signInButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignInScreen")}
      />
    </AppSaveView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
