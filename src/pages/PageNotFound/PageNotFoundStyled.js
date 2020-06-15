import styled from "styled-components"

const StyledWrapper = styled.main`
	$width: 200;
	$steps: 30;
	$time: 5s;

	&#pageNotFound {
		overflow: hidden;
		position: fixed;
		z-index: 10000;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: #060314;
		color: #fff;
		font-family: "Open Sans", sans-serif;
		text-align: center;

		.wrapper {
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			height: 100%;
		}

		.hImg {
			display: block;
			width: 9rem;
			height: auto;
			margin: auto;
			@media (min-width: 640px) {
				width: 9rem;
				display: inline-block;
				margin-right: 20px;
			}
		}

		.h404 {
			font-size: 12rem;
			font-weight: 600;
			display: inline-block;
			margin: 0;
		}

		.hButton {
			cursor: pointer;
			margin-top: 10px;
			border-radius: 5px;
			border: 0;
			padding: 0.8rem 1.1rem;
			font-size: 2em;
			background: white;
			transition: all 0.2s;
			animation: boom 0.6s linear infinite alternate-reverse;

			&:hover {
				transform: scale(0.989);
				background: #f4f4f4;
			}
		}

		a[href] {
			position: fixed;
			top: 30px;
			right: 30px;
			color: #ddd;
			text-decoration: none;
			transition: all 0.3s ease;

			&:hover {
				color: #1080ff;
			}
		}

		.glitch {
			color: #fff;
			position: relative;
			font-size: #{$width}px;
			width: #{$width * 2}px;

			&:before,
			&:after {
				content: attr(data-text);
				position: absolute;
				top: 0;
				left: -2px;
				color: #fff;
				background: #060314;
				overflow: hidden;
				clip: rect(0, 1200px, 0, 0);
				animation: noise-anim-2 $time infinite linear alternate-reverse;
			}
			&:before {
				text-shadow: 3px 3px 0 #ff1100;
			}
			&:after {
				text-shadow: -3px -3px 0 #0099ff;
			}
		}
	}

	i {
		font-style: normal;
	}

	@keyframes boom {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.03);
		}
	}

	@keyframes noise-anim {
		@for $i from 0 through $steps {
			#{percentage($i*(1/$steps))} {
				clip: rect(random($width) + px, 9999px, random($width) + px, 0);
			}
		}
	}

	@keyframes noise-anim-2 {
		@for $i from 0 through $steps {
			#{percentage($i*(1/$steps))} {
				clip: rect(random($width) + px, 9999px, random($width) + px, 0);
			}
		}
	}
`

export default StyledWrapper
