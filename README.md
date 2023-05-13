## Types of Tests

### Unit tests

- 작은 단위의 코드를 고립된 환경에서 테스트
- 더 복잡한 함수에서 가능한 엣지 케이스들을 한 번에 커버할 수 있다.
- 작은단위로 테스트 하기 때문에 무엇때문에 실패했는지 추적이 쉽다.

### Integration tests

- 두 개 이상의 단위의 코드를 같이 테스팅

### Functional Tests

- 함수의 특정 부분이 소프트웨어에서 잘 동작하는지 테스팅

- behavior 즉 하이레벨이라 리팩터링으로 인해 테스트코드를 통과하지 못하는 경우가 생길 수 있다.

- behavior 즉 하이레벨이라 문제를 찾기 어렵다.

- 수정되었을 때 테스트코드를 작성하는데에 시간이 많이 든다.

- 이는 작은단위의 Unit testing으로 보완할 수 있다.

### Ent-to-end (E2E) Tests

- 실제 브라우저와 서버 환경에서 테스트

## RTL

가상돔으로 테스팅, 브라우저 없이도 테스트 가능

## jest-dom

https://github.com/testing-library/jest-dom

## test(string,callback)

callback에서 에러를 반환하지 않으면 테스트 성공

## describe(string,callback)

여러 테스트를 한 번에 할 수 있음

## command\[All\]ByQueryType

command

- get : expect element to be in DOM
- query : expect element not to be in DOM
- find : expect element to appear async

\[All\]

- exclude : expect only one match
- include : expect more than one match

QueryType

- Role(most preferred)
- AltText(images)
- Text(display elements)
- Form elements
  - PlaceholderText
  - LabelText
  - DisplayValue

## 느낀점

케이스 별로 테스트 하자
경계값에 대한 테스트를 잘 하자
유틸함수와 데이터를 가공하는 함수등은 기능단위로 더미데이터로 유닛테스트를 하자 즉 유틸함수의 테스트 코드를 작성 후에 이를 재사용하는 식으로 작성하자!

실제 브라우저 환경이 아닌 가상돔으로 before와 after를 비교 하는 것이기 때문에 실제 브라우저 환경과는 다를 수 있다.

## 궁금한 점

테스트코드를 위한 함수를 작성하는 것이 생산성을 향상시켜줄 것 같은데, 실제론 어떨까?
