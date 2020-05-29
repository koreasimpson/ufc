const ko = {
	translation: {
		common: {
			ufc: "UFC",
			confirm: "확인",
			moreInfo: "상세 정보",
			lightTheme: "라이트 테마",
			darkTheme: "다크 테마",
			commingSoon: "준비중입니다 :)",
			success: "성공",
			fail: "실패",
			weightClass: {
				all: "모든 체급",
				bantam: "밴텀급",
				feather: "페더급",
				light: "라이트급",
				welter: "웰터급",
				middle: "미들급",
				lightheavy: "라이트헤비급",
				heavy: "헤비급"
			}
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
				ogTitle: "UFC 기사",
				ogDescription: "UFC 소식을 제공하는 페이지",
				twitterTitle: "UFC 기사"
			},
			Event: {
				title: "이벤트",
				description: "UFC 이벤트 정보를 제공하는 페이지",
				keywords: "UFC, UFC event, UFC 이벤트",
				ogTitle: "UFC 이벤트",
				ogDescription: "UFC 이벤트 정보를 제공하는 페이지",
				twitterTitle: "UFC 이벤트"
			},
			Fighter: {
				title: "선수",
				description: "UFC 선수정보를 제공하는 페이지",
				keywords: "UFC, UFC fighters, UFC 선수, UFC 체급별 선수",
				ogTItle: "UFC 선수",
				ogDescription: "UFC 선수정보를 제공하는 페이지",
				twitterTitle: "UFC 선수"
			},
			Live: {
				title: "라이브",
				description: "UFC 경기 영상을 라이브로 제공하는 페이지",
				keywords: "UFC, UFC live, UFC 라이브",
				ogTitle: "UFC 라이브",
				ogDescription: "UFC 경기 영상을 라이브로 제공하는 페이지",
				twitterTitle: "UFC 라이브"
			},
			Shop: {
				title: "상점",
				description: "UFC 제품을 제공하는 페이지",
				keywords: "UFC, UFC product, UFC 상품, UFC 제품",
				ogTitle: "UFC 상품",
				ogDescription: "UFC 제품을 제공하는 페이지",
				twitterTitle: "UFC 상품"
			},
			Support: {
				title: "고객지원",
				description: "고객지원 페이지",
				keywords: "UFC, UFC support, UFC 고객지원",
				ogTitle: "UFC 고객지원",
				ogDescription: "고객지원 페이지",
				twitterTitle: "UFC 고객지원"
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
			Article: {
				h2: "비디오, 기사 및 갤러리"
			},
			Event: {
				h2: "UFC Fight Events",
				moreInfo: "경기 상세 정보",
				upcommingEvent: "예정 이벤트",
				pastEvent: "과거 이벤트"
			},
			Fighter: {
				h2: "UFC Fighters"
			},
			Live: {
				h2: "Live"
			},
			Login: {
				h2: "로그인",
				validation: "UFC 계정 또는 비밀번호가 유효하지 않습니다.",
				notAccount:
					"UFC 아이디가 없으신가요? 지금 생성하시고 원하는 UFC 이벤트 및 선수의 정보를 메일로 받아보세요."
			},
			My: {
				h2: "My page"
			},
			PrivacyPolicy: {
				h2: "개인정보 처리방침"
			},
			Shop: {
				h2: "Shop"
			},
			Support: {
				h2: "Support"
			}
		}
	}
}

export default ko
