// email 정규식
export const expEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

// password 정규식
// 조건1. 6~20 영문 대소문자
// 조건2. 최소 1개의 숫자 혹은 특수 문자를 포함해야 함
export const expPassword = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/

// 핸드폰번호 정규식
// 조건. 숫자만 입력 가능
export const expPhone = /[^0-9]/g
