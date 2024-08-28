import {
  FrontEndTypo,
  PCusers_layout as Layout,
  benificiaryRegistoryService,
  enumRegistryService,
} from "@shiksha/common-lib";
import React, { useState } from "react";
import { VStack, Select, CheckIcon, Box, ScrollView } from "native-base";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const isDisabledSelect = ({ pcrCreated, attr }) => {
  const data = pcrCreated;
  let result = false;
  switch (attr) {
    case "rapid_assessment_first_learning_level":
      if (
        data?.rapid_assessment_second_learning_level ||
        data?.endline_learning_level
      )
        result = true;
      break;
    case "rapid_assessment_second_learning_level":
      if (data?.endline_learning_level) result = true;
      break;
    case "endline_learning_level":
      break;
    default:
      if (
        data?.rapid_assessment_first_learning_level ||
        data?.rapid_assessment_second_learning_level ||
        data?.endline_learning_level
      )
        result = true;
      break;
  }
  return result;
};

const isHideSelect = ({ pcrCreated, attr }) => {
  const data = pcrCreated;
  let result = false;
  switch (attr) {
    case "rapid_assessment_first_learning_level":
      if (
        data?.baseline_learning_level ||
        data?.rapid_assessment_first_learning_level ||
        data?.rapid_assessment_second_learning_level ||
        data?.endline_learning_level
      )
        result = true;
      break;
    case "rapid_assessment_second_learning_level":
      if (
        data?.rapid_assessment_first_learning_level ||
        data?.rapid_assessment_second_learning_level ||
        data?.endline_learning_level
      )
        result = true;
      break;
    case "endline_learning_level":
      if (
        data?.rapid_assessment_second_learning_level ||
        data?.endline_learning_level
      )
        result = true;
      break;
    default:
      break;
  }
  return result;
};

const PcrDetails = ({ userTokenInfo }) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectBaselineData, setSelectBaselineData] = useState();
  const [selectRapidData, setSelectRapidData] = useState();
  const [pcrCreated, setPcrCreated] = useState();
  const [data, setData] = React.useState({});
  const [isDisable, setIsDisable] = React.useState(false);

  React.useEffect(async () => {
    const result = await enumRegistryService.listOfEnum();
    setSelectBaselineData(result?.data?.PCR_SCORES_BASELINE_AND_ENDLINE);
    setSelectRapidData(result?.data?.PCR_SCORES_RAPID_QUESTION);
  }, []);

  React.useEffect(async () => {
    const result = await benificiaryRegistoryService.getPCRScores({ id });
    const userData = Array.isArray(result?.data)
      ? result?.data.filter((item) => item?.user_id == id)
      : [];
    const {
      baseline_learning_level,
      rapid_assessment_first_learning_level,
      rapid_assessment_second_learning_level,
      endline_learning_level,
    } = userData[0] || {};
    const newData = {
      baseline_learning_level,
      rapid_assessment_first_learning_level,
      rapid_assessment_second_learning_level,
      endline_learning_level,
    };
    setData(newData);
    setPcrCreated(newData);
  }, []);

  const createPcr = async () => {
    setIsDisable(true);
    const result = await benificiaryRegistoryService.createPCRScores({
      ...data,
      user_id: id,
    });
    setPcrCreated(result?.pcr_scores);
    // navigate(`/beneficiary/${id}/pcrview`);
  };

  return (
    <Layout
      _appBar={{
        onlyIconsShow: ["backBtn", "loginBtn", "langBtn", "userInfo"],
        name: t("PCR_DETAILS"),
        onPressBackButton: (e) => {
          navigate(`/learners/list-view/${userId}`);
        },
      }}
      analyticsPageTitle={"BENEFICIARY_PCR_DETAILS"}
      pageTitle={t("BENEFICIARY")}
      stepTitle={t("PCR_DETAILS")}
      facilitator={userTokenInfo?.authUser || {}}
    >
      <ScrollView>
        <VStack p="4">
          <FrontEndTypo.H1>{t("PCR_EDUCATION_LEVEL")}</FrontEndTypo.H1>
          <VStack mt={8} space="2" alignItems={"center"}>
            <FrontEndTypo.H3 fontSize="sm" color="textMaroonColor.400">
              {t("PCR_INITIAL_LEVEL")}
            </FrontEndTypo.H3>
            <Select
              //isDisabled={isDisabledSelect({ pcrCreated })}
              selectedValue={data?.baseline_learning_level || "Select"}
              accessibilityLabel="SELECT"
              placeholder={
                data?.baseline_learning_level?.toUpperCase() || "Select"
              }
              mt={1}
              onValueChange={(itemValue) =>
                setData({ ...data, baseline_learning_level: itemValue })
              }
            >
              {selectBaselineData?.map((item, i) => {
                return (
                  <Select.Item
                    key={item?.title}
                    label={t(item?.title)}
                    value={item?.value}
                  />
                );
              })}
            </Select>
          </VStack>

          <Box pt="4">
            <FrontEndTypo.Primarybutton
              onPress={() => {
                createPcr();
              }}
              isDisabled={isDisable}
            >
              {t("SAVE")}
            </FrontEndTypo.Primarybutton>
          </Box>
        </VStack>
      </ScrollView>
    </Layout>
  );
};

export default PcrDetails;

PcrDetails.propTypes = {
  userTokenInfo: PropTypes.any,
};
