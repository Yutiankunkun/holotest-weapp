import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import headerBg from "../../assets/headerbg.png"
import GlobalFooter from "../../components/GlobalFooter";
import './index.scss'

export default () => {
  return (
    <View className="indexPage">
      <View className="at-article__h1 title">
        Find Your Hololive Match
      </View>
      <View className="at-article__h3 subTitle">
        Step into the world of Hololive and find out which member reflects your true personality.
      </View>
      <AtButton
        type="primary"
        size="normal"
        className="enterBtn"
        circle
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/question/index",
          });
        }}
      >
        START!
      </AtButton>
      <Image src={headerBg} style={{ width: "100%", marginTop: "100px"}} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};

