---
title: Gridsome 구글 애널리틱스 적용하기
date: 2022-04-17 23:42:00
category: ['FrontEnd', 'Gridsome']
lang: ko
---
<!-- tags: ['Gridsome', '구글애널리틱스', 'GoogleAnalytics', 'analytics']-->
# 배경
구글 애널리틱스를 적용하게 되면 사이트에 몇명이 방문하는지, 어떤 경로로, 어떤 검색어로 찾아오는지 알 수 있다.
뭐 신생 블로그다 보니까 당연히 들어오는 사람도 없겠지만, 언젠가는 내가 쓴 글이 다른사람에게 도움이 될 수 도 있는 것이라고 생각한다.  
그래서 반응도 확인할 겸 등록하게 되었다.

# 설치
Gridsome에 플러그인이 있는지 처음 확인을 했었다. 

> @gridsome/plugin-google-analytics

라는것이 있기에 이걸 적용하면 되는 줄 알았다. 그런데 이 플러그인을 적용했는데도, 크롬 개발자 도구에 네트워크 요청도 없었다. 이상하다고 생각해서 문서를 보다보니 [vue-analytics](https://github.com/MatteoGabriele/vue-analytics/blob/master/README.md)를 참조해서 개발이 된걸로 추측이 된다.  
  
그런데 사이트 들어가보니...

> ⚠️ Sorry but vue-analytics is not longer maintained. I would suggest you to switch to vue-gtag. With love, the guy who made the package.

라고 되어있다. vue-gtag를 사용하란다..
그래서 gtag로 검색을 했더니

> gridsome-plugin-gtag

패키지가 있다. 이 패키지를 설치했다.

npm
```bash
npm i gridsome-plugin-gtag
```
yarn
```bash
yarn add gridsome-plugin-gtag
```

그리고

gridsome.config.js 파일에 추가를 했더니 정상작동한다!
```json
{
    use: 'gridsome-plugin-gtag',
    options: {
        config: {
            id: '[GOOGLE_ANALYTICS_ID]'
        },
    },
}
```

# 결론 
설치하고 났더니 방문자를 알 수 있어서 좋다.   
근데, Gridsome plugins 페이지에서 @gridsome/plugin-google-analytics 이건 좀 지워야 되는거 아닌지 모르겠다.

# 참조
 * [Gridsome Plugin to incorporate Google Tag](https://gridsome.org/plugins/gridsome-plugin-gtag)
 * [@gridsome/plugin-google-analytics](https://gridsome.org/plugins/@gridsome/plugin-google-analytics)
 * [vue-analytics](https://github.com/MatteoGabriele/vue-analytics/blob/master/README.md)