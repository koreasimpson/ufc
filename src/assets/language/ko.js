const ko = {
	translation: {
		common: {
			ufc: "UFC",
			confirm: "확인",
			moreInfo: "상세 정보",
			lightTheme: "라이트 테마",
			darkTheme: "다크 테마"
		},
		modal: {
			theme: {
				header: "페이지 테마 설정"
			}
		},
		meta: {
			Article: {
				title: "기사",
				description: "UFC 소식을 제공하는 페이지",
				keywords: "UFC, UFC article, UFC 기사, UFC 소식",
				ogTItle: "UFC 기사",
				ogDescription: "UFC 소식을 제공하는 페이지",
				twitterTitle: "UFC 기사"
			},
			Event: {
				title: "이벤트",
				description: "UFC 이벤트 정보를 제공하는 페이지",
				keywords: "UFC, UFC event, UFC 이벤트",
				ogTItle: "UFC 이벤트",
				ogDescription: "UFC 이벤트 정보를 제공하는 페이지",
				twitterTitle: "UFC 이벤트"
			}
		},
		components: {
			App: {},
			AppFooter: {
				footerNavigation: {
					ufc: "UFC",
					theSport: "the sport",
					community: "community",
					hire: "채용 정보",
					store: "store",
					press: "press credentials",
					help: "HELP",
					fightpass: "fight pass faq",
					raw: "법",
					article: "조항",
					privacy: "개인정보",
					ad: "Ad choices"
				},
				copyright: "저작권 © all-time 구공찬"
			},
			AppGnb: {
				list: {
					event: "이벤트",
					fighter: "선수",
					article: "기사 및 이미지",
					live: "라이브",
					shop: "상점",
					support: "고객지원",
					my: "내 정보",
					login: "로그인"
				}
			},
			AppHeader: {},
			AppHelmet: {
				title: "리액트 포트폴리오",
				description: "구공찬, 프론트엔드 포트폴리오, 리액트",
				keywords: "웹, 웹 개발, 프론트엔드, 프론트엔드 개발, UI, 접근성",
				ogTitle: "리액트 포트폴리오",
				ogDescription:
					"CRA를 통해 만든 UFC 홈페이지입니다. 이 사이트는 개인 포트폴리오 용도이며, 상업적인 의도가 없습니다.",
				twitterTitle: "리액트 포트폴리오"
			},
			AppMain: {
				h2: "메인 페이지",
				desc: '"CRA를 사용하여 제작한 UFC 홈페이지"',
				skills: {
					title: "Use Skills",
					react: "React",
					reactHooks: "React-hooks",
					styledComponent: "styled-component",
					redux: "redux",
					reactRouter: "react-router"
				}
			},
			EventItem: {
				fightPass: "FIGHT <0>NIGHT</0>"
			},
			InputField: {
				labelText: {
					account: "UFC 계정",
					email: "이메일",
					password: "암호",
					passwordConfirm: "암호 확인",
					phone: "핸드폰 번호",
					firstName: "이름",
					familyName: "성",
					sequrityAnswer: "질문 답변"
				},
				validation: {
					empty: "{{ labelText }}을(를) 입력해주세요",
					emailForm: "이메일 형식으로 입력해주세요",
					passwordInValidationText: "암호에 이메일에 입력한 값이 포함되어서는 안 됩니다.",
					passwordRules: "최소 1개의 숫자와 특수문자를 포함한 6~20자의 영문으로 생성해야 합니다.",
					notSamePassword: "입력한 암호와 일치하지 않습니다"
				}
			},
			SignUp: {
				Form: {
					h2: "회원가입",
					desc: "UFC 계정을 생성하여 원하는 선수의 소식을 정기적으로 받아보세요",
					legend: {
						required: "필수정보입력",
						sequrityQuestion:
							"보안 질문 응답. 이 질문은 암호 분실 시 신원을 확인하고 암호를 복구하는 데 사용됩니다."
					},
					sequrityQuestionList: {
						list1: "10대 시절에 가장 친하게 지냈던 친구의 이름은 무엇입니까?",
						list2: "첫 애완동물의 이름은 무엇입니까?",
						list3: "처음 배운 요리는 무엇입니까?",
						list4: "영화관에서 처음으로 관람한 영화는 무엇입니까?",
						list5: "처음으로 비행기를 타고 방문한 곳은 어디입니까?",
						list6: "초등학교 또는 중학교 시절 가장 좋아했던 선생님의 성함은 무엇입니까?",
						list7: "꿈의 직업은 무엇입니까?",
						list8: "가장 좋아했던 동화책의 제목은 무엇입니까?",
						list9: "처음으로 소유했던 자동차의 모델명은 무엇입니까?",
						list10: "어린 시절의 별명은 무엇입니까?",
						list11: "학창 시절 가장 좋아했던 영화 배우 또는 영화 속 캐릭터는 누구입니까?",
						list12: "학창 시절 가장 좋아했던 밴드 또는 가수는 누구입니까?"
					},
					validation: {
						notAllPass: "가입 폼을 양식에 맞게 모두 입력해주세요"
					}
				},
				Complete: {}
			}
		},
		pages: {
			Article: {},
			Event: {
				h2: "UFC Fight Events",
				moreInfo: "경기 상세 정보",
				upcommingEvent: "예정 이벤트",
				pastEvent: "과거 이벤트"
			}
		}
	}
}

export default ko
