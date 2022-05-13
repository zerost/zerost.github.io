---
title: "Shell Script 변수"
date: 2022-05-13 11:28:00
tags:
category: ['Linux', 'Shell Script']
lang: ko
---

# 배경
Raspberry PI에 우분투 리눅스를 사용하고 있다. 해당 리눅스에 DB 자동 백업을 하려고 하다보니  
자연스럽게 쉘스크립트를 사용할 상황이 되었다. 그래서 급하게 필요한 내용만 인터넷에서 검색을 해서 습득을 했다.

# 문법
변수 선언하는 방법은 간단하다. 변수명=변수값 이다. 주의할 점은 다른언어에서와 같이 = 앞뒤로 공백이 들어가면 안된다.
간단해서 아래 예제만 확인하면 금방 익힐수 있다.
```bash
#!/bin/sh
NUM=1234 #숫자형
STRING="HELLO WORLD!" #문자형
STRING2 = "안되네?" #ERROR: 변수할당 불가함

echo $NUM #1234
echo $STRING #HELLO WORLD!
echo $STRING2 #빈공백만 출력됨
```
## 활용
스토리지에 백업할 때 연도별, 월별로 폴더를 생성 하는 로직이다.
```bash
#!/bin/sh
...(생략)
DIR=/storage/db-backup/$(date +%Y)/$(date +%m)
mkdir $DIR -p #폴더생성 
MV *.backup $DIR #.backup 파일 신규 생성 폴더로 복사
```


