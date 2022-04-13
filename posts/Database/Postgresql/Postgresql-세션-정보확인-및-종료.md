---
lang: ko
title: Postgresql 세션 정보확인 및 종료
date: 2022-04-12 23:04:30
tags: ['PostgreSQL', '세션확인', '세션강제종료']
category: ['Database', 'Postgresql']
---
PostgreSQL 13.3 버전 기준

현재 접속중인 세션 정보 목록 확인
현재 접속중인 세션의 PID 항목을 복사한다.
```sql
SELECT * from pg_stat_activity;
```

쿼리 실행 취소
쿼리 실행 취소할 세션의 PID를 넣고 쿼리를 실행하면 해당 쿼리는 종료된다.
```sql
SELECT pg_cancel_backend(PID);
```

세션을 종료할려는 경우 아래 쿼리에 PID를 넣고 실행하면, 세션 강제종료된다.
```sql
SELECT pg_terminate_backend(PID);
```
