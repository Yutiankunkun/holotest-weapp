import { View, Image } from '@tarojs/components'
import {AtButton} from 'taro-ui'
import Taro from '@tarojs/taro'
import GlobalFooter from "../../components/GlobalFooter";
import questionResults from "../../data/results.json";
import './index.scss'
import {getBestQuestionResult} from "../../utils/bizUtils";
import questions from "../../data/questions.json"

import iconTokino from "../../assets/icon_tokino.png";
import iconRoboco from "../../assets/icon_roboco.png";
import iconAki from "../../assets/icon_aki.png";
import iconAkai from "../../assets/icon_akai.png";
import iconShirakami from "../../assets/icon_shirakami.png";
import iconNatsuiro from "../../assets/icon_natsuiro.png";
import iconNakiri from "../../assets/icon_nakiri.png";
import iconYuzuki from "../../assets/icon_yuzuki.png";
import iconOozora from "../../assets/icon_oozora.png";
import iconAzki from "../../assets/icon_azki.png";
import iconOokami from "../../assets/icon_ookami.png";
import iconSakura from "../../assets/icon_sakura.png";
import iconNekomata from "../../assets/icon_nekomata.png";
import iconInugami from "../../assets/icon_inugami.png";
import iconHoshimachi from "../../assets/icon_hoshimachi.png";
import iconUsada from "../../assets/icon_usada.png";

const resultPictureMap = {
  icon_tokino: iconTokino,
  icon_roboco: iconRoboco,
  icon_aki: iconAki,
  icon_akai: iconAkai,
  icon_shirakami: iconShirakami,
  icon_natsuiro: iconNatsuiro,
  icon_nakiri: iconNakiri,
  icon_yuzuki: iconYuzuki,
  icon_oozora: iconOozora,
  icon_azki: iconAzki,
  icon_ookami: iconOokami,
  icon_sakura: iconSakura,
  icon_nekomata: iconNekomata,
  icon_inugami: iconInugami,
  icon_hoshimachi: iconHoshimachi,
  icon_usada: iconUsada,
};

export default () => {
  // get answer
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "Null Answer",
      icon: "error",
      duration: 3000,
    });
  }

  // get test answer
  const result = getBestQuestionResult(answerList, questions, questionResults);
  const resultImg = resultPictureMap[result.resultPicture];

  return (
    <View className="resultPage">
      <View className="content">
        {resultImg && (
          <Image className="resultImg" src={resultImg} />
        )}

        <View className="title">{result.resultName}</View>
        <View className="subTitle">{result.resultDesc}</View>

        <AtButton
          type="primary"
          circle
          className="enterBtn"
          onClick={() => {
            Taro.reLaunch({ url: "/pages/index/index" });
          }}
        >
          Return
        </AtButton>
      </View>
      <GlobalFooter />
    </View>
  );
};


