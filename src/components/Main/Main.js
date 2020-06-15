import React, { Component } from "react"
import { Card, Col, Row } from "antd"
import { withTranslation, Trans } from "react-i18next"

import AppHelmet from "components/AppHelmet/AppHelmet"
import StyledWrapper from "./MainStyled"

class Main extends Component {
	render() {
		return (
			<StyledWrapper>
				<AppHelmet />
				<h2 className="a11yHidden">
					<Trans i18nKey="components.AppMain.h2" />
				</h2>
				<div className="landing bg">
					<p className="desc">
						<Trans i18nKey="components.AppMain.desc" />
					</p>
					<dl>
						<dt>
							<Trans i18nKey="components.AppMain.skills.title" />
						</dt>
						<dd>
							<Trans i18nKey="components.AppMain.skills.react" />
						</dd>
						<dd>
							<Trans i18nKey="components.AppMain.skills.reactHooks" />
						</dd>
						<dd>
							<Trans i18nKey="components.AppMain.skills.styledComponent" />
						</dd>
						<dd>
							<Trans i18nKey="components.AppMain.skills.redux" />
						</dd>
						<dd>
							<Trans i18nKey="components.AppMain.skills.reactRouter" />
						</dd>
					</dl>
				</div>
				<section className="contentWrap">
					<h3>주요 작업 내용 정리</h3>
					<p>
						프로젝트 코드는
						<a
							href="https://github.com/90chanho/ufc"
							target="_blank"
							rel="noreferrer noopener"
							className="highlight">
							GitHub
						</a>
						에서 확인 할 수 있습니다.
					</p>
					<Row gutter={[16, 16]}>
						<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
							<Card title="프로젝트 구성" bordered={true}>
								<ul>
									<li>CRA를 사용하여 기본 프로젝트 구조 생성</li>
									<li>상태 관리 라이브러리(redux)를 사용하여 상태 관리</li>
									<li>
										styled-components(style in javascript)를 사용하여 스타일링하였고 가독성을 위해
										스타일링 부분을 별도의 파일로 분리(ex. Component.js와 ComponentStyled.js)
									</li>
									<li>
										프로젝트 데이터는 임의로 데이터를 생성하고 firebase의 Realtime Database를
										사용하여 데이터 통신 기능 구현
									</li>
									<li>
										테마(light, dark) 스타일링. 첫 방문시 테마 선택 모달창 제공하며, 선택 값은 쿠키
										데이터로 7일간 저장, 이후 GNB에서 테마 선택 가능 기본값은 쿠키가 없을 경우
										디바이스가 현재 dark-Mode인지 감지하여 light / dark 구분하여 적용
									</li>
									<li>
										다국어 기능 구현(한/영, 영작은 번역기로 번역), 기본 값은 navigator.language값을
										가져와 적용
									</li>
								</ul>
							</Card>
						</Col>
						<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
							<Card title="패키지 사용" bordered={true}>
								<ul>
									<li>
										<span className="highlight">styled-components</span>를 사용하여 각 컴포넌트
										스타일링 및 theme 스타일링 적용
									</li>
									<li>
										<span className="highlight">react-router</span>를 사용하여 router 설정
									</li>
									<li>
										<span className="highlight">redux</span>를 사용하여 상태 데이터 관리
									</li>
									<li>
										<span className="highlight">i18n, react-i18next</span>를 사용하여 다국어 적용
									</li>
									<li>
										<span className="highlight">react-helmet</span>를 사용하여 meta 데이터 적용
									</li>
									<li>
										<span className="highlight">antd, @ant-degisn/icons</span>를 사용하여 일부
										스타일 컴포넌트 적용
									</li>
									<li>
										<span className="highlight">react-cookie</span>를 사용한 쿠키값 설정
									</li>
								</ul>
							</Card>
						</Col>
						<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
							<Card title="작업 페이지 목록" bordered={true}>
								<ul>
									<li>메인 페이지 : 프로젝트 간단 정보</li>
									<li>이벤트 페이지 : UFC 이벤트(경기) 정보</li>
									<li>선수 페이지 : UFC 선수 정보</li>
									<li>랭킹 페이지 : UFC 체급별 랭킹</li>
									<li>로그인 : 로그인 기능 구현</li>
									<li>회원가입 : 회원가입 기능 구현</li>
									<li>내 정보 : 회원정보 확인 및 수정</li>
									<li>404 페이지 : Page Not Found 페이지 제공</li>
								</ul>
							</Card>
						</Col>
						<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
							<Card title="이벤트 페이지" bordered={true}>
								<ul>
									<li>이벤트 데이터를 fetch하여 리스트 렌더링</li>
									<li>오늘 날짜를 기준으로 예정 / 과거 이벤트를 필터링</li>
								</ul>
							</Card>
						</Col>
						<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
							<Card title="선수 페이지" bordered={true}>
								<ul>
									<li>선수 데이터를 fetch하여 이름순으로 리스트 렌더링</li>
									<li>select요소를 통해 체급별로 필터링하여 리스트 렌더링 기능 구현</li>
									<li>현재 리스트 렌더링 된 선수들 목록 안에서 선수 이름을 통한 검색 기능 구현</li>
									<li>
										리스트 렌더링 된 선수의 프로필 보기를 클릭하면 선수 상세 프로필 페이지로 이동
									</li>
									<li>Discus 서비스를 적용하여 선수 상세 프로필 페이지마다 코멘트 기능 구현</li>
								</ul>
							</Card>
						</Col>
						<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
							<Card title="랭킹 페이지" bordered={true}>
								<ul>
									<li>선수 데이터를 fetch하여 그 중 체급별 / 랭킹순으로 리스트 렌더링</li>
									<li>
										선수 데이터의 현재 랭킹 과거 랭킹을 비교하여 상승 / 하락 / 랭킹 진입 / 변화 없음
										내용을 제공
									</li>
									<li>선수 이름을 클릭하면 선수 상세 프로필 페이지로 이동</li>
								</ul>
							</Card>
						</Col>
						<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
							<Card title="계정 - 로그인" bordered={true}>
								<ul>
									<li>
										로그인 기능 구현을 위해 임의로 유저 데이터를 작업하였고, 입력 값과 비교하여
										일치하면 로그인 되도록 작업
									</li>
									<li>공통 Input 컴포넌트를 만들고 이를 사용하여 form 구현</li>
									<li>validation 기능 구현(빈 값, 유효하지 않는 계정)</li>
									<li>
										로그인 성공시 새로고침 하여도 로그인을 유지하는 기능을 위해 localStorage을 사용.
										10분 뒤 로그아웃 되도록 설정
									</li>
								</ul>
							</Card>
						</Col>
						<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
							<Card title="계정 - 회원가입" bordered={true}>
								<ul>
									<li>공통 Input 컴포넌트를 만들고 이를 사용하여 form 구현</li>
									<li>validation 기능 구현(빈 값, 이메일 폼, 패스워드 규칙, 패스워드 확인 등)</li>
									<li>가입 시 회원을 구분할 수 있도록 uid(unique id)를 생성</li>
								</ul>
							</Card>
						</Col>
						<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
							<Card title="계정 - 내 정보" bordered={true}>
								<ul>
									<li>
										localStorage에 저장된 uid를 통해 해당 uid와 동일한 유저의 정보를 가져와 렌더링(*
										기능 구현을 위한 임시적인 방법입니다.)
									</li>
									<li>공통 Input 컴포넌트를 만들고 이를 사용하여 form 구현</li>
									<li>validation 기능 구현(빈 값, 이메일 폼 등)</li>
								</ul>
							</Card>
						</Col>
					</Row>
				</section>
			</StyledWrapper>
		)
	}
}

export default withTranslation()(Main)
