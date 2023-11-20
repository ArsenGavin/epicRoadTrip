import React from "react";
import { Button } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BackButton() {
  const history = useHistory();
  const { t } = useTranslation();

  const back = () => {
    history.goBack();
  };

  return <Button startIcon={<ChevronLeftIcon />} onClick={back}>{t("Home.return")}</Button>;
}