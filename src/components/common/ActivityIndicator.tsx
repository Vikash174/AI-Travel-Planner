import React, { useEffect } from "react";
import Animated, {
  Easing,
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "@rneui/themed";
import { Circle, Svg } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function ActivityIndicator({
  size = 30,
  thickness = 4,
  color: _color,
}: {
  size?: number;
  thickness?: number;
  color?: string;
}) {
  const { theme } = useTheme();
  const color = _color || theme.colors.primary;
  const sharedValue = useSharedValue(0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    sharedValue.value = withRepeat(
      withTiming(1, { easing: Easing.linear, duration: 1400 }),
      0,
      false
    );
  }, []);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: interpolate(
        sharedValue.value,
        [0, 0.5, 0.9, 1],
        [0, -circumference / Math.PI, (-circumference * 5) / 6, -circumference]
      ),
      strokeDasharray: [
        interpolate(
          sharedValue.value,
          [0, 0.5, 1],
          [1, circumference / 2, circumference / 2]
        ),
        circumference,
      ],
    };
  });

  const rotationStyle = useAnimatedProps(() => ({
    transform: [{ rotate: `${sharedValue.value * 360}deg` }],
  }));

  return (
    <Animated.View style={[{ width: size, height: size }, rotationStyle]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={thickness}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={(circumference * 3) / 4}
          animatedProps={animatedProps}
        />
      </Svg>
    </Animated.View>
  );
}
