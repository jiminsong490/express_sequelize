# README

1. 목표 = express + sequelize + cookie/session + passport & react를 사용하여 로그인, 로그아웃, 회원가입, 댓글 작성 구현
- express : 라우터, 미들웨어 개념
- sequelize : model + assosiate + config 개념, SQL문 -> 시퀄라이즈 쿼리
- cookie/session : 쿠키와 세션의 장단점, 동작 방식, 쿠키 서명
- passport : passport.authenticate(get,post로 전달받은 user정보를 뒤로 넘겨줌 && 로그인 성공여부에 따라 redirect해줌) -> new LocalStrategy(넘겨받은 user정보와 저장된 계정 정보를 비교, done으로 넘겨줌) -> passport.serializeUser(처음 세션 생성 시 호출) || passport.deserializeUser(세션이 이미 있다면 호출)
- react : useState, useEffect, .map(), fetch()

2. 공부 기간 = 22.08.15 ~ 22.08.25

3. 기여도 = 100%

3. 공부하면서 느낀 점
- 이론적으로 이미 알고있다고 생각했던 곳에서 오류가 자주 발생, 직접 코드를 작성해보기 전에는 정확히 알고 있는것이 아님
- 라우터를 사용하여 요청을 처리하는 것이 가독성이 훨씬 좋음
- 데이터베이스 지식이 부족함, 다시 공부할 것
- 블로그에 올라온 글을 참고하는 것은 좋으나 가급적 문서를 직접 읽어보고 적용해볼 것
- passport는 실행순서가 굉장히 복잡하니 흐름을 잘 이해해야 함
- 라이브러리는 버전이 업데이트 되면서 코드가 달라질 수 있음, 버전 확인 꼭 하기
