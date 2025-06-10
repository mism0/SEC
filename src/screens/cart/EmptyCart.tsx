import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import { AppFonts } from "../../styles/fonts";
import { AppColors } from "../../styles/colors";
import AppButton from "../../components/buttons/AppButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type EmptyCartNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const EmptyCart = () => {
  const navigation = useNavigation<EmptyCartNavigationProp>();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="shopping-outline"
        size={s(100)}
        color={AppColors.primary}
        style={styles.icon}
      />
      <AppText style={styles.title}>{t("empty_cart_title")}</AppText>
      <AppText style={styles.subtitle}>
        {t("empty_cart_subtitle")}
      </AppText>
      <AppButton
        title={t("start_shopping")}
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: s(20),
    fontFamily: AppFonts.Bold,
    color: AppColors.primary,
    marginBottom: vs(10),
  },
  subtitle: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: AppColors.medGray,
    textAlign: "center",
    marginBottom: vs(20),
  },
  button: {
    width: "80%",
  },
  icon: {
    marginBottom: vs(20),
    opacity: 0.9,
  },
});
