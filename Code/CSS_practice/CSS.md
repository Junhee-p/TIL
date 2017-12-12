# CSS_practice 
```
transition : 속성명, 전환시간, 가속도 설정, 지연시간;
transition : all 1s ease 0s;
```
```
@keyframes 모션이름 {
    0% { 모션 시점점의 css 설정}
    100% { 모션 끝점의 css 설정}
}
animation: 모션이름호출 시간 가속도 지연시간 반복횟수 방향지정;

@keyframes ani {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg;) }
}
animation: ani 2s linear 3 normal;
```
