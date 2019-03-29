/** 公共样式表 **/
import { Dimensions, Platform, DeviceInfo } from 'react-native'

const defaultWidth = 375; //设计图的宽度
const defaultHeight = 667; //设计图的高度
// iPhoneX 
const X_WIDTH = 375;
const X_HEIGHT = 812;
const fontScale = Platform.OS === 'ios' 
    ? (1.0/DeviceInfo.Dimensions.screen.fontScale) 
    : (1.0/DeviceInfo.Dimensions.screenPhysicalPixels.fontScale);
export const width = Dimensions.get('window').width;      //设备的宽度
export const height = Dimensions.get('window').height;    //设备的高度
// 判断是否为iPhone X
export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    ((width === X_WIDTH && height === X_HEIGHT) ||
    (width === X_HEIGHT && height === X_WIDTH))
  )
}
// 判断是否为iPhone
export function isAndroid() {
  return Platform.OS === 'android' 
}
//宽度适配 width, margin/paddingLeft, margin/paddingRight, margin/paddingHorizo​​ntal
export function w(w) {
  return w*width/defaultWidth;
}
//高度适配 height, margin/paddingTop, margin/paddingBottom, margin/paddingVertical
export function h(h) {
  return h*height/defaultHeight;
}
//字体适配
export function f(f) {
  return f*fontScale;
}
export default comSty = {
  // 宽度比例
  wScale: width/defaultWidth,
  // 高度比例
  hScale: height/defaultHeight,
  // 字体比例
  fontScale: fontScale,
  // 字体
  fontFamily: 'PingFang-SC-Regular',
  /** 颜色 **/
  // 主色 
  themeColor: '#00CA7A',
  // 可交互文字 
  interactiveColor: '#00B36B',
  // 非点击按钮文字
  unclickableColor: '#4DDBA2',
  // 特殊提示文字
  warningColor: '#FA5151',
  // 正文/大标
  mainColor: '#191919',
  // icon/有好货内容
  hgColor: '#333333',
  // 导航栏交互文字
  navColor: '#444444',
  // 辅助文字
  // 未输入状态文字
  // 非点击文字
  // 标签栏辅助线
  // 导航栏辅助线
  // 登陆/提示框
  // 常规辅助线
  /** 文字 **/
  // 登陆/账号选择标题/最大文字
  maxFs: 32,
  // 文章标题/用户昵称
  titleFs: 20,
  // 导航栏标题/按钮文字
  navFs: 17,
  // 正文/卡片标题
  mainFs: 16,
  // 小按钮文字
  minBtnFs: 14,
  // 辅助提示文字/不可点击文字
  assistFs: 13,
  /** 图片大小 **/
  imgWidth: 22,
  imgHeight: 22,
  /** 间距大小 **/
  // 行高
  line50: 50,
  line56: 56,
  line60: 60,
  line90: 90,
  line100: 100,
  line102: 102,
  lrSpace: 20,
  tbSpace: 10,
}