---
title: vue-router 개발자 도구에서 오류
date: 2022-04-09 08:45:25
tags:
category: ['FrontEnd', 'Vue3']
lang: ko
---
## [오류]
### 환경
OS: Windows 10  
Vue: 3.2.31  
Vue router: 4.0.14  
- - -
vue를 브라우저 개발자 도구(devtools)를 실행시키고 실행하다보면 아래와 같은 오류가 발생한 경우가 나온다.  
(개발자 도구를 실행하지 않은 경우는 발생하지 않음)

```bash
vue-router.esm-bundler.js?6c02:2489 Uncaught (in promise) TypeError: api.now is not a function
```
## [원인확인]
버전 문제 이지 않을까 검색을 해보았다. 검색 해본 결과 버전문제가 맞는 듯 했다.

## [결론]
```bash
yarn remove vue-router
year add vue-router@4.0.13
```
검색한 내용을 토대로 버전을 이전버전으로 돌리니 개발자도구(devtools)에서도 오류 없이 정상적으로 작동했다.

## [참고자료]
[Router not working on 4.0.14 -> Use the vue-devtools stable to solve this #1338](https://github.com/vuejs/router/issues/1338)