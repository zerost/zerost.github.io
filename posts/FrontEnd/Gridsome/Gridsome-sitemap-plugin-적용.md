---
title: Gridsome Sitemap Plugin 적용
date: 2022-04-18 21:53:00
category: ['FrontEnd', 'Gridsome']
lang: ko
---
<!-- tags: ['Gridsome', 'sitemap', 'SEO'] -->
# 배경
검색엔진 최적화(SEO) 중에 해야할 일중 하나가 sitemap을 생성하는 일이다.  
sitemap은 사이트의 내용들을 담은 url들을 정리해놓은 xml파일이다.
보통 robots.txt파일에 sitemap경로를 정의하기도 하지만 웹사이트 url 뒤에 /sitemap.xml을 입력해보면 보통 출력된다.
예를들면 https://blog.zerost.com/sitemap.xml 처럼 말이다. 

# 설치
[Gridsome plugin](https://gridsome.org/plugins/@gridsome/plugin-sitemap)에서 확인을 하게되면 

> @gridsome/plugin-sitemap

을 찾는다. 문서가 잘되어있어서 왠만한건 해당 문서만 확인하고 설치가 가능하다.

npm
```bash
npm i @gridsome/plugin-sitemap
```
yarn
```bash
yarn add @gridsome/plugin-sitemap
```

이렇게 설치를 하고 나서 나의 경우는 한해서 아래와 같이 설정만 해주면 끝이난다. sitemap.xml 파일은 사이트를 build를 한 경우만 생성이 되고 develop으로 서버를 부팅했을 경우는 접근이 안된다. 

```json
{
    use: "@gridsome/plugin-sitemap",
    options: {
        config: {
            "/ko/**": {
                changefreq: "weekly",
                priority: 0.5,
                lastmod: "2022-04-12",
            },
            "/about": {
                changefreq: "monthly",
                priority: 0.7,
                lastmod: "2022-04-12",
            }
        }
    }
}
```

# 결론
Markdown 파일들을 읽어서 자동으로 sitemap.xml까지 만들어주는 Gridsome 엔진. 설치도 간단하고, 문서도 친절하게 잘나와있다. 너무나도 마음에 든다.  
해당 설정이 변경되면 이 문서도 같이 수정하도록 하겠다. 약간 수정이 필요한 것 같은게 lastmod 속성이 MD파일의 속성을 읽어서 출력해 줬으면 더 좋을 것 같다는 생각이 든다. 시간 되면 그렇게 할수있도록 수정을 조금 해봐야겠다.


# 참조
* [@gridsome/plugin-sitemap](https://gridsome.org/plugins/@gridsome/plugin-sitemap)