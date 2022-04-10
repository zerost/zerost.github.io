---
layout: light
title: PostgreSQL INSERT시 TIMESTAMPTZ 컬럼 UTC로 셋팅
date: 2022-04-03 17:24:25
tags:
category: ['Database', 'Postgresql']
lang: ko
---

테이블생성 DDL
```sql
create table tb_member (
	member_id uuid not null,
	member_name varchar(200) not null,
	effective_date timestamptz not null,
	expiration_date timestamptz not null,
	primary key(member_id)
);
```

글로벌용 프로그램을 개발하다보면 timezone 관련해서 고민이 필요하다. 
expiration_date 항목에 UTC 9999-12-31 23:59:59.999999 데이터를 집어넣으려고 한다.
하지만 그냥 insert 할 경우 현재 환경에 셋팅된 시간(나의 경우 GMT+9)으로 들어간다.

그래서 9999-12-31 23:59:59.999999 이 데이터가 utc라는걸 셋팅해줘야 된다.
아래의 형태로 형 변환을 하면 된다.
```sql
TO_TIMESTAMP('99991231 235959.999999', 'YYYYMMDD HH24MISS.US')::timestamp without time zone at time zone 'utc'
```

최종 SQL INSERT
```sql
insert into tb_member values(gen_random_uuid(), '기본', now(), TO_TIMESTAMP('99991231 235959.999999', 'YYYYMMDD HH24MISS.US')::timestamp without time zone at time zone 'utc');
```

\[참고자료\]  
[how to convert a string to timestamp in a desired timezone - stackoverflow](https://stackoverflow.com/questions/42684304/how-to-convert-a-string-to-timestamp-in-a-desired-timezone)
