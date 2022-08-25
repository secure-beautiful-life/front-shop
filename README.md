<a name="readme-top"></a>

<br />
<div align="center">

  <h1 align="center">👔 sasstyle - FE</h1>

  <p align="center">
    쇼핑몰 기반의 패션 의류 가상 피팅 서비스
    <br />
    <br />
    <a href="http://sasstyle.s3-website.ap-northeast-2.amazonaws.com/">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
<br />

## 🗂 프로젝트 소개

sasstyle은 가상 피팅 서비스를 쇼핑몰 내에 구현한 프로젝트입니다.
쇼핑몰의 기본적인 장바구니, 구매, 리뷰 등의 기능을 구현해놓았고, 추가로 피팅 서비스를 각 상품 페이지 안에 구현했습니다.
<br />

- 페이지의 UI별로 로딩 스켈레톤을 작성하여 로딩 화면의 어색함을 최소화
- data fetching library를 사용하여 중복 네트워크 요청을 최소화
- 메인 페이지 로딩의 병목을 줄이기 위해 무한스크롤 사용
- 로그인을 하지 않아도 둘러볼 수 있도록 페이지별 권한을 다르게 작성

<br />

### ⚙️ Built With

- ![typescript]
- ![React][react.js]
- ![RTK QUERY]
- ![Styled Components]
- ![Webpack]
- ![aws]

<br />
<br />

## 📑 구성 페이지

### 1. 기본적인 쇼핑몰 기능

검색, 조회 등이 있습니다.
<br />
<img width="32%" alt="스크린샷 2022-08-08 오후 11 29 12" src="https://user-images.githubusercontent.com/104143009/183442065-063316dc-a4b2-4b86-85fd-79a3c0424daa.png">
<img width="32%" alt="스크린샷 2022-08-08 오후 11 42 58" src="https://user-images.githubusercontent.com/104143009/183444989-43819b9b-0573-4e01-82ae-1aea931e5c29.png">
<img width="32%" alt="스크린샷 2022-08-08 오후 11 46 22" src="https://user-images.githubusercontent.com/104143009/183445893-3f14b98b-9dee-4792-8455-4ab50b1e8485.png">
<br />
<br />
장바구니, 구매, 리뷰등이 있습니다.
<br />
<img width="32%" alt="스크린샷 2022-08-08 오후 11 45 33" src="https://user-images.githubusercontent.com/104143009/183449227-dbe847ab-8f55-4182-b184-38ba6f2f55db.png">
<img width="32%" alt="스크린샷 2022-08-08 오후 11 45 43" src="https://user-images.githubusercontent.com/104143009/183449241-77d631e6-6512-4b4f-86bb-cfcc332c9058.png">
<img width="32%" alt="스크린샷 2022-08-08 오후 11 45 54" src="https://user-images.githubusercontent.com/104143009/183449250-f1a63c94-a31d-435b-bc0e-4aa9b551acf6.png">
<br />
<br />
<br />

### 2. 마이페이지

회원가입 시 선택한 USER TYPE에 따라, TYPE이 BRAND인 유저라면 직접 판매 상품을 올릴수도 있습니다.
<br />
<img width="32%" alt="스크린샷 2022-08-09 오전 12 05 26" src="https://user-images.githubusercontent.com/104143009/183450017-4bbeef6d-c07d-4849-b11b-fff2e65ed6c6.png">
<img width="32%" alt="스크린샷 2022-08-08 오후 11 44 40" src="https://user-images.githubusercontent.com/104143009/183449743-0c2094c2-e07b-43e7-b20e-91c7b80cd6d3.png">
<img width="32%" alt="스크린샷 2022-08-09 오전 12 04 51" src="https://user-images.githubusercontent.com/104143009/183450194-18f9e73b-5e13-49c9-98b5-469d63bd862c.png">
<br />
<br />

<p align="right"><a href="#readme-top">맨 위로</a></p>
<br />
<br />

### 3. 피팅서비스

본인의 정면 사진에 옷을 입혀볼 수 있습니다.
<br />
<img width="32%" alt="스크린샷 2022-08-10 오후 3 21 59" src="https://user-images.githubusercontent.com/104143009/183830193-6144e4f7-778c-4d1e-bb71-ae9b3b48b0fe.png">
<img width="32%" alt="스크린샷 2022-08-10 오후 3 22 07" src="https://user-images.githubusercontent.com/104143009/183830200-4cf7ff28-a976-491f-b61e-bba970fac124.png">
<img width="32%" alt="스크린샷 2022-08-10 오후 3 25 47" src="https://user-images.githubusercontent.com/104143009/183830410-cf5a5174-441c-4109-a23a-cd54f1e9edbe.png">
<br />
<br />

<p align="right"><a href="#readme-top">맨 위로</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[styled components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[rtk query]: https://img.shields.io/badge/RTKquery-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white
[webpack]: https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black
[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[aws]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
