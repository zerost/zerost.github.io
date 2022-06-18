---
title: TypeScript 기본타입
date: 2022-06-06 14:42:00
tags:
category: ['TypeScript']
lang: ko
---
# 1. Primitives Type(윈시 타입)
- string  
  기본적인 문자열. "Hello, world"와 같은 문자열
  ```typescript
  const msg: string = "message";
  let myName: string = "Alice";
  ```
- number
  자바스크립트에는 int, float형이 있는데 두개를 구분하지 않고 심플하게 number로 사용
  ```typescript
  const size: number = 1234;
  let size2: number = 1234;
  ```
- boolean  
  true와 false 두가지 값이 있음
  ```typescript
  const isBig: boolean = true;
  let isSmall: boolean = false;
  ```

변수 선언시(const, let) 타입을 표기를 안하게되면 컴파일러가 알아서 추론을 해서 선언하게 된다. 하지만 명시적으로 표기하는 것이 유지보수시에도 도움이 되고, 선언하지 않을꺼라면 굳이 타입스크립트를 사용하지 않고 Javascript를 사용해도 될 것 같다.
```typescript
const msg = 'this is message'; //string 타입으로 추론 해줌(개인적으로 비추천함)
const count = 9; //number 타입으로 추론
```

# 2. Arrays(배열)
number형 배열 타입은 number[], string타입은 string[] 으로 선언하면 된다. Array\<number>나 Array\<string> 으로 작성해도 된다.

```typescript
const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];
```


# 3. Any
Any타입은 어떠한 값도 다 포함될 수 있는 값이다. Primitives Type이나 Array, 심지어 function까지 모두 다 들어갈수 있는 값이다. 이 타입은 굳이 사용하지 않은 것이 맞는 것 같다. 이걸 사용한다면 굳이 타입스크립트를 사용할 필요가 없는 것이다.

```typescript
let value: any = { x: 0};
value = "Hello"; //오류 미발생
value = () => {}; //오류 미발생
value(); //오류 미발생
```


# 4. function (함수)
paramter와 return 타입에 설정가능하다.

```typescript
function length(name: string): number {
  return name.length;
}

console.log(length("test")); //4 출력

length(1234); //Paramter타입오류 발생
const n: string = length('1234'); // Return타입 오류 발생
```

# 5. Enums
  ## 숫자 열거형(Numeric enums)
  ```typescript
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right
  }
  ```
  Up을 1로 선언했음. 그 이후에 선언되는 값은 1씩 증가한값이다. 그로 인해서 Down = 2, Left = 3, Right = 4가 된다.

  ```typescript
  enum Direction {
    Up,
    Down,
    Left,
    Right
  } 
  ```  
  아무런 값을 셋팅하지 않은 경우는 최상위부터 0으로 시작한다. Up = 0, Down = 1, Left = 2, Right = 3이 된다.

  ```typescript
  enum Direction {
    Up,  //0
    Down = 6, //6
    Left, //7
    Right //8
  } 
  ```  
  상위값부터 0으로 셋팅되고, Down = 6으로 셋팅을 할 경우, 그 다음부터 1씩 증가한다. Left = 7, Right = 8이 된다.

  ## 문자 열거형(String enums)
  ```typescript
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }
  ```

  ## 이종 열거형(Heterogeneous enums)
  ```typescript
  enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES"
  }
  ```
  값을 숫자형과 문자형을 혼합해서 사용. 굳이 이렇게 사용할 필요는 없고, 권장하지 않는다고 함.

# 6. 마치며
TypeScript의 타입은 인터페이스, 함수타입, 클래스등 더 많은 타입이 있지만 기본타입에서는 여기까지만 정리하였다. 

# 9. 참조
- [Everyday Types - TypeScript 공식홈페이지](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [타입스크립트 시작하기 - 인프런](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)
