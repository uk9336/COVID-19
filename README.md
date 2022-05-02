# 코로나바이러스감염증-19

## 코로나 현황 안내 앱

► 개발환경

- 사용언어 : JavaScript
- 프레임워크 : React Native
- 런타임환경 : Node.js

► 프로젝트 설정

- Android/iOS 스플래시 화면 구분 설정
- 메인화면 ActionBar 제거

---

## 화면별 작업 내용

► 스플래시 화면

- 로고 표시 후 메인 화면으로 이동

► 메인화면

- 최근 7일 감염 현황 막대 그래프 노출
- 전일 지역별 확진자 현황 노출
- 공공데이터 파싱

```
// JSON 형태

[{
    "createDt":"2022-04-26 16:03:02.248",
    "deathCnt":4520,
    "defCnt":3446789,
    "gubun":"서울",
    "gubunCn":"首尔",
    "gubunEn":"Seoul",
    "incDec":13560,
    "localOccCnt":13559,
    "overFlowCnt":1,
    "qurRate":36246,
    "seq":16560,
    "stdDay":"2022년 04월 26일 00시",
    "updateDt":"null"
},{
    "createDt":"2022-04-26 16:03:02.248",
    "deathCnt":22325,
    "defCnt":17009865,
    "gubun":"합계",
    "gubunCn":"合计",
    "gubunEn":"Total",
    "incDec":80361,
    "localOccCnt":80345,
    "overFlowCnt":16,
    "qurRate":32940,
    "seq":16559,
    "stdDay":"2022년 04월 26일 00시",
    "updateDt":"null"
}]
```

---

## 앱 화면

- 스플래시 화면

## <img src="https://user-images.githubusercontent.com/48816223/166238075-25aa5f0b-e7fb-4493-b8e9-7e021d80d2d2.png" width="300"/>

---

- 메인 화면

<img src="https://user-images.githubusercontent.com/48816223/166238312-45d6c96a-4b92-4b0f-ab9e-922df7679ca8.jpeg" width="300"/>
