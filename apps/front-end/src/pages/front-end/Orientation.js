import React from "react";
import {
  capture,
  IconByName,
  AdminLayout as Layout,
  ProgressBar,t
} from "@shiksha/common-lib";

// import { useTranslation } from "react-i18next";
import { Calendar as Cal } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Form from "@rjsf/core";
import orientationPopupSchema from "./orientationPopupSchema";
import validator from "@rjsf/validator-ajv8";
import {
  TitleFieldTemplate,
  DescriptionFieldTemplate,
  FieldTemplate,
  ObjectFieldTemplate,
  ArrayFieldTitleTemplate,
} from "../../component/BaseInput";
import {
  Button,
  HStack,
  Text,
  VStack,
  Box,
  Modal,
  Input,
  FormControl,
  Select,
  CheckIcon,
  CheckCircleIcon,
  TextArea,
  Image
} from "native-base";
import Chip from "component/Chip";
import moment from "moment";

export default function Orientation({ footerLinks }) {
  // const { t } = useTranslation();
  const [yearsRange, setYearsRange] = React.useState([1980, 2030]);
  const formRef = React.useRef();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const uiSchema = {
    date: {
      "ui:widget": "alt-date",
      "ui:options": {
        hideNowButton: true,
        hideClearButton: true,
      },
    },
  };
  const styles={
    blueOutlineBtnShadow: { style: { boxShadow: '2px 3px 0px #8B7171'} },
    blueFillBtnShadow: { style: { boxShadow: '1px 3px 0px #7BB0FF '} },
    blueShadowBox:{ style:{width:'279px',height:'169px',boxShadow:'2px 3px 0px #CAE9FF',border:'2px solid #084B82', borderRadius:'8px'}}
  }
  return (
    <Layout
      _appBar={{
        isShowNotificationButton: true,
      }}
      _subHeader={{
        bg: "white",
        pt: "30px",
        pb: "0px",
      }}
      _sidebar={footerLinks}
    >
      <VStack paddingLeft="5" paddingTop="5" space="xl">
        <Box display="flex" flexDirection="row" minWidth="2xl">
          <HStack alignItems="Center">
            <IconByName name="Home4LineIcon" />
            <Text
              fontSize="24px"
              fontWeight="600"
              color="#212121"
              fontFamily="Inter"
            >
              Home
            </Text>
          </HStack>
        </Box>
        <HStack display="flex" flexDirection="row" space="xl">
          <Box {...styles.blueShadowBox} justifyContent="center">
            <VStack  alignItems={"Center"}>
            <Image
              source={{
                uri: "/orientation.svg",
              }}
              alt="Alternate Text"
              size={"sm"}
            />
              <Text fontSize="sm" bold pt="4">Prerak Orientation</Text>
            </VStack>
          </Box>
          <Box {...styles.blueShadowBox} justifyContent="center">
            <VStack alignItems={"Center"}>
              <Image
                source={{
                  uri: "/training.svg",
                }}
                alt="Alternate Text"
                size={"sm"}
                resizeMode="contain"
              />
              <Text fontSize="sm" bold pt="4">Prerak Training</Text>
            </VStack>
          </Box>
          <Box {...styles.blueShadowBox} justifyContent="center">
            <VStack alignItems={"Center"}>
              <Image
                source={{
                  uri: "/masterTrainer.svg",
                }}
                alt="Alternate Text"
                size={"sm"}
                resizeMode="contain"
              />
              <Text fontSize="sm" bold pt="4">My MT</Text>
            </VStack>
          </Box>
          <Box {...styles.blueShadowBox} justifyContent="center">
            <VStack alignItems={"Center"}>
              <Image
                source={{
                  uri: "/addPrerak.svg",
                }}
                alt="Alternate Text"
                size={"sm"}
                resizeMode="contain"
              />
              <Text fontSize="sm" bold pt="4">Add a Prerak</Text>
            </VStack>
          </Box>
        </HStack>
        <Text fontSize="xl" bold py="3">
          Your Calender
        </Text>
      </VStack>

     
      <HStack space="2xl" justifyContent="space-between" px="3">
        <Box>
          <VStack space="xl">
            <Button
            variant={"blueOutlineBtn"}
            {...styles.blueOutlineBtnShadow}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text color="blueText.400" bold fontSize="lg">Schedule an event +</Text>
            </Button>

            <Cal />
            <VStack space="4">
              <HStack alignItems="Center" space="md">
                <CheckCircleIcon size="4" color="blue.500" />
                <Text fontSize="sm" bold>Interview</Text>
              </HStack>
              <HStack alignItems="Center" space="md">
                <CheckCircleIcon size="4" color="green.500" />
                <Text fontSize="sm" bold>Orientation Days</Text>
              </HStack>
              <HStack alignItems="Center" space="md">
                <CheckCircleIcon size="4" color="yellow.500" />
                <Text fontSize="sm" bold>Training Days</Text>
              </HStack>
              <HStack alignItems="Center" space="md">
                <CheckCircleIcon size="4" color="purple.500" />
                <Text fontSize="sm" bold>Camp visits</Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>
        <Box width="50%" justifyContent={"Center"} flex={"1"}>
          <Fullcalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"timeGridWeek"}
            events={[
              { title: 'event 1', date: moment().format("YYYY-MM-DD HH:mm:ss") },
              
            ]}
          
            headerToolbar={{
              start: "prev,thisweek,next",
              center: "timeGridWeek,dayGridMonth,dayGridYear",
              end: "today",
              height: "50hv",
            }}
          />
          
        </Box>
      </HStack>

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        size="xl"
      >
        <Modal.Content maxH="412">
          <Modal.CloseButton />
          {/* <Modal.Header textAlign={"Center"}>
            Schedule an Interview
          </Modal.Header>
          <Modal.Body p="5" pb="10" mx={5} overflowX="hidden">
            <FormControl>
              <VStack space="2xl">
                <HStack align-items="center" space="2xl">
                  <HStack flex="0.3" alignItems="Center">
                    <IconByName name="VidiconLineIcon" />
                    <FormControl.Label>Event Type</FormControl.Label>
                  </HStack>
                  <Box flex="0.7">
                    <FormControl maxW="300" isRequired isInvalid>
                      <Select
                        minWidth="200"
                        accessibilityLabel="Choose Event"
                        placeholder="Choose Event"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1"
                      >
                        <Select.Item label="Prerak Orientation" value="PO" />
                        <Select.Item label="Prerak Training" value="PT" />
                      </Select>
                    </FormControl>
                  </Box>
                </HStack>
                <VStack>
                  <HStack alignItems={"center"} space={"2xl"}>
                    <HStack flex="0.3" alignItems="Center">
                      <IconByName name="UserFollowLineIcon" />
                      <FormControl.Label>Master Trainer</FormControl.Label>
                    </HStack>
                    <Box flex="0.7">
                      <Chip textAlign="Center"> Prakash Wagh</Chip>
                    </Box>
                  </HStack>
                  <HStack alignItems={"center"} space={"2xl"}>
                    <HStack flex="0.3" alignItems="Center">
                      <IconByName name="UserAddLineIcon" />
                      <FormControl.Label>Candidates</FormControl.Label>
                    </HStack>
                    <Button bgColor="white" borderColor="black" flex="0.7">
                      <Text>Select Candidates</Text>
                    </Button>
                  </HStack>
                  <HStack alignItems={"center"} space={"2xl"}>
                    <HStack flex="0.3" alignItems="Center">
                      <IconByName name="CalendarLineIcon" />
                      <FormControl.Label>Date</FormControl.Label>
                    </HStack>
                    <Box flex="0.7">
                      <Input></Input>
                    </Box>
                  </HStack>
                  <HStack alignItems={"center"} space={"2xl"}>
                    <HStack flex="0.3" alignItems="Center">
                      <IconByName name="TimeLineIcon" />
                      <FormControl.Label>Time</FormControl.Label>
                    </HStack>
                    <Box flex="0.7">
                      <Input />
                    </Box>
                  </HStack>
                  <HStack alignItems={"center"} space={"2xl"}>
                    <HStack flex="0.3" alignItems="Center">
                      <IconByName name="Notification2LineIcon" />
                      <FormControl.Label>Reminder</FormControl.Label>
                    </HStack>
                    <Box flex="0.7">
                      <Input />
                    </Box>
                  </HStack>
                  <HStack alignItems={"center"} space={"2xl"} flex={"1"}>
                    <HStack flex="0.3" alignItems="Center">
                      <IconByName name="MapPinLineIcon" />
                      <FormControl.Label>Location</FormControl.Label>
                    </HStack>
                    <Box flex="0.7">
                      <Input />
                    </Box>
                  </HStack>
                </VStack>
              </VStack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Send Invites
              </Button>
            </Button.Group>
          </Modal.Footer> */}
        <Modal.Header textAlign="center" fontSize="xl" bold>{t("SCHEDULE_AN_INTERVIEW")}</Modal.Header>
          <Modal.Body width="100%">
          <Form
            ref={formRef}
            templates={{
              FieldTemplate,
              ObjectFieldTemplate,
              TitleFieldTemplate,
              DescriptionFieldTemplate,
            }}
            showErrorList={false}
            noHtml5Validate={true}
            {...{
              validator,
              schema: orientationPopupSchema,
              formData,
              uiSchema,
            }}
          >
          </Form>
          
          </Modal.Body>
          <Modal.Footer>
              <Button.Group space={2} justifyContent="space-between" alignContent="space-between" width="100%">
                <Button
                  variant="blueOutlineBtn"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                  {...styles.blueOutlineBtnShadow}
                >
                  <Text>Cancel</Text>
                </Button>
                <Button
                variant="blueFillButton"
                  onPress={() => {
                    setShowModal(false);
                  }}
                  {...styles.blueFillBtnShadow}
                >
                  Send Invites
                </Button>
              </Button.Group>
            </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Layout>
  );
}
