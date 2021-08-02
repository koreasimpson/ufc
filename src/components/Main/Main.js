import React, { Component } from "react"
import { Card, Col, Row } from "antd"
import { withTranslation, Trans } from "react-i18next"

import StyledWrapper from "./MainStyled"
import Layout from "components/Layout/Layout"
import AppHelmet from "components/AppHelmet/AppHelmet"
import * as languageData from "assets/language/ko"
import langdingBg from "assets/img/background_header.jpg"

class Main extends Component {
	setDescription = (contentLanguageData, contnetName) => {
		let DescriptionList = []
		for (let item in contentLanguageData) {
			if (item.includes("desc")) {
				DescriptionList.push(
					<li key={item}>
						<Trans
							i18nKey={`components.Main.contents.${contnetName}.${item}`}
							components={[<span></span>]}
						/>
					</li>
				)
			}
		}
		return DescriptionList
	}

	render() {
		const { t } = this.props
		const {
			structure,
			packages,
			pages,
			eventPage,
			fighterPage,
			rankingPage,
			logInPage,
			signUpPage,
			myPage
		} = languageData.default.translation.components.Main.contents
		return (
			<StyledWrapper>
				<AppHelmet />
				<h2 className="a11yHidden">
					<Trans i18nKey="components.AppMain.h2" />
				</h2>
				<Layout hasLanding={true}>
					<Layout.Landing
						backgroundImg={langdingBg}
						backgroundImgWidth="2000"
						backgroundImgHeight="1333">
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
					</Layout.Landing>
					<Layout.Content>
						<h3>
							<Trans i18nKey="components.Main.h3" />
						</h3>
						<p className="githubLink">
							<Trans
								i18nKey="components.Main.githubLink"
								components={[
									<a
										href="https://github.com/koreasimpson/ufc"
										target="_blank"
										rel="noreferrer noopener"
										className="highlight">
										{" "}
									</a>
								]}
							/>
						</p>
						<Row gutter={[16, 16]}>
							<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
								<Card title={t("components.Main.contents.structure.title")} bordered={true}>
									<ul>{this.setDescription(structure, "structure")}</ul>
								</Card>
							</Col>
							<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
								<Card title={t("components.Main.contents.packages.title")} bordered={true}>
									<ul>{this.setDescription(packages, "packages")}</ul>
								</Card>
							</Col>
							<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
								<Card title={t("components.Main.contents.pages.title")} bordered={true}>
									<ul>{this.setDescription(pages, "pages")}</ul>
								</Card>
							</Col>
							<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
								<Card title={t("components.Main.contents.eventPage.title")} bordered={true}>
									<ul>{this.setDescription(eventPage, "eventPage")}</ul>
								</Card>
							</Col>
							<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
								<Card title={t("components.Main.contents.fighterPage.title")} bordered={true}>
									<ul>{this.setDescription(fighterPage, "fighterPage")}</ul>
								</Card>
							</Col>
							<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
								<Card title={t("components.Main.contents.rankingPage.title")} bordered={true}>
									<ul>{this.setDescription(rankingPage, "rankingPage")}</ul>
								</Card>
							</Col>
							<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
								<Card title={t("components.Main.contents.logInPage.title")} bordered={true}>
									<ul>{this.setDescription(logInPage, "logInPage")}</ul>
								</Card>
							</Col>
							<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
								<Card title={t("components.Main.contents.signUpPage.title")} bordered={true}>
									<ul>{this.setDescription(signUpPage, "signUpPage")}</ul>
								</Card>
							</Col>
							<Col span={24} lg={{ span: 12 }} xl={{ span: 8 }}>
								<Card title={t("components.Main.contents.myPage.title")} bordered={true}>
									<ul>{this.setDescription(myPage, "myPage")}</ul>
								</Card>
							</Col>
						</Row>
					</Layout.Content>
				</Layout>
			</StyledWrapper>
		)
	}
}

export default withTranslation()(Main)
