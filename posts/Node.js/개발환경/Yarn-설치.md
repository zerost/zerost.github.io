---
title: Nodejs Yarn 설치
date: 2022-04-10 22:35:00
tags:
category: ['Node.js', '개발환경']
lang: ko
---
# yarn 설치
[yarn 공식사이트](https://yarnpkg.com)에 들어갔다. [설치페이지](https://yarnpkg.com/getting-started/install)에서 확인하니 노트 16.10부터 corepack이라는 것에 기본 탑재 되었나보다.
아래의 명령어만 호출해주면 끝. 


>Node.js >=16.10  
>Corepack is included by default with all Node.js installs, but is currently opt-in. To enable it, run the following command:

```bash
corepack enable
```

노드가 16.10미만 버전인경우
>Node.js <16.10  
>Corepack isn't included with Node.js in versions before the 16.10; to address that, run:

```bash
npm i -g corepack
```
설치해주면 된다.

- - -
# 트러블슈팅
## [오류현상]
환경: Windows 10 Home  
증상: corepack enable 명령어 실행시 아래와 같은 오류 발생

```powershell
PS C:\> corepack enable
Internal Error: EPERM: operation not permitted, open 'C:\Program Files\nodejs\pnpm'
Error: EPERM: operation not permitted, open 'C:\Program Files\nodejs\pnpm'
```

## [원인파악]
operation not permitted라는 메시지로 보아 권한 문제로 판단됨.

## [조치 & 방안검토]
powershell을 관리자권한으로 실행하면 아래와 같이 정상 처리됨

```powershell
PS C:\> corepack enable
PS C:\>
```

끝