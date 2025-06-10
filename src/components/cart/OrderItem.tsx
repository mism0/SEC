import React from "react";
import { View, StyleSheet } from "react-native";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { commonStyles } from "../../styles/sharedStyles";
import { s } from "react-native-size-matters";
import { useTranslation } from "react-i18next";

interface OrderItemProps {
  date: string;
  style?: object;
  totalAmount: number;
  totalPrice: string;
}

const OrderItem: React.FC<OrderItemProps> = ({
  date,
  style,
  totalAmount,
  totalPrice,
}) => {
  const { t } = useTranslation();

  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.title}>{t("order_details_title")}</AppText>
      <View style={styles.divider} />
      <View style={styles.summaryContainer}>
        <View>
          <AppText>
            {t("order_total_price")} {totalPrice}
          </AppText>
          <AppText>
            {t("order_date")} {date}
          </AppText>
        </View>
        <View style={styles.amountContainer}>
          <AppText style={styles.totalAmount}>
            {Math.abs(totalAmount).toFixed(2)} {t("totals_currency")}
          </AppText>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.shadow,
    backgroundColor: AppColors.white,
    borderRadius: 10,
    padding: s(15),
  },
  title: {
    textTransform: "uppercase",
    fontSize: 17,
    marginBottom: 5,
    color: AppColors.primary,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: AppColors.primary,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  amountContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  totalAmount: {
    color: AppColors.secondaryColor,
  },
  date: {
    color: AppColors.secondaryColor,
  },
});
