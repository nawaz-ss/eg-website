import React from 'react'
import { IconButton as IconButtonCustom, Stack, useTheme } from 'native-base'
import AccountBoxFillIcon from 'remixicon-react/AccountBoxFillIcon'
import AccountCircleLineIcon from 'remixicon-react/AccountCircleLineIcon'
import AddBoxLineIcon from 'remixicon-react/AddBoxLineIcon'
import AddCircleFillIcon from 'remixicon-react/AddCircleFillIcon'
import AddCircleLineIcon from 'remixicon-react/AddCircleLineIcon'
import AddFillIcon from 'remixicon-react/AddFillIcon'
import AddLineIcon from 'remixicon-react/AddLineIcon'
import AndroidLineIcon from 'remixicon-react/AndroidLineIcon'
import AppleLineIcon from 'remixicon-react/AppleLineIcon'
import ArrowDownSFillIcon from 'remixicon-react/ArrowDownSFillIcon'
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon'
import ArrowLeftLineIcon from 'remixicon-react/ArrowLeftLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightDownLineIcon from 'remixicon-react/ArrowRightDownLineIcon'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import ArrowRightSFillIcon from 'remixicon-react/ArrowRightSFillIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import ArrowRightUpLineIcon from 'remixicon-react/ArrowRightUpLineIcon'
import ArrowUpSLineIcon from 'remixicon-react/ArrowUpSLineIcon'
import ArticleLineIcon from 'remixicon-react/ArticleLineIcon'
import AttachmentLineIcon from 'remixicon-react/AttachmentLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'
import AwardLineIcon from 'remixicon-react/AwardLineIcon'
import BarChart2LineIcon from 'remixicon-react/BarChart2LineIcon'
import BookOpenLineIcon from 'remixicon-react/BookOpenLineIcon'
import BookMarkLineIcon from 'remixicon-react/BookmarkLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import Cake2LineIcon from 'remixicon-react/Cake2LineIcon'
import CalendarCheckLineIcon from 'remixicon-react/CalendarCheckLineIcon'
import CalendarEventLineIcon from 'remixicon-react/CalendarEventLineIcon'
import CalendarLineIcon from 'remixicon-react/CalendarLineIcon'
import CameraLineIcon from 'remixicon-react/CameraLineIcon'
import CameraSwitchLineIcon from 'remixicon-react/CameraSwitchLineIcon'
import CellphoneLineIcon from 'remixicon-react/CellphoneLineIcon'
import Chat3LineIcon from 'remixicon-react/Chat3LineIcon'
import Chat4LineIcon from 'remixicon-react/Chat4LineIcon'
import CheckDoubleLineIcon from 'remixicon-react/CheckDoubleLineIcon'
import CheckLineIcon from 'remixicon-react/CheckLineIcon'
import CheckboxBlankCircleLineIcon from 'remixicon-react/CheckboxBlankCircleLineIcon'
import CheckboxBlankFillIcon from 'remixicon-react/CheckboxBlankFillIcon'
import CheckboxBlankLineIcon from 'remixicon-react/CheckboxBlankLineIcon'
import CheckboxCircleFillIcon from 'remixicon-react/CheckboxCircleFillIcon'
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon'
import CheckboxLineIcon from 'remixicon-react/CheckboxLineIcon'
import CloseCircleFillIcon from 'remixicon-react/CloseCircleFillIcon'
import CloseCircleLineIcon from 'remixicon-react/CloseCircleLineIcon'
import CommunityLineIcon from 'remixicon-react/CommunityLineIcon'
import CustomerService2LineIcon from 'remixicon-react/CustomerService2LineIcon'
import DashboardLineIcon from 'remixicon-react/DashboardLineIcon'
import DeleteBinLineIcon from 'remixicon-react/DeleteBinLineIcon'
import DonutChartLineIcon from 'remixicon-react/DonutChartLineIcon'
import Download2LineIcon from 'remixicon-react/Download2LineIcon'
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import EarthFillIcon from 'remixicon-react/EarthFillIcon'
import EditBoxLineIcon from 'remixicon-react/EditBoxLineIcon'
import EmotionHappyLineIcon from 'remixicon-react/EmotionHappyLineIcon'
import EmotionNormalLineIcon from 'remixicon-react/EmotionNormalLineIcon'
import EmotionSadLineIcon from 'remixicon-react/EmotionSadLineIcon'
import EmotionUnhappyLineIcon from 'remixicon-react/EmotionUnhappyLineIcon'
import ErrorWarningLineIcon from 'remixicon-react/ErrorWarningLineIcon'
import EyeLineIcon from 'remixicon-react/EyeLineIcon'
import EyeOffLineIcon from 'remixicon-react/EyeOffLineIcon'
import FileChartLineIcon from 'remixicon-react/FileChartLineIcon'
import FileCopyLineIcon from 'remixicon-react/FileCopyLineIcon'
import FileInfoLineIcon from 'remixicon-react/FileInfoLineIcon'
import FilePdfLineIcon from 'remixicon-react/FilePdfLineIcon'
import FileSearchLineIcon from 'remixicon-react/FileSearchLineIcon'
import FileTextLineIcon from 'remixicon-react/FileTextLineIcon'
import FileUploadFillIcon from 'remixicon-react/FileUploadFillIcon'
import FilterLineIcon from 'remixicon-react/FilterLineIcon'
import FlashlightFillIcon from 'remixicon-react/FlashlightFillIcon'
import FlashlightLineIcon from 'remixicon-react/FlashlightLineIcon'
import FootballLineIcon from 'remixicon-react/FootballLineIcon'
import Forbid2LineIcon from 'remixicon-react/Forbid2LineIcon'
import GitRepositoryLineIcon from 'remixicon-react/GitRepositoryLineIcon'
import GovernmentLineIcon from 'remixicon-react/GovernmentLineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import Heart3FillIcon from 'remixicon-react/Heart3FillIcon'
import Heart3LineIcon from 'remixicon-react/Heart3LineIcon'
import HeartLineIcon from 'remixicon-react/HeartLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import Home4LineIcon from 'remixicon-react/Home4LineIcon'
import IndeterminateCircleLineIcon from 'remixicon-react/IndeterminateCircleLineIcon'
import InformationFillIcon from 'remixicon-react/InformationFillIcon'
import InformationLineIcon from 'remixicon-react/InformationLineIcon'
import LightbulbFlashLineIcon from 'remixicon-react/LightbulbFlashLineIcon'
import ListUnorderedIcon from 'remixicon-react/ListUnorderedIcon'
import Loader4LineIcon from 'remixicon-react/Loader4LineIcon'
import LockUnlockLineIcon from 'remixicon-react/LockUnlockLineIcon'
import LoginCircleLineIcon from 'remixicon-react/LoginCircleLineIcon'
import MailFillIcon from 'remixicon-react/MailFillIcon'
import MailLineIcon from 'remixicon-react/MailLineIcon'
import MailLockLineIcon from 'remixicon-react/MailLockLineIcon'
import MailOpenLineIcon from 'remixicon-react/MailOpenLineIcon'
import MailSendLineIcon from 'remixicon-react/MailSendLineIcon'
import MapPinLineIcon from 'remixicon-react/MapPinLineIcon'
import Medal2LineIcon from 'remixicon-react/Medal2LineIcon'
import MenuLineIcon from 'remixicon-react/MenuLineIcon'
import MessageLineIcon from 'remixicon-react/MessageLineIcon'
import MicLineIcon from 'remixicon-react/MicLineIcon'
import More2LineIcon from 'remixicon-react/More2LineIcon'
import Notification2LineIcon from 'remixicon-react/Notification2LineIcon'
import ParentLineIcon from 'remixicon-react/ParentLineIcon'
import PencilFillIcon from 'remixicon-react/PencilFillIcon'
import PencilLineIcon from 'remixicon-react/PencilLineIcon'
import PencilRulerLineIcon from 'remixicon-react/PencilRulerLineIcon'
import PhoneLineIcon from 'remixicon-react/PhoneLineIcon'
import QuestionLineIcon from 'remixicon-react/QuestionLineIcon'
import RecordCircleFillIcon from 'remixicon-react/RecordCircleFillIcon'
import RefreshLineIcon from 'remixicon-react/RefreshLineIcon'
import SearchEyeLineIcon from 'remixicon-react/SearchEyeLineIcon'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import SendPlane2LineIcon from 'remixicon-react/SendPlane2LineIcon'
import SendPlaneFillIcon from 'remixicon-react/SendPlaneFillIcon'
import Settings4LineIcon from 'remixicon-react/Settings4LineIcon'
import ShareLineIcon from 'remixicon-react/ShareLineIcon'
import ShutDownLineIcon from 'remixicon-react/ShutDownLineIcon'
import SmartphoneLineIcon from 'remixicon-react/SmartphoneLineIcon'
import SortDescIcon from 'remixicon-react/SortDescIcon'
import SpamLineIcon from 'remixicon-react/SpamLineIcon'
import SpyLineIcon from 'remixicon-react/SpyLineIcon'
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfFillIcon from 'remixicon-react/StarHalfFillIcon'
import StarLineIcon from 'remixicon-react/StarLineIcon'
import StarSFillIcon from 'remixicon-react/StarSFillIcon'
import SuitcaseLineIcon from 'remixicon-react/SuitcaseLineIcon'
import SurveyLineIcon from 'remixicon-react/SurveyLineIcon'
import TeamLineIcon from 'remixicon-react/TeamLineIcon'
import TimeFillIcon from 'remixicon-react/TimeFillIcon'
import TimeLineIcon from 'remixicon-react/TimeLineIcon'
import Translate2Icon from 'remixicon-react/Translate2Icon'
import Upload2FillIcon from 'remixicon-react/Upload2FillIcon'
import UserAddLineIcon from 'remixicon-react/UserAddLineIcon'
import UserFollowLineIcon from 'remixicon-react/UserFollowLineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import UserSmileLineIcon from 'remixicon-react/UserSmileLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import UserUnfollowLineIcon from 'remixicon-react/UserUnfollowLineIcon'
import VidiconLineIcon from 'remixicon-react/VidiconLineIcon'
import Female from '../assets/icons/Female'
import GraduationCap from '../assets/icons/GraduationCap'
import Male from '../assets/icons/Male'
import Other from '../assets/icons/Other'
//import GraduationCapLineIcon from 'remixicon-react/GraduationCapLineIcon'
import BuildingFillIcon from 'remixicon-react/BuildingFillIcon'
import DraftLineIcon from 'remixicon-react/DraftLineIcon'
import EqualizerFillIcon from 'remixicon-react/EqualizerFillIcon'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon'
import MacLineIcon from 'remixicon-react/MacLineIcon'
import MapPin2FillIcon from 'remixicon-react/MapPin2FillIcon'
import RadioButtonFillIcon from 'remixicon-react/RadioButtonFillIcon'
import RadioButtonLineIcon from 'remixicon-react/RadioButtonLineIcon'
import SuitcaseFillIcon from 'remixicon-react/SuitcaseFillIcon'
import TeamFillIcon from 'remixicon-react/TeamFillIcon'
import { getDataObject } from './helper'

function IconButton({ icon, isDisabled, prefix, ...props }) {
  if (props?.onPress) {
    return <IconButtonCustom {...props} icon={icon} />
  } else {
    return <Stack {...props}>{icon}</Stack>
  }
}

function IconByName({ _icon, ...props }) {
  const { colors } = useTheme()
  let icon

  if (!_icon?.size) {
    _icon = { ..._icon, size: 24 }
  }
  if (props.color) {
    _icon.color = getDataObject(colors, props.color)
  }
  switch (props.name) {
    case 'TimeFillIcon':
      icon = (
        <IconButton {...props} icon={<TimeFillIcon {...(_icon || {})} />} />
      )
      break
    case 'GraduationCap':
      icon = (
        <IconButton icon={<GraduationCap {...props} {...(_icon || {})} />} />
      )
      break
    case 'Male':
      icon = <IconButton {...props} icon={<Male {...(_icon || {})} />} />
      break
    case 'Female':
      icon = <IconButton {...props} icon={<Female {...(_icon || {})} />} />
      break
    case 'Other':
      icon = <IconButton {...props} icon={<Other {...(_icon || {})} />} />
      break
    case 'Chat3LineIcon':
      icon = (
        <IconButton {...props} icon={<Chat3LineIcon {...(_icon || {})} />} />
      )
      break
    case 'Translate2Icon':
      icon = (
        <IconButton {...props} icon={<Translate2Icon {...(_icon || {})} />} />
      )
      break
    // case 'GraduationCapLineIcon':
    //   icon = (
    //     <IconButton
    //       {...props}
    //       icon={<GraduationCapLineIcon {...(_icon || {})} />}
    //     />
    //   )
    //   break
    case 'DeleteBinLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<DeleteBinLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'EarthFillIcon':
      icon = (
        <IconButton {...props} icon={<EarthFillIcon {...(_icon || {})} />} />
      )
      break
    case 'MenuLineIcon':
      icon = (
        <IconButton {...props} icon={<MenuLineIcon {...(_icon || {})} />} />
      )
      break
    case 'TeamFillIcon':
      icon = (
        <IconButton {...props} icon={<TeamFillIcon {...(_icon || {})} />} />
      )
      break
    case 'Chat4LineIcon':
      icon = (
        <IconButton {...props} icon={<Chat4LineIcon {...(_icon || {})} />} />
      )
      break
    case 'PhoneLineIcon':
      icon = (
        <IconButton {...props} icon={<PhoneLineIcon {...(_icon || {})} />} />
      )
      break
    case 'ExternalLinkFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ExternalLinkFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'SuitcaseLineIcon':
      icon = (
        <IconButton {...props} icon={<SuitcaseLineIcon {...(_icon || {})} />} />
      )
      break
    case 'UserUnfollowLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<UserUnfollowLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'MacLineIcon':
      icon = <IconButton {...props} icon={<MacLineIcon {...(_icon || {})} />} />
      break
    case 'DraftLineIcon':
      icon = (
        <IconButton {...props} icon={<DraftLineIcon {...(_icon || {})} />} />
      )
      break
    case 'RadioButtonFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<RadioButtonFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'RadioButtonLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<RadioButtonLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'EyeLineIcon':
      icon = <IconButton {...props} icon={<EyeLineIcon {...(_icon || {})} />} />
      break
    case 'EyeOffLineIcon':
      icon = (
        <IconButton {...props} icon={<EyeOffLineIcon {...(_icon || {})} />} />
      )
      break
    case 'AddLineIcon':
      icon = <IconButton {...props} icon={<AddLineIcon {...(_icon || {})} />} />
      break
    case 'AddBoxLineIcon':
      icon = (
        <IconButton {...props} icon={<AddBoxLineIcon {...(_icon || {})} />} />
      )
      break
    case 'AttachmentLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<AttachmentLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'AndroidLineIcon':
      icon = (
        <IconButton {...props} icon={<AndroidLineIcon {...(_icon || {})} />} />
      )
      break
    case 'AppleLineIcon':
      icon = (
        <IconButton {...props} icon={<AppleLineIcon {...(_icon || {})} />} />
      )
      break
    case 'FileUploadFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<FileUploadFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'Upload2FillIcon':
      icon = (
        <IconButton {...props} icon={<Upload2FillIcon {...(_icon || {})} />} />
      )
      break
    case 'FileTextLineIcon':
      icon = (
        <IconButton {...props} icon={<FileTextLineIcon {...(_icon || {})} />} />
      )
      break
    case 'FileCopyLineIcon':
      icon = (
        <IconButton {...props} icon={<FileCopyLineIcon {...(_icon || {})} />} />
      )
      break
    case 'MapPinLineIcon':
      icon = (
        <IconButton {...props} icon={<MapPinLineIcon {...(_icon || {})} />} />
      )
      break
    case 'ParentLineIcon':
      icon = (
        <IconButton {...props} icon={<ParentLineIcon {...(_icon || {})} />} />
      )
      break
    case 'LightbulbFlashLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<LightbulbFlashLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'FootballLineIcon':
      icon = (
        <IconButton {...props} icon={<FootballLineIcon {...(_icon || {})} />} />
      )
      break
    case 'UserFollowLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<UserFollowLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'Medal2LineIcon':
      icon = (
        <IconButton {...props} icon={<Medal2LineIcon {...(_icon || {})} />} />
      )
      break
    case 'ArrowLeftLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ArrowLeftLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'More2LineIcon':
      icon = (
        <IconButton {...props} icon={<More2LineIcon {...(_icon || {})} />} />
      )
      break
    case 'TeamLineIcon':
      icon = (
        <IconButton {...props} icon={<TeamLineIcon {...(_icon || {})} />} />
      )
      break
    case 'GovernmentLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<GovernmentLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'BookOpenLineIcon':
      icon = (
        <IconButton {...props} icon={<BookOpenLineIcon {...(_icon || {})} />} />
      )
      break
    case 'UserLineIcon':
      icon = (
        <IconButton {...props} icon={<UserLineIcon {...(_icon || {})} />} />
      )
      break
    case 'ArrowLeftSLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ArrowLeftSLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'ArrowRightSLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ArrowRightSLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'ArrowDownSLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ArrowDownSLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'ArrowDownSFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ArrowDownSFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'ArrowUpSLineIcon':
      icon = (
        <IconButton {...props} icon={<ArrowUpSLineIcon {...(_icon || {})} />} />
      )
      break
    case 'CalendarCheckLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CalendarCheckLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CalendarEventLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CalendarEventLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'PencilLineIcon':
      icon = (
        <IconButton {...props} icon={<PencilLineIcon {...(_icon || {})} />} />
      )
      break
    case 'PencilFillIcon':
      icon = (
        <IconButton {...props} icon={<PencilFillIcon {...(_icon || {})} />} />
      )
      break
    case 'CheckboxCircleLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CheckboxCircleLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CheckboxCircleFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CheckboxCircleFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CheckboxBlankCircleLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CheckboxBlankCircleLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CloseCircleLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CloseCircleLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CloseCircleFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CloseCircleFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CheckboxBlankFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CheckboxBlankFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CheckLineIcon':
      icon = (
        <IconButton {...props} icon={<CheckLineIcon {...(_icon || {})} />} />
      )
      break
    case 'Loader4LineIcon':
      icon = (
        <IconButton {...props} icon={<Loader4LineIcon {...(_icon || {})} />} />
      )
      break

    case 'UserSmileLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<UserSmileLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'ListUnorderedIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ListUnorderedIcon {...(_icon || {})} />}
        />
      )
      break
    case 'EmotionUnhappyLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<EmotionUnhappyLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'BriefcaseLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<BriefcaseLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'FlashlightLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<FlashlightLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'FlashlightFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<FlashlightFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'FilterLineIcon':
      icon = (
        <IconButton {...props} icon={<FilterLineIcon {...(_icon || {})} />} />
      )
      break
    case 'TimeLineIcon':
      icon = (
        <IconButton {...props} icon={<TimeLineIcon {...(_icon || {})} />} />
      )
      break
    case 'SurveyLineIcon':
      icon = (
        <IconButton {...props} icon={<SurveyLineIcon {...(_icon || {})} />} />
      )
      break
    case 'CheckDoubleLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CheckDoubleLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'MailOpenLineIcon':
      icon = (
        <IconButton {...props} icon={<MailOpenLineIcon {...(_icon || {})} />} />
      )
      break
    case 'MailLockLineIcon':
      icon = (
        <IconButton {...props} icon={<MailLockLineIcon {...(_icon || {})} />} />
      )
      break
    case 'MailSendLineIcon':
      icon = (
        <IconButton {...props} icon={<MailSendLineIcon {...(_icon || {})} />} />
      )
      break
    case 'Notification2LineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<Notification2LineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CameraLineIcon':
      icon = (
        <IconButton {...props} icon={<CameraLineIcon {...(_icon || {})} />} />
      )
      break
    case 'ShareLineIcon':
      icon = (
        <IconButton {...props} icon={<ShareLineIcon {...(_icon || {})} />} />
      )
      break
    case 'AwardLineIcon':
      icon = (
        <IconButton {...props} icon={<AwardLineIcon {...(_icon || {})} />} />
      )
      break
    case 'AwardFillIcon':
      icon = (
        <IconButton {...props} icon={<AwardFillIcon {...(_icon || {})} />} />
      )
      break
    case 'EmotionHappyLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<EmotionHappyLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'EmotionSadLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<EmotionSadLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'EmotionNormalLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<EmotionNormalLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'RefreshLineIcon':
      icon = (
        <IconButton {...props} icon={<RefreshLineIcon {...(_icon || {})} />} />
      )
      break
    case 'UserStarLineIcon':
      icon = (
        <IconButton {...props} icon={<UserStarLineIcon {...(_icon || {})} />} />
      )
      break
    case 'BookMarkLineIcon':
      icon = (
        <IconButton {...props} icon={<BookMarkLineIcon {...(_icon || {})} />} />
      )
      break
    case 'SearchEyeLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<SearchEyeLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'SearchLineIcon':
      icon = (
        <IconButton {...props} icon={<SearchLineIcon {...(_icon || {})} />} />
      )
      break
    case 'StarLineIcon':
      icon = (
        <IconButton {...props} icon={<StarLineIcon {...(_icon || {})} />} />
      )
      break
    case 'SpyLineIcon':
      icon = <IconButton {...props} icon={<SpyLineIcon {...(_icon || {})} />} />
      break
    case 'MailFillIcon':
      icon = (
        <IconButton {...props} icon={<MailFillIcon {...(_icon || {})} />} />
      )
      break
    case 'AddCircleFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<AddCircleFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'AddCircleLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<AddCircleLineIcon {...(_icon || {})} />}
        />
      )
      break

    case 'IndeterminateCircleLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<IndeterminateCircleLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'FilePdfLineIcon':
      icon = (
        <IconButton {...props} icon={<FilePdfLineIcon {...(_icon || {})} />} />
      )
      break
    case 'FileChartLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<FileChartLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'AddFillIcon':
      icon = <IconButton {...props} icon={<AddFillIcon {...(_icon || {})} />} />
      break
    case 'Heart3FillIcon':
      icon = (
        <IconButton {...props} icon={<Heart3FillIcon {...(_icon || {})} />} />
      )
      break
    case 'Heart3LineIcon':
      icon = (
        <IconButton {...props} icon={<Heart3LineIcon {...(_icon || {})} />} />
      )
      break
    case 'AccountBoxFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<AccountBoxFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'AccountCircleLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<AccountCircleLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'BarChart2LineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<BarChart2LineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'ArticleLineIcon':
      icon = (
        <IconButton {...props} icon={<ArticleLineIcon {...(_icon || {})} />} />
      )
      break
    case 'QuestionLineIcon':
      icon = (
        <IconButton {...props} icon={<QuestionLineIcon {...(_icon || {})} />} />
      )
      break
    case 'Download2LineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<Download2LineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'DownloadLineIcon':
      icon = (
        <IconButton {...props} icon={<DownloadLineIcon {...(_icon || {})} />} />
      )
      break
    case 'CheckboxLineIcon':
      icon = (
        <IconButton {...props} icon={<CheckboxLineIcon {...(_icon || {})} />} />
      )
      break
    case 'CheckboxBlankLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CheckboxBlankLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'InformationLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<InformationLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'InformationFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<InformationFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'FileInfoLineIcon':
      icon = (
        <IconButton {...props} icon={<FileInfoLineIcon {...(_icon || {})} />} />
      )
      break

    case 'SendPlane2LineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<SendPlane2LineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'StarSFillIcon':
      icon = (
        <IconButton {...props} icon={<StarSFillIcon {...(_icon || {})} />} />
      )
      break
    case 'StarFillIcon':
      icon = (
        <IconButton {...props} icon={<StarFillIcon {...(_icon || {})} />} />
      )
      break
    case 'StarHalfFillIcon':
      icon = (
        <IconButton {...props} icon={<StarHalfFillIcon {...(_icon || {})} />} />
      )
      break
    case 'SpamLineIcon':
      icon = (
        <IconButton {...props} icon={<SpamLineIcon {...(_icon || {})} />} />
      )
      break
    case 'GitRepositoryLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<GitRepositoryLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'RecordCircleFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<RecordCircleFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'ArrowRightUpLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ArrowRightUpLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'ArrowRightDownLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ArrowRightDownLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'EditBoxLineIcon':
      icon = (
        <IconButton {...props} icon={<EditBoxLineIcon {...(_icon || {})} />} />
      )
      break
    case 'ArrowRightSFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ArrowRightSFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'MicLineIcon':
      icon = <IconButton {...props} icon={<MicLineIcon {...(_icon || {})} />} />
      break
    case 'FileSearchLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<FileSearchLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'Settings4LineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<Settings4LineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CameraSwitchLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CameraSwitchLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CellphoneLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CellphoneLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CustomerService2LineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CustomerService2LineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'GroupLineIcon':
      icon = (
        <IconButton {...props} icon={<GroupLineIcon {...(_icon || {})} />} />
      )
      break
    case 'DashboardLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<DashboardLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'SortDescIcon':
      icon = (
        <IconButton {...props} icon={<SortDescIcon {...(_icon || {})} />} />
      )
      break
    case 'DonutChartLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<DonutChartLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'MessageLineIcon':
      icon = (
        <IconButton {...props} icon={<MessageLineIcon {...(_icon || {})} />} />
      )
      break
    case 'ShutDownLineIcon':
      icon = (
        <IconButton {...props} icon={<ShutDownLineIcon {...(_icon || {})} />} />
      )
      break
    case 'LoginCircleLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<LoginCircleLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'ArrowRightLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ArrowRightLineIcon {...(_icon || {})} />}
        />
      )
      break

    case 'PencilRulerLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<PencilRulerLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'CommunityLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<CommunityLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'VidiconLineIcon':
      icon = (
        <IconButton {...props} icon={<VidiconLineIcon {...(_icon || {})} />} />
      )
      break

    case 'UserAddLineIcon':
      icon = (
        <IconButton {...props} icon={<UserAddLineIcon {...(_icon || {})} />} />
      )
      break
    case 'CalendarLineIcon':
      icon = (
        <IconButton {...props} icon={<CalendarLineIcon {...(_icon || {})} />} />
      )
      break
    case 'ErrorWarningLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<ErrorWarningLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'SendPlaneFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<SendPlaneFillIcon {...(_icon || {})} />}
        />
      )
      break
    case 'Cake2LineIcon':
      icon = (
        <IconButton {...props} icon={<Cake2LineIcon {...(_icon || {})} />} />
      )
      break
    case 'SmartphoneLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<SmartphoneLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'MailLineIcon':
      icon = (
        <IconButton {...props} icon={<MailLineIcon {...(_icon || {})} />} />
      )
      break

    case 'HistoryLineIcon':
      icon = (
        <IconButton {...props} icon={<HistoryLineIcon {...(_icon || {})} />} />
      )
      break
    case 'Forbid2LineIcon':
      icon = (
        <IconButton {...props} icon={<Forbid2LineIcon {...(_icon || {})} />} />
      )
      break

    case 'LockUnlockLineIcon':
      icon = (
        <IconButton
          {...props}
          icon={<LockUnlockLineIcon {...(_icon || {})} />}
        />
      )
      break
    case 'HeartLineIcon':
      icon = (
        <IconButton {...props} icon={<HeartLineIcon {...(_icon || {})} />} />
      )
      break
    case 'MapPin2FillIcon':
      icon = (
        <IconButton {...props} icon={<MapPin2FillIcon {...(_icon || {})} />} />
      )
      break
    case 'BuildingFillIcon':
      icon = (
        <IconButton {...props} icon={<BuildingFillIcon {...(_icon || {})} />} />
      )
      break
    case 'SuitcaseFillIcon':
      icon = (
        <IconButton {...props} icon={<SuitcaseFillIcon {...(_icon || {})} />} />
      )
      break
    case 'EqualizerFillIcon':
      icon = (
        <IconButton
          {...props}
          icon={<EqualizerFillIcon {...(_icon || {})} />}
        />
      )
      break
    default:
      if (props.name !== 'Home4LineIcon') {
        console.warn(props.name)
      }
      icon = (
        <IconButton {...props} icon={<Home4LineIcon {...(_icon || {})} />} />
      )
      break
  }
  return icon
}

export default React.memo(IconByName)
