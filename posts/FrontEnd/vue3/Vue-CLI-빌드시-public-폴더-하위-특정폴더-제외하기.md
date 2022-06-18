---
title: Vue CLI 빌드시 public 폴더 하위 특정폴더 제외하기
date: 2022-05-22 10:41:00
tags:
category: ['FrontEnd', 'Vue3']
lang: ko
---
# 배경
Vue.js CLI에서 빌드시 public 폴더중에 일부 폴더는 제외를 하고 싶었다. 이유는 해당 폴더는 파일업로드가 되는 폴더라서 
굳이 빌드할때 copy가 될 필요는 없었다. 그래서 해당 방법을 한참 찾았다. 그리고는 결국 찾아내고 말았다.

# 환경
Vue CLI: 4.5.17

# 진행
vue.config.js 파일에 아래부분을 추가한다.

```json
module.exports = {
  //...
  chainWebpack: config => {
    config.plugin('copy').tap(([options]) => {
      options[0].ignore.push('files/**')
      return [options]
    })
  }
  //...
}
```

# 결론
해당 files/** 에 해당하는 부분에 제외하고자 하는 폴더를 넣고 빌드하니 정상 제외된다.