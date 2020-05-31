export const breakpoint = {
	mobileS: 320,
	mobileM: 375,
	mobleL: 425,
	tablet: 768,
	laptop: 1024,
	laptopL: 1440,
	desktop: 2560
}

export const device = {
	mobileS: `(min-width: ${breakpoint.mobileS}px)`,
	mobileM: `(min-width: ${breakpoint.mobileM}px)`,
	mobleL: `(min-width: ${breakpoint.mobleL}px)`,
	mobileOnly: `(min-width: ${breakpoint.mobileS}px) and (max-width: ${breakpoint.tablet - 1}px)`,
	tablet: `(min-width: ${breakpoint.tablet}px)`,
	tabletOnly: `(min-width: ${breakpoint.tablet}px) and (max-width: ${breakpoint.laptop - 1}px)`,
	mobileTabletOnly: `(max-width: ${breakpoint.laptop - 1}px)`,
	laptop: `(min-width: ${breakpoint.laptop}px)`,
	laptopL: `(min-width: ${breakpoint.laptopL}px)`,
	desktop: `(min-width: ${breakpoint.desktop}px)`
}
