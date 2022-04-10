---
title: 라즈베리파이 Ubuntu Linux CPU 온도확인
date: 2022-04-03 18:10:30
tags:
category: ['Raspberry Pi', 'Ubuntu Linux']
lang: ko
---

Ubuntu Linux 5.4.0-1056-raspi 버전 기준(Rasberry Pi OS 기준)
```bash
$ cat /sys/class/thermal/thermal_zone0/temp
42355
```

결과가 42355로 나오는데, 1,000을 나누면 현재 온도이다. 현재 내 Rasberry Pi CPU온도는 42.355도 이다.
보기좋게 출력하기 위해서 아래와 같이 보완했다.

```bash
$  cat /sys/class/thermal/thermal_zone0/temp | awk '{print $1/1000 " °C"}'
42.355 °C
```

훨씬 더 직관적이다!