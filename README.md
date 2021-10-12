# js 시작하기
### 준비물 : vs code, chrome
[참고 노션](https://www.notion.so/bd5a947d2d634d44b7545597579d9672#557dc91eaa674716ad9cf3216c2ae06f)

1. hello world 출력, 주석, 들여쓰기
* console.log('hello world')
* // C + /  //주석쓰기
* tab을 누르면 앞에 공간이 생긴다

2. 변수 선언과 데이터 할당
* 자바스크립트에서 변수를 선언할 때는 let 이라는 키워드를 사용

* let은 변수값을 변경 가능, const는 변경불가
    * const 사용한 뒤 다시 변수를 선언하면 TypeError: Assignment to constant variable.

3. 데이터 타입
* 기본 또는 원시형 (primitive) 타입이라고 불리는 number, string, boolean, null, undefined 알아보기
    * 왜 이런 데이터 타입들이 존재할까요?
프로그래밍이란 것은 수많은 데이터를 입력 ⇒ 처리 ⇒ 출력하는 과정을 컴퓨터가 알아들을 수 있는 언어로 서술하는 것

4. 연산자(1)
* 문자열 붙이기
    * 주의! 문자열과 숫자를 이어 붙이면 숫자가 문자로 인식!

* 템플릿 리터럴(백틱``)
    * 백틱(``) 을 사용하여 문자열 데이터를 표현할 수 있다
* 산술연산자
* 증감연산자(주석 확인하기!)
* 대입연산자

5. 연산자(2)
* 비교연산자
    * 비교연산자를 통해서 얻는 값이 boolean 이다.
* 논리연산자
    * || 는 연산 대상 중 하나만 true 여도 true 리턴
    && 는 연산 대상이 모두 true 여야만 true 리턴
    ! 는 true를 false로, flase를  true로 바꿔서 리턴

* 일치연산자
    * 일치연산자는  == 도 있지 않나요?
    맞다. 자바스크립트에는 두 가지의 일치연산자가 있다. 우리가 배운 === 는 엄밀한 (strict) 일치연산자여서 비교하는 두 값의 데이터타입과 값 자체가 정확히 일치해야만 true를 리턴한다
* quiz
    * 상품 가격을 나타내는 2개의 변수를 선언하고 각각의 변수에 원하는 가격값을 할당해보아요.

    두 상품을 더한 가격 역시 총가격을 나타내는 변수에 할당해봅니다. 마지막으로 총가격의 20% 할인된 가격을 구해서 '총 몇 원에 물건을 구입합니다.' 라는 문자열을 출력합니다.

3. 조건문(1)
* if 
    * 구문을 활용해 조건을 만족했을 때만 코드를 실행하도록 할 수 있다. 이 조건의 결과값이 바로 앞서 우리가 배운 Boolean입니다
* else , else of
    * if 구문의 조건을 만족하지 않았을 때 실행하고 싶은 코드를 else 구문과 함께 작성합니다
    * else if 구문을 활용하면 보다 더 많은 조건을 판단하고 코드를 실행할 수 있습니다.
* Quiz
    * 거리를 의미하는 변수를 선언하고 원하는 숫자값 (단위는 km라고 가정) 을 할당합니다. 2km 미만이면 "걸아가자"를, 2km 이상이고 5km 미만이면 "택시를 타자"를, 그 외에는 "기차를 타자"를 출력해봅니다 

4. 반복문
* while
    * 반복문을 활용해서 특정 코드를 반복해서 실행할 수 있다. 이 때 조건을 설정해서 우리가 원하는 만큼만 반복할 수 있도록 한다.
* for
    * for (begin; condition; step) { 조건을 만족할 때 실행할 코드 }
5. 반복문과 조건문 활용
* 반복문과 조건문은 코딩하는데 있어 핵심 중의 핵심입니다. 조금 과장을 보태서 우리가 짜는 프로그램은 반복문과 조건문의 무수한 집합이라고도 할 수 있습니다
* Quiz
    * 1부터 20까지의 숫자중 홀수인 경우는 '숫자 ...은 홀수입니다.'를 짝수인 경우는 '숫자 ...은 짝수입니다' 를 출력하는 프로그램을 작성해봅니다.

