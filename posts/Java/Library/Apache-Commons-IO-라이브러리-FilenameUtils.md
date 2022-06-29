---
title: Apache Commons IO 라이브러리 FilenameUtils
date: 2022-06-28 22:29:00
tags:
category: ['Java', 'Library']
lang: ko
---
# 1. 배경
프로젝트를 수행하다보면 파일관련된 작업이 필요하다. 예를 들면 파일업로드, 첨부파일 다운로드등 처리를 하게 되면 파일명, 확장자, 파일사이즈, 경로등
처리가 필요하게 된다. 그 때마다 Java에서 지원하는 API를 찾아서, RAW데이터를 받아서 데이터 가공을 해야한다. 가공하는 과정에서 예기치 못하는 오류가 발생할 수 도 있다.
그래서 데이터 가공하는 과정도 별도로 테스트가 필요한 상황이 된다. 그런데, 이미 이런 기능들을 나만 사용하는 것도 아닐테고, 이미 한참전부터 많은 사람들이 사용하고 있었을 것 같고, 당연히 라이브러리도 있을 것이라고 판단했다. 검색을 했더니 [Apache Commons IO](https://commons.apache.org/proper/commons-io/) 라는 라이브러리를 찾았다.  
이번에는 파일의 확장자명을 가져오는 부분이 필요해서 해당 부분을 찾았다.

# 2. FileUtils Class 확인
[File Utils class API](https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/FilenameUtils.html)를 확인하니 확장자를 가져오는 메소드가 존재한다.

> static String `getExtension(String fileName)`
>> Gets the extension of a fileName.
  
| 파일명 | 리턴확장자명 |
|-----|-----|
| foo.txt | "txt" |
| a/b/c.jpg | "jpg" |
| a/b.txt/c | "" |
| a/b/c | "" |

예) 
```java
System.out.println(FileUtils.getExtension("test.jpg"));

jpg
```

# 3. 결론
이미 개발해놓은 라이브러리를 사용하는 것이 테스트코드를 줄일수 있는 방법중에 하나 일 것 같아서 적용해보았다. 내가 필요한 부분을 그리 어렵게 개발할 수도 있긴 하지만,
그 동안 많은 사람들이 사용하면서 많은 부분을 보완해가면서 만든 소스를 사용하는 것. 내가 예상하지 못했던 부분까지 생각해서 개발 되어 있을 수도 있으니 사용하는게 좋을 것 같다.
이런 기능을 개발할 시간에 해당 라이브러리를 적용하고 나는 좀 더 비지니스 개발에 집중하자.


# 9. 참조
[FilenameUtils - Apache Commons IO](https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/FilenameUtils.html#getExtension-java.lang.String)