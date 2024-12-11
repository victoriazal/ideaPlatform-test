import Lottie from "lottie-react"

interface LottieAnimationProps {
	animationData: unknown
	loop: boolean
	onComplete?: () => void
	width?: string
	height?: string
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
	animationData,
	loop,
	onComplete,
	width = '100%',
	height = '100%'
}) => {
	return (
		<Lottie
		width={width}
		height={height}
			onComplete={onComplete}
			animationData={animationData}
			loop={loop}
		/>
	)
}

export default LottieAnimation
