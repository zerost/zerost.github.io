---
title: SpringBoot Web MVC ResponseEntity
date: 2022-09-18 10:22:00
tags:
category: ['Kotlin', 'SpringBoot']
lang: ko
---

# ResponseEntity란?
Spring Framework에서 제공하는 클래스 중 HttpEntity라는 클래스가 존재한다. 이것은 HTTP 요청(Request) 또는 응답(Response)에 해당하는 HttpHeader와 HttpBody를 포함하는 클래스이다.

## Http 상태코드
- 1xx (정보): 요청을 받았으며 프로세스를 계속한다
- 2xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다
- 3xx (리다이렉션): 요청 완료를 위해 추가 작업 조치가 필요하다
- 4xx (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리할 수 없다
- 5xx (서버 오류): 서버가 명백히 유효한 요청에 대해 충족을 실패했다

# Kotlin - SpringBoot
## Controller 예제
```Kotlin
@RestController
@RequestMapping("/api")
class ResponseApiController {
    // 1. Get 4xx
    // Get http://locaLhost:8080/api/repose?age=10
    @GetMapping("")
    fun getMapping(@RequestParam age: Int?): ResponseEntity<String> {
        return age?.let {
            if (age < 20) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("age 값은 20보다 커야합니다.")
            }
            ResponseEntity.ok("OK")
        }?: kotlin.run {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("age 값이 누락되었습니다.")
        }
    }

    // 2. Post 200
    @PostMapping("")
    fun postMapping(@RequestBody userRequestDto: UserRequestDto?): ResponseEntity<Any> {
        return ResponseEntity.status(HttpStatus.OK).body(userRequestDto)
    }

    // 3. Put 201
    @PutMapping
    fun putMapping(@RequestBody userRequestDto: UserRequestDto?): ResponseEntity<Any> {
        return ResponseEntity.status(HttpStatus.CREATED).body(userRequestDto)
    }

    // 4. delete 500
    fun deleteMapping(@PathVariable id: Int) : ResponseEntity<Any> {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null)
    }
}
```


# 출처
- ResponseEntity란? - https://devlog-wjdrbs96.tistory.com/182  
- Http 상태코드 - https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C  
- 인프런: 스프링부트-코틀린 - https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-%EC%BD%94%ED%8B%80%EB%A6%B0
