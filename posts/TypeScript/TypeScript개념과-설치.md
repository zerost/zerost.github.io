---
title: TypeScript개념과 설치
date: 2022-05-29 10:33:00
tags:
category: ['TypeScript']
lang: ko
---
# 1. TypeScript란?
   타입스크립트(TypeScript)는 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어이다. 마이크로소프트에서 개발, 유지하고 있으며 엄격한 문법을 지원한다. 타입스크립트는 자바스크립트 엔진을 사용하면서 커다란 애플리케이션을 개발할 수 있게 설계된 언어이다. 타입스크립트에서 자신이 원하는 타입을 정의하고 프로그래밍을 하면 자바스크립트로 컴파일되어 실행할 수 있다.  

# 2. TypeScript vs JavaScript
  | 분류 | TypeScript | JavaScript |
  | --- | --- | --- |
  | Data Type | Static Type | Dynamic Type |
  | CompileTime/RunTime | CompileTime | Runtime |
  | 생산성↑ | 코드의 양이 많은 경우 | 코드의 양이 적은 경우 |
  | 타입오류발생 | 컴파일 | 런타임 |
  | IDE 오류 | 잘못된 타입을 사용을 한 경우 .0오류 발생 | 오류 발생하지 않음 |
  | IDE 리팩토링 | TYPE이 이미 정해져있기때문에 IDE에서 리팩토링 가능 | IDE에서 지원하는 리팩토링은 불가(가능하더라도 정확하지 않음) | 

# 3. TypeScript 설치
npm을 설치한다. 기본적으로 nodejs는 설치되어있어야 한다. npm init -y 명령어 실행
```bash
$ npm init -y
Wrote to C:\workspace\typescript\package.json:

{
  "name": "typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
package.json 파일이 생성되었다.

이제 TypeScript를 설치한다.
```bash
$ npm install typescript

added 1 package, and audited 2 packages in 2s

found 0 vulnerabilities
```

# 4. TypeScript 모듈 조회 사이트
[type search - typescriptlang.org](https://www.typescriptlang.org/dt/search?search=)

예) react검색시 아래와같이 조회됨. @types..로 시작하는 모듈이 typescript로 개발된 패키지이다.
```bash
npm i react
npm i @types/react --save-dev
```


# 5. 마치며
  최근들어 Javascript로 개발된 framework의 문서들에도 타입스크립트의 내용이 점점 추가 되고 있고, 최근 개발된 framework의 소스를 확인해봐도 대부분 타입스크립트로 개발되어 있음을 알 수 있었다. 규모가 있는 프로그램을 개발하려고 한다면 Typescript는 이제 기본이 된듯하다.

# 6. 참조
- [타입스크립트 - 위키백과](https://ko.wikipedia.org/wiki/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
- [[TypeScript] TypeScript 개념 및 사용하는 이유](https://any-ting.tistory.com/97)  
- [타입스크립트 시작하기 - 인프런](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)
