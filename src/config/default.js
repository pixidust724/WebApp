import firebase from 'firebase/app';
import 'firebase/firestore';

const isProduction = () => {
  const location = window.location;
  console.log(location.hostname);
  return location.hostname === "ourland.hk";
};

let config = {
  fbApp: {
  	appId: '640276812834634',
    cookie: true,
    xfbml: true,
    version: 'v2.10'
  },
  userAction: 'userAction',

  fbGroupId: '244493866025075', // Production https://www.facebook.com/groups/OurLandHK/?fref=nf
  globalDB: 'ourlandDB', // for all globalDB setting
  messageDB: 'message', // Production
  userDB: 'userProfile', // Production
  focusMessageDB: 'focusMessage',
  photoDB: 'photo',
  MasterUID: 'mUQgwxkmPBfVA47d9lHzB482Nmp1',
  addressBook: "AddressBook",
  commentDB: "comment",
  bookDB: "Bookmark",
  TagStatisticKey: "TagStatistic",
  fcmDB: 'fcmDB', // for all fcmDB
  analyticsID: isProduction() ? "UA-124203709-1" : "UA-124203709-2",
};

let constant = {
  allButtonLabel: '所有',
  invalidLocation: new firebase.firestore.GeoPoint(90, 0),
  timeoutLocation: new firebase.firestore.GeoPoint(90, 180),
  closeWholeDay:"全日關門",
  addressNotSet: "尚未設定",
  currentLocation: "附近",
  addressBookLabel: "關注地點",
  addAddressLabel: "加關注地點",
  updateAddressLabel: "改關注地點",
  addBookmarkLabel: "加珍藏",
  bookmarkTitleLabel: "珍藏",
  hotItemLabel: "熱門珍藏",
  updateBookmarkLabel: "改珍藏",
  nearbyEventLabel: "我的市區",
  searchEventLabel: "搜尋市區",
  regionEventLabel: "我地市區",
  recentEventLabel: "最近睇過",
  leaderBoardLabel: "風雲榜",
  notificationLabel: "通知",
  noTagLabel: "所有",
  viewCountLabel: '觀看次數：',
  publicProfileLabel: "簡介",
  sortByLastUpdateLabel: "新舊排序",
  sortByDistanceLabel: "附近排序",
  defaultEventNumber: 100,
  concernLabel: "珍藏",
  myBookmarkLabel: "我的珍藏",
  publicBookmarkLabel: "我地.珍藏",
  recentMission: "最近任務",
  missionDone: "任務完成",
  secretMission: "秘密任務",
  mission: "任務",
  missionComplete: "任務完成",
  recentUpdate: "最近更新",
  homeLabel: "首頁",
  userLabel: "我的",
  timeOptions : ['活動時間', '設施開放時間'],
  commentOptions : ['留言', '要求更新地點', '要求更新現況', '要求更新外部連結', '要求更新分類'],
  commentWithUrgentEventOptions : ['確定為緊急事項', '確定為非緊急事項'],
  commentWithOwnerOptions: ['更新事項細圖'],
  statusOptions : ['開緊', '完結', '政府跟進中', '流料', '不恰當訊息'],
  statusOptionsLabel : ['開緊', '已完', '政府跟進中', '流料', '不恰當訊息'],
  approveOptions : ['接納', '駁回'],
  messageDialogLabel: '市區事項',
  messageListReadingLocation: '讀取所在位置中...',
  messageListLoadingStatus: '讀取市區事項中...',
  messageListNoMessage: '已選位置沒有任何市區事項，請選擇其他位置',
  messageListBlockLocation: '請允許Ourland.hk讀取所在位置，或選擇其他位置',
  messageListTimeOut: '未能讀取現在位置，請選擇其他位置或重試',
  rankingListLoadingStatus: '讀取風雲榜中...',
  rankingListNoMessage: '已選位置未有任何人報料，不如你做第一個',
  urgent: "緊急",
  reportedUrgent: "用戶報告為緊急事項",
  focusTitleLabel: '市正事項名稱',
  focusSummaryLabel: '市正事項簡介',
  radiusLabel: '半徑',
  descLabel: '詳請',
  postLabel: '報料',
  focusMessagesLabel: '市正事項',
  updateFocusMessagesLabel: '改市正事項',
  addFocusMessagesLabel: '加市正事項',
  searchLabel: '搜尋',
  tagLabel: '分類',
  tagPlaceholder: '加分類',
  interestedTagPlaceholder: '加喜愛分類',
  weekdayLabel : ['日', '一', '二', '三', '四', '五', '六'],
  openningOptions : ['每日', '自訂'],
  intervalOptions : ['不重複', '每星期', '每兩星期','每月'],
  durationOptions : ['0:30', '1:00', '1:30','2:00','3:00','4:00','6:00','8:00','10:00','12:00','18:00','一天','兩天','三天','四天','五天','六天','一週'],
  distance: 1,
  kilometre: '公里',
  nearby: "附近",
  emptyComment: '按+留言',
  interestedRadius: '有效半徑',
  updateThumbnailMessage: '用戶改市區事項細圖',
  pleaseInputLocation: '請輸入地點',
  pleaseInputSummary: '請輸入簡介',
  pleaseInputLink: '請輸入外部連結',
  pleaseInputRadius: '請輸入半徑',
  pleaseInputDesc: '請輸入詳請',
  pleaseInputTitle: '請輸入事項名稱',
  pleaseSelectImage: '請選擇細圖',
  createMessageSuccess: "加市區事項成功",
  createMessageFailure: "加市區事項失敗",
  EmailAddressWarning: "請輸入正確電郵地址",
  updateProfileSuccess: "改用戶簡介成功",
  updateProfileFailure: "改用戶簡介失敗",
  updateProfileAddressSuccess: "改關注地點成功",
  deleteProfileAddressSuccess: "刪除關注地點成功",
  addCommentSuccess: "留言成功",
  addCommentFailure: "留言失敗",
  addCompleteMessageSuccess: "加完結事項成功",
  addCompleteMessageFailure: "加完結事項失敗",
  addMessageGallerySuccess: "加圖成功",
  addMessageGalleryFailure: "加圖失敗",
  updateMessageThumbnailSuccess: "改用戶細圖成功",
  updateMessageThumbnailFailure: "改用戶細圖失敗",
  updateCommentApproveStatusSuccess: "駁回市區事項成功",
  updateCommentApproveStatusFailure: "駁回市區事項失敗",
  approveMessageSuccess: "接納市區事項成功",
  addFocusMessageSuccess: "加市正事項成功",
  addFocusMessageFailure: "加市正事項失敗",
  updateFocusMessageSuccess: "改市正事項成功",
  updateFocusMessageFailure: "改市正事項失敗",
  dropFocusMessageSuccess: "刪除市正事項成功",
  dropFocusMessageFailure: "刪除市正事項失敗",
  FocusViewTitleWarning: "",
  polling: "投票",
  addPollingLabel: "新增投票",
  addPollingOption: "新增投票選項",
  pollingOptionLabel: "投票選項",
  pollingTitleLabel: "投票標題",
  numOfMaxPollngLabel: "用戶最多可投票次數",
  excessNumOfPollingIndex: "已超過投票選項上限",
  pollingRangeLabel: "離住宅可投票範圍",
  pollingLabel: "參與投票",
  pollingResultLabel: "投票結果",
  isOutOfPollingRangeLabel: "閣下不符合投票條件，按此觀看投票結果",
  isAlreadyPolledLabel: "閣下已投票，按此觀看投票結果",
  submitPollingSuccessLabel: "投票成功",
  submitPollingFailureLabel: "投票失敗",
  numOfPollingLabel: "投票人數",
  isAlreadyEndedLabel: "投票己完結，按此觀看投票結果",
  parseDateMessage: "我地偵測活動開始日期已設為：",
  parseTimeMessage: "我地偵測活動開始時間已設為：",
  parseLocationMessage: "我地偵測活動地點已設為：",
  parseSuffixMessage: "，若正確請按此按鈕。",
  parseDateSuccessMessage: "活動開始日期已設為： ",
  parseTimeSuccessMessage: "活動開始時間已設為： ",
  parseLocationSuccessMessage: "活動地點已設為： ",
}

const happyAndSadEnum = {
  happy: 1,
  sad: -1,
  nothing: 0
}

const addressEnum = {
  home: "住宅",
  office: "辦工室",
  other: "其他"
}

const RoleEnum = {
  user: "用戶",
  betaUser: "測試用戶",
  advancedUser: "進階用戶",
  monitor: "監察員",
  admin: "我地管理員",
}


export  default config;
export {constant, addressEnum, happyAndSadEnum, RoleEnum};
