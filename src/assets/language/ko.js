const ko = {
	translation: {
		common: {
			ufc: "UFC",
			confirm: "확인",
			edit: "수정",
			moreInfo: "상세 정보",
			lightTheme: "라이트 테마",
			darkTheme: "다크 테마",
			commingSoon: "준비중입니다 :)",
			success: "성공",
			fail: "실패",
			win: "승리",
			lose: "패배",
			draw: "무승부",
			goBack: "뒤로 가기",
			active: "현역",
			account: "계정",
			logIn: "로그인",
			logOut: "로그아웃",
			signUp: "회원가입",
			myInfo: "내 정보",
			sns: {
				title: "SNS",
				facebook: "페이스북",
				instagram: "인스타그램",
				twitter: "트위터"
			},
			label: {
				statue: "statue",
				weightClass: "체급",
				hometown: "고향",
				gym: "체육관",
				age: "나이",
				height: "신장",
				weight: "무게",
				octagonDebut: "옥타곤 데뷔",
				reach: "리치",
				legReach: "다리 리치"
			},
			weightClass: {
				all: "모든 체급",
				fly: "플라이급",
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
			Default: {
				title: "리액트 포트폴리오",
				description: "구공찬, 프론트엔드 포트폴리오, 리액트",
				keywords: "웹, 웹 개발, 프론트엔드, 프론트엔드 개발, UI, 접근성",
				ogTitle: "리액트 포트폴리오",
				ogDescription:
					"CRA를 통해 만든 UFC 홈페이지입니다. 이 사이트는 개인 포트폴리오 용도이며, 상업적인 의도가 없습니다.",
				twitterTitle: "리액트 포트폴리오"
			},
			Ranking: {
				title: "랭킹",
				description: "UFC 체급별 랭킹",
				keywords: "UFC, UFC ranking, UFC 랭킹",
				ogTitle: "UFC 랭킹",
				ogDescription: "UFC 랭킹 정보를 제공하는 페이지",
				twitterTitle: "UFC 랭킹"
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
					ranking: "랭킹",
					live: "라이브",
					shop: "상점",
					support: "고객지원",
					my: "내 정보",
					login: "로그인"
				}
			},
			AppHeader: {},
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
			Main: {
				h3: "주요 작업 내용 정리",
				githubLink:
					"프로젝트 코드는 <0 href='https://github.com/90chanho/ufc' target='_blank' rel='noreferrer noopener' className='highlight'> GitHub</0>에서 확인 할 수 있습니다.",
				contents: {
					structure: {
						title: "프로젝트 구성",
						desc1: "CRA를 사용하여 기본 프로젝트 구조 생성",
						desc2: "상태 관리 라이브러리(redux)를 사용하여 상태 관리",
						desc3:
							"styled-components(style in javascript)를 사용하여 스타일링하였고 가독성을 위해 스타일링 부분을 별도의 파일로 분리(ex. Component.js와 ComponentStyled.js)",
						desc4:
							"프로젝트 사용된 데이터는 임의로 데이터를 생성하고 firebase의 Realtime Database를 사용하여 데이터 통신 기능 구현",
						desc5:
							"테마(light, dark) 스타일링. 첫 방문시 테마 선택 모달창 제공하며, 선택 값은 쿠키 데이터로 7일간 저장, 이후 GNB에서 테마 선택 가능 기본값은 쿠키가 없을 경우 디바이스가 현재 dark-Mode인지 감지하여 light / dark 구분하여 적용",
						desc6:
							"다국어 기능 구현(한/영, 영작은 번역기로 번역), 기본 값은 navigator.language값을 가져와 적용"
					},
					packages: {
						title: "패키지 사용",
						desc1:
							"<0 className='highlight'>styled-components</0>를 사용하여 각 컴포넌트 스타일링 및 theme 스타일링 적용",
						desc2: "<0 className='highlight'>react-router</0>를 사용하여 router 설정",
						desc3: "<0 className='highlight'>redux</0>를 사용하여 상태 데이터 관리",
						desc4: "<0 className='highlight'>i18n, react-i18next</0>를 사용하여 다국어 적용",
						desc5: "<0 className='highlight'>react-helmet</0>를 사용하여 meta 데이터 적용",
						desc6:
							"<0 className='highlight'>antd, @ant-degisn/icons</0>를 사용하여 일부 스타일 컴포넌트 적용",
						desc7: "<0 className='highlight'>react-cookie</0>를 사용한 쿠키값 설정"
					},
					pages: {
						title: "작업 페이지 목록",
						desc1: "메인 페이지 : 프로젝트 간단 정보",
						desc2: "이벤트 페이지 : UFC 이벤트(경기) 정보",
						desc3: "선수 페이지 : UFC 선수 정보",
						desc4: "랭킹 페이지 : UFC 체급별 랭킹",
						desc5: "로그인 : 로그인 기능 구현",
						desc6: "회원가입 : 회원가입 기능 구현",
						desc7: "내 정보 : 회원정보 확인 및 수정",
						desc8: "404 페이지 : Page Not Found 페이지 제공"
					},
					eventPage: {
						title: "이벤트 페이지",
						desc1: "이벤트 데이터를 fetch하여 리스트 렌더링",
						desc2: "오늘 날짜를 기준으로 예정 / 과거 이벤트를 필터링"
					},
					fighterPage: {
						title: "선수 페이지",
						desc1: "선수 데이터를 fetch하여 이름순으로 리스트 렌더링",
						desc2: "select요소를 통해 체급별로 필터링하여 리스트 렌더링 기능 구현",
						desc3: "현재 리스트 렌더링 된 선수들 목록 안에서 선수 이름을 통한 검색 기능 구현",
						desc4: "리스트 렌더링 된 선수의 프로필 보기를 클릭하면 선수 상세 프로필 페이지로 이동",
						desc5: "Discus 서비스를 적용하여 선수 상세 프로필 페이지마다 코멘트 기능 구현"
					},
					rankingPage: {
						title: "랭킹 페이지",
						desc1: "선수 데이터를 fetch하여 그 중 체급별 / 랭킹순으로 리스트 렌더링",
						desc2:
							"선수 데이터의 현재 랭킹 과거 랭킹을 비교하여 상승 / 하락 / 랭킹 진입 / 변화 없음 내용을 제공",
						desc3: "선수 이름을 클릭하면 선수 상세 프로필 페이지로 이동"
					},
					logInPage: {
						title: "계정 - 로그인",
						desc1:
							"로그인 기능 구현을 위해 임의로 유저 데이터를 작업하였고, 입력 값과 비교하여 일치하면 로그인 되도록 작업",
						desc2: "공통 Input 컴포넌트를 만들고 이를 사용하여 form 구현",
						desc3: "validation 기능 구현(빈 값, 유효하지 않는 계정)",
						desc4:
							"로그인 성공시 새로고침 하여도 로그인을 유지하는 기능을 위해 localStorage을 사용. 10분 뒤 로그아웃 되도록 설정"
					},
					signUpPage: {
						title: "계정 - 회원가입",
						desc1: "공통 Input 컴포넌트를 만들고 이를 사용하여 form 구현",
						desc2: "validation 기능 구현(빈 값, 이메일 폼, 패스워드 규칙, 패스워드 확인 등)",
						desc3: "가입 시 회원을 구분할 수 있도록 uid(unique id)를 생성"
					},
					myPage: {
						title: "계정 - 내 정보",
						desc1:
							"localStorage에 저장된 uid를 통해 해당 uid와 동일한 유저의 정보를 가져와 렌더링(* 기능 구현을 위한 임시적인 방법입니다.)",
						desc2: "공통 Input 컴포넌트를 만들고 이를 사용하여 form 구현",
						desc3: "validation 기능 구현(빈 값, 이메일 폼 등)"
					}
				}
			},
			EventItem: {
				fightPass: "FIGHT <0>NIGHT</0>"
			},
			FighterDetail: {
				comment: {
					title: "팬들의 목소리가 먼저입니다.",
					desc: "좋아하는 선수, 보고 싶은 매치 업은? 여기에 코멘트 남겨주세요!",
					button: {
						show: "댓글 보이기",
						hide: "댓글 숨기기"
					}
				}
			},
			FighterList: {
				profile: {
					button: "프로필 보기"
				}
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
					sequrityAnswer1: "질문 답변1",
					sequrityAnswer2: "질문 답변2"
				},
				toolTip: {
					account: "계정은 이메일 형식으로 입력해주세요.",
					password:
						"비밀번호 설정 규칙<0></0>1. 비밀번호는 6~20자의 영문 대소문자를 입력해주세요.<0></0> 2. 숫자와 특수 문자를 각각 1개 이상 포함해야 합니다."
				},
				validation: {
					empty: "{{ labelText }}을(를) 입력해주세요.",
					emailForm: "이메일 형식에 맞게 입력해주세요.",
					passwordInValidationText: "암호에 이메일에 입력한 값이 포함되어서는 안 됩니다.",
					passwordRules: "비밀번호 생성 규칙에 맞게 입력해주세요.",
					notSamePassword: "입력한 암호와 일치하지 않습니다."
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
						notAllPass: {
							title: "회원가입 실패",
							desc: "가입 폼을 양식에 맞게 모두 입력해주세요 (이 메세지는 5초 후에 사라집니다.)"
						}
					}
				},
				Complete: {}
			}
		},
		pages: {
			Ranking: {
				h2: "랭킹"
			},
			Event: {
				h2: "UFC Fight Events",
				moreInfo: "경기 상세 정보",
				upcommingEvent: "예정 이벤트",
				pastEvent: "과거 이벤트",
				noEvents: "예정된 이벤트가 없습니다"
			},
			Fighter: {
				h2: "UFC Fighters",
				searchPlaceholder: "선수 검색"
			},
			Live: {
				h2: "Live"
			},
			Login: {
				h2: "로그인",
				validation: {
					title: "로그인 실패",
					desc: "UFC 계정 또는 비밀번호가 유효하지 않습니다. (이 메세지는 5초 후에 사라집니다.)"
				},
				notAccount:
					"UFC 아이디가 없으신가요? 지금 생성하시고 원하는 UFC 이벤트 및 선수의 정보를 메일로 받아보세요."
			},
			My: {
				h2: "My page",
				welcome: "반갑습니다 <0></0><1></1>님.",
				formLegend: {
					accountInfo: "계정 정보",
					personalInfo: "신상 정보"
				},
				validation: {
					title: "정보 수정 실패",
					desc: "수정사항을 양식에 맞게 전부 입력해주세요. (이 메세지는 5초 후에 사라집니다.)"
				},
				edit: {
					success: "정보를 성공적으로 수정하였습니다."
				}
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
