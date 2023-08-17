import {
  IconByName,
  benificiaryRegistoryService,
  ImageView,
  AdminTypo,
  enumRegistryService,
  tableCustomStyles,
  debounce,
} from "@shiksha/common-lib";
import { ChipStatus } from "component/BeneficiaryStatus";
import moment from "moment";
import {
  HStack,
  VStack,
  Image,
  Text,
  ScrollView,
  Input,
  Menu,
  Pressable,
} from "native-base";
import React from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const columns = (t) => [
  {
    name: t("LEARNERS_ID"),
    selector: (row) => row?.id,
  },
  {
    name: t("NAME"),
    selector: (row) => (
      <HStack alignItems={"center"} space="2">
        {row?.profile_photo_1?.name ? (
          <ImageView
            source={{
              uri: row?.profile_photo_1?.name,
            }}
            // alt="Alternate Text"
            width={"35px"}
            height={"35px"}
          />
        ) : (
          <IconByName
            isDisabled
            name="AccountCircleLineIcon"
            color="gray.300"
            _icon={{ size: "35" }}
          />
        )}
        <AdminTypo.H5 bold>
          {row?.first_name + " "} {row?.last_name ? row?.last_name : ""}
        </AdminTypo.H5>
      </HStack>
    ),

    attr: "name",
    wrap: true,
  },
  {
    name: t("PRERAK_ID"),
    selector: (row) => row?.program_beneficiaries?.id,
  },
  {
    name: t("PRERAK"),

    selector: (row) => {
      const {
        program_beneficiaries: {
          facilitator_user: { first_name, last_name },
        },
      } = row;
      return first_name || last_name ? `${first_name}${last_name || ""}` : "-";
    },
    wrap: true,
  },
  {
    name: t("AGE"),

    selector: (row) => (row?.dob ? moment().diff(row?.dob, "years") : "-"),
  },
  {
    name: t("STATUS"),
    selector: (row, index) => (
      <ChipStatus
        key={index}
        is_duplicate={row?.is_duplicate}
        is_deactivated={row?.is_deactivated}
        status={row?.program_beneficiaries?.status}
      />
    ),

    attr: "email",
    wrap: true,
  },
];

const dropDown = (triggerProps, t) => {
  return (
    <Pressable accessibilityLabel="More options menu" {...triggerProps}>
      <HStack space={4}>
        <AdminTypo.H5>{t("EXPORT")}</AdminTypo.H5>
        <IconByName pr="0" name="ArrowDownSLineIcon" isDisabled={true} />
      </HStack>
    </Pressable>
  );
};
// Table component
function Table({ filter, setFilter, paginationTotalRows, data, loading }) {
  const [beneficiaryStatus, setBeneficiaryStatus] = React.useState();
  const navigate = useNavigate();
  const { t } = useTranslation();

  React.useEffect(async () => {
    const result = await enumRegistryService.listOfEnum();
    setBeneficiaryStatus(result?.data?.BENEFICIARY_STATUS);
  }, []);

  const exportBeneficiaryCSV = async () => {
    await benificiaryRegistoryService.exportBeneficiariesCsv(filter);
  };

  const exportSubjectCSV = async () => {
    await benificiaryRegistoryService.exportBeneficiariesSubjectsCsv(filter);
  };

  const setMenu = (e) => {
    if (e === "export_subject") {
      exportSubjectCSV();
    } else {
      exportBeneficiaryCSV();
    }
  };

  return (
    <VStack>
      <HStack my="1" mb="3" justifyContent="space-between">
        <HStack justifyContent="space-between" alignItems="center">
          <IconByName name="GroupLineIcon" _icon={{ size: "30px" }} />
          <AdminTypo.H1 px="5">{t("All_AG_LEARNERS")}</AdminTypo.H1>
          <Image
            source={{
              uri: "/box.svg",
            }}
            alt=""
            size={"28px"}
            resizeMode="contain"
          />
        </HStack>
        <Input
          size={"xs"}
          minH="49px"
          maxH="49px"
          InputLeftElement={
            <IconByName
              color="coolGray.500"
              name="SearchLineIcon"
              isDisabled
              pl="2"
            />
          }
          placeholder={t("SEARCH_BY_LEARNER_NAME")}
          variant="outline"
          onChange={(e) => {
            debounce(
              setFilter({ ...filter, search: e.nativeEvent.text, page: 1 }),
              2000
            );
          }}
        />
        <HStack
          space={6}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Menu
            w="190"
            placement="bottom right"
            trigger={(triggerProps) => dropDown(triggerProps, t)}
          >
            <Menu.Item onPress={(item) => setMenu("export_learner")}>
              {t("LEARNERS_LIST")}
            </Menu.Item>
            <Menu.Item onPress={(item) => setMenu("export_subject")}>
              {t("LEARNERS_SUBJECT_CSV")}
            </Menu.Item>
          </Menu>
          <AdminTypo.Dangerbutton
            onPress={() => {
              navigate("/admin/learners/duplicates");
            }}
            rightIcon={
              <IconByName
                color="textGreyColor.100"
                size="15px"
                name="ShareLineIcon"
              />
            }
          >
            {t("RESOLVE_DUPLICATION")}
          </AdminTypo.Dangerbutton>
        </HStack>
      </HStack>
      <ScrollView horizontal={true} mb="2">
        <HStack pb="2">
          <Text
            color={!filter?.status ? "blueText.400" : ""}
            bold={!filter?.status}
            cursor={"pointer"}
            mx={3}
            onPress={() => {
              const { status, ...newFilter } = filter;
              setFilter(newFilter);
            }}
          >
            {t("BENEFICIARY_ALL")}
            {!filter?.status && `(${paginationTotalRows})`}
          </Text>
          {beneficiaryStatus?.map((item) => {
            return (
              <Text
                key={item}
                color={filter?.status == t(item?.value) ? "blueText.400" : ""}
                bold={filter?.status == t(item?.value)}
                cursor={"pointer"}
                mx={3}
                onPress={() => {
                  setFilter({ ...filter, status: item?.value, page: 1 });
                }}
              >
                {t(item?.title)}
                {filter?.status == t(item?.value) && `(${paginationTotalRows})`}
              </Text>
            );
          })}
        </HStack>
      </ScrollView>
      <DataTable
        customStyles={tableCustomStyles}
        columns={columns(t)}
        data={data}
        persistTableHead
        progressPending={loading}
        pagination
        paginationRowsPerPageOptions={[10, 15, 25, 50, 100]}
        paginationServer
        paginationTotalRows={paginationTotalRows}
        onChangeRowsPerPage={(e) => {
          setFilter({ ...filter, limit: e });
        }}
        onChangePage={(e) => {
          setFilter({ ...filter, page: e });
        }}
      />
    </VStack>
  );
}

export default Table;