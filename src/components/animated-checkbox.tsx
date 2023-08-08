import React, { useEffect } from "react";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";

import { interpolate } from "react-native-reanimated";

import Svg, { Path, Defs, ClipPath, G } from "react-native-svg";

const MARGIN = 10;
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;
const checkMarkPath = "M8 32.5C18 39 26 47 26 47C26 47 33 28 63.5 4";
const outlineBoxPath =
  "M24 0.5H40C48.5809 0.5 54.4147 2.18067 58.117 5.88299C61.8193 9.58532 63.5 15.4191 63.5 24V40C63.5 48.5809 61.8193 54.4147 58.117 58.117C54.4147 61.8193 48.5809 63.5 40 63.5H24C15.4191 63.5 9.58532 61.8193 5.88299 58.117C2.18067 54.4147 0.5 48.5809 0.5 40V24C0.5 15.4191 2.18067 9.58532 5.88299 5.88299C9.58532 2.18067 15.4191 0.5 24 0.5Z";

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Props {
  checked?: boolean;
  highlightColor: string;
  checkmarkColor: string;
  boxOutlineColor: string;
}

const AnimatedCheckBox = (props: Props) => {
  const { checked, checkmarkColor, highlightColor, boxOutlineColor } = props;

  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(checked ? 1 : 0, {
      duration: checked ? 300 : 100,
      easing: Easing.linear,
    });
  }, [checked]);

  const animatedBoxProps = useAnimatedProps(
    () => ({
      stroke: interpolateColor(
        interpolate(progress.value, [0, 1], [0, 1]), 
        [0, 1],
        [boxOutlineColor, highlightColor]
      ),
      fill: interpolateColor(
        interpolate(progress.value, [0, 1], [0, 1]), 
        [0, 1],
        [checkmarkColor, highlightColor]
      ),
    }),
    [highlightColor, boxOutlineColor, checkmarkColor]
  );

  return (
    <Svg
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(" ")}
    >
      <Defs>
        <ClipPath id="clipPath">
          <Path
            fill="white"
            stroke="gray"
            strokeLinejoin="round"
            strokeLinecap="round"
            d={outlineBoxPath}
          />
        </ClipPath>
      </Defs>
      <AnimatedPath
        animatedProps={animatedBoxProps}
        d={outlineBoxPath}
        strokeWidth={7}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <G clipPath="url(#clipPath)"></G>
    </Svg>
  );
};

export default AnimatedCheckBox;
