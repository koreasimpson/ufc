const en = {
	translation: {
		common: {
			ufc: "UFC",
			confirm: "Confirm",
			edit: "Edit",
			moreInfo: "More Info",
			lightTheme: "Light Theme",
			darkTheme: "Dark Theme",
			commingSoon: "Comming soon :)",
			success: "Success",
			fail: "Fail",
			win: "Win",
			lose: "Lose",
			draw: "Draw",
			goBack: "Go back",
			active: "Active",
			account: "Account",
			logIn: "Log in",
			logOut: "Log out",
			signUp: "Sign up",
			myInfo: "My Info",
			sns: {
				title: "SNS",
				facebook: "Facebook",
				instagram: "Instagram",
				twitter: "Twitter"
			},
			label: {
				statue: "Statue",
				weightClass: "Weight class",
				hometown: "Hometown",
				gym: "GYM",
				age: "Age",
				height: "Height",
				weight: "Weight",
				octagonDebut: "Octagon debut",
				reach: "Reach",
				legReach: "Leg reach"
			},
			weightClass: {
				all: "All",
				fly: "Flyweight",
				bantam: "Bantamweight",
				feather: "Featherweight",
				light: "Lightweight",
				welter: "Welterweight",
				middle: "Middleweight",
				lightheavy: "Lightheavyweight",
				heavy: "Heavyweight"
			}
		},
		modal: {
			theme: {
				header: "Page theme settings"
			}
		},
		meta: {
			Default: {
				title: "React Portfolio",
				description: "구공찬, 프론트엔드 포트폴리오, 리액트",
				keywords: "웹, 웹 개발, 프론트엔드, 프론트엔드 개발, UI, 접근성",
				ogTitle: "리액트 포트폴리오",
				ogDescription:
					"This is the UFC homepage created through CRA. This site is for personal portfolio purposes and has no commercial intent.",
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
					theSport: "The sport",
					community: "Community",
					hire: "Hire",
					store: "Store",
					press: "Press credentials",
					help: "HELP",
					fightpass: "Fight pass faq",
					raw: "Raw",
					article: "Article",
					privacy: "Privacy",
					ad: "Ad choices"
				},
				copyright: "Copyright © all-time 구공찬"
			},
			AppGnb: {
				list: {
					event: "Event",
					fighter: "Fighter",
					ranking: "Ranking",
					live: "Live",
					shop: "Shop",
					support: "Support",
					my: "My",
					login: "Log in"
				}
			},
			AppHeader: {},
			AppMain: {
				h2: "Main page",
				desc: '"UFC Homepage Created with CRA"',
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
				h3: "Major worked Contents",
				githubLink: "The project code can be seen in <0> GitHub</0>.",
				contents: {
					structure: {
						title: "Project Configuration",
						desc1: "Create default project structure using CRA",
						desc2: "Managing state using the state management library(redux)",
						desc3:
							"styled using styled-components (style in javascript) and separated styling parts into separate files for readability (ex. Component.js and ComponentStyled.js)",
						desc4:
							"The data used in the project randomly generates data and implements data communication using the Realtime Database in the firebase.",
						desc5:
							"A theme (light, dark) styling. Provides a theme selection modal window for the first visit. The selection value is saved as cookie data for 7 days. Subsequently, the GNB can select the theme. If there is no cookie, the default value is applied separately by detecting whether the device is currently dark-mode.",
						desc6:
							"Implement multilingual functions (Korean/English, translated into English translators), obtain and apply the default value of Navigator.language."
					},
					packages: {
						title: "Packages Used",
						desc1:
							"Use <0 className='highlight'>styled-components</0> to style each component and apply theme styling",
						desc2: "Set the router using <0 className='highlight'>react-router</0>",
						desc3: "Use <0 className='highlight'>redux</0> to manage state data",
						desc4: "<0 className='highlight'>i18n, true-i18next</0> to apply multilingualism",
						desc5: "Apply meta data using <0 className='highlight'>react-helmet</0>",
						desc6:
							"Apply some style components using <0 className='highlight'>antd, @ant-deginist/icons</0>",
						desc7: "Set the cookie value using <0 className='Highlight'rereact-cookie</0>"
					},
					pages: {
						title: "List of pages worked",
						desc1: "Main page : Project simple information",
						desc2: "Event page : UFC event (competition) information",
						desc3: "Fighter page : UFC player information",
						desc4: "Ranking page : Ranking by UFC weight class",
						desc5: "Login page : Implementing the login function",
						desc6: "Sign up page : Implementing membership function",
						desc7: "My page: Checking and Modifying Member Information",
						desc8: "404 page : Page Not Found Page provided"
					},
					eventPage: {
						title: "Event page",
						desc1: "Render list by fetch event data",
						desc2: "Filter scheduled past events based on today's date"
					},
					fighterPage: {
						title: "Fighter page",
						desc1: "Render list by name by fetch player data",
						desc2:
							"Filter by weight class through select element to implement list rendering function",
						desc3:
							"Implementing a search function through the player's name within the current list of players rendered.						",
						desc4: "Click View List Render's Profile to go to the player's detailed profile page",
						desc5:
							"Apply Discus service to implement comment function for each player's detailed profile page"
					},
					rankingPage: {
						title: "Ranking page",
						desc1: "Fetch player data and render the list in order of weight / ranking",
						desc2:
							"Current Ranking Current Ranking Comparing Past Ranking of Competitor Data to Rise / Fall / Ranking Entry / No Change",
						desc3: "Click on the player's name to go to the player's detailed profile page"
					},
					logInPage: {
						title: "Log-in page",
						desc1:
							"User data was worked randomly to implement the login function, and compared to the input value, log in if it matches",
						desc2: "Create and use common Input components to implement form",
						desc3: "Implement validation features (empty value, invalid account)",
						desc4:
							"Use localStorage for the ability to stay logged in after a successful login. Set to log out after 10 minutes"
					},
					signUpPage: {
						title: "Sign-up page",
						desc1: "Create and use common Input components to implement form",
						desc2:
							"Implement validation features (empty values, email forms, password rules, password verification, etc.)",
						desc3: "Create an uid (unique id) to distinguish members when joining"
					},
					myPage: {
						title: "Myy page",
						desc1:
							"Get information from the same user as that uid through the uid stored in localStorage and render it (*a temporary way to implement the feature)",
						desc2: "Create and use common Input components to implement form",
						desc3: "Implement validation features (empty values, email forms, etc.)"
					}
				}
			},
			EventItem: {
				fightPass: "FIGHT <0>NIGHT</0>"
			},
			FighterDetail: {
				comment: {
					title: "Fans' voices come first.",
					desc: "Favorite player, what match up do you want to see? Please leave a comment here!"
				}
			},
			FighterList: {
				profile: {
					button: "View Profile"
				}
			},
			InputField: {
				labelText: {
					account: "Account",
					email: "Email",
					password: "Password",
					passwordConfirm: "Password confirm",
					phone: "Phone",
					firstName: "First name",
					familyName: "Family name",
					sequrityAnswer1: "sequrity answer 1",
					sequrityAnswer2: "sequrity answer 2"
				},
				toolTip: {
					account: "Please enter the account in email format.",
					password:
						"Password setting rule <0></0>1. Please enter 6 to 20 English case characters for password. <0></0> 2. It must contain at least one number and one special character, respectively."
				},
				validation: {
					empty: "Enter {{ labelText }}.",
					emailForm: "Please enter it according to the email format.",
					passwordInValidationText: "Password must not contain the values entered in the email.",
					passwordRules: "Please enter according to the password generation rule.",
					notSamePassword: "The password you entered does not match."
				}
			},
			SignUp: {
				Form: {
					h2: "Sign up",
					desc: "Create a UFC account to receive regular news from the player you want.",
					legend: {
						required: "Required information input",
						sequrityQuestion:
							"Security Question Answer. This question is used to identify and recover passwords if they are lost."
					},
					sequrityQuestionList: {
						list1: "What was the name of your best friend in your teenage years?",
						list2: "What's the name of your first pet?",
						list3: "What was the first cookery you learned?",
						list4: "What was the first movie you watched in the movie theater?",
						list5: "Where was the first place you visited by airplane?",
						list6: "What was your favorite name when you were in elementary or middle school?",
						list7: "What is your dream job?",
						list8: "What was the title of your most favorite fairy tale?",
						list9: "What was the model name of the first car you owned?",
						list10: "What was your nickname during your childhood?",
						list11: "Who was your favorite movie actor or movie character in your school days?",
						list12: "Who was your favorite band or singer in school?"
					},
					validation: {
						notAllPass: {
							title: "Failed to sign up for membership",
							desc:
								"Please fill in all the subscription forms according to the form (this message will disappear in 5 seconds)."
						}
					}
				},
				Complete: {}
			}
		},
		pages: {
			Ranking: {
				h2: "ATHLETE RANKINGS"
			},
			Event: {
				h2: "UFC Fight Events",
				moreInfo: "Details",
				upcommingEvent: "Upcomming",
				pastEvent: "Past",
				noEvents: "There are no scheduled events."
			},
			Fighter: {
				h2: "UFC Fighters",
				searchPlaceholder: "Player search",
				playerFound: "<0></0> players found",
				notFound: "There are no palyers with that condition."
			},
			Live: {
				h2: "Live"
			},
			Login: {
				h2: "Login",
				validation: {
					title: "Login Failed",
					desc:
						"The UFC account or password is not valid. (This message will disappear in 5 seconds.)"
				},
				notAccount:
					"Do you have a UFC ID? Create it now and receive the information of the UFC event and player you want by mail.",
				success: "Login successful."
			},
			My: {
				h2: "My page",
				welcome: "Nice to meet you, <0></0><1></1>.",
				formLegend: {
					accountInfo: "Account info",
					personalInfo: "Personal info"
				},
				validation: {
					title: "Failed to modify information",
					desc:
						"Please enter all the modifications according to the form. (This message will disappear in 5 seconds.)"
				},
				edit: {
					success: "Modify information successful."
				}
			},
			PrivacyPolicy: {
				h2: "Privacy Policy"
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

export default en
