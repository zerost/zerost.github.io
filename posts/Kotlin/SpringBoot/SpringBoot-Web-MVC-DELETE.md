---
title: SpringBoot Web MVC DELETE
date: 2022-09-19 10:25:00
tags:
category: ['Kotlin', 'SpringBoot']
lang: ko
---

# DELETE의개념
HTTP DELETE 메서드는 지정한 리소스를 삭제합니다.

## 예제
### 요청
``` 
DELETE /file.html HTTP/1.1
```

### 응답
- 아마도 명령을 성공적으로 수행할 것 같으나 아직은 실행하지 않은 경우 202 (Accepted) 상태 코드.
- 명령을 수행했고 더 이상 제공할 정보가 없는 경우 204 (No Content) 상태 코드.
- 명령을 수행했고 응답 메시지가 이후의 상태를 설명하는 경우 200 (OK) 상태 코드.
```
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>File deleted.</h1>
  </body>
</html>
```


# Kotlin - SpringBoot
## Controller 예제
```Kotlin
@RestController
@RequestMapping("/api")
class DeleteApiController {

    // URL : /api/delete-mapping?name=test&age=22
    @DeleteMapping(path = ["/delete-mapping"])
    fun deleteMapping(
        @RequestParam(value = "name") _name : String,
        @RequestParam(value = "age") _age : Int,
    ): String {
        println(_name)
        println(_age)
        return _name + " " + _age
    }

    // URL : /api/delete-mapping/name/{name}/age/{age}
    @DeleteMapping(path = ["/delete-mapping/name/{name}/age/{age}"])
    fun deleteMappingPath(
        @PathVariable(value = "name") _name : String,
        @PathVariable(value = "age") _age : Int,
    ): String {
        println(_name)
        println(_age)
        return _name + " " + _age
    }
}
```


# 출처
- DELETE의 개념, 예제 - https://developer.mozilla.org/ko/docs/Web/HTTP/Methods/DELETE  
- 인프런: 스프링부트-코틀린 - https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-%EC%BD%94%ED%8B%80%EB%A6%B0
