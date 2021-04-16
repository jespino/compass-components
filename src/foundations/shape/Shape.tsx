import styled from 'styled-components';
import { ThemedStyledProps } from 'styled-components/ts3.6';

import { TTheme } from '../theme-provider/themes/theme.types';
import { SharedUtils } from '../../shared';

import PShape from './Shape.props';
import {
    DEFAULT_SHAPE_BORDER_RADIUS,
    DEFAULT_SHAPE_ELEVATION_LEVEL,
    SHAPE_ELEVATION_DEFINITIONS,
} from './Shape.constants';
import { TShapeBorderRadius, TShapeElevationLevel } from './Shape.types';

const getPxValue = (value: string | number): string =>
    typeof value === 'number' ? `${value}px` : getPercentageValue(value);

const getPercentageValue = (value: string): string => (value.endsWith('%') ? value : '');

const getShapeDimensions = (props: PShape): string => {
    if (props.borderRadius === 'circle' && (!props.width || typeof props.width !== 'number')) {
        throw new TypeError(
            'SHAPE: When choosing `circle` as value for `borderRadius` the width needs to be a number'
        );
    }

    if (props.borderRadius === 'circle' && props.width) {
        return `width: ${getPxValue(props.width)}; height: ${getPxValue(props.width)};`;
    }

    const width = props.width ? `width: ${getPxValue(props.width)};` : '';
    const height = props.height ? `height: ${getPxValue(props.height)};` : '';

    return width + height;
};

const getBorderRadius = (radius: TShapeBorderRadius): string => {
    if (SharedUtils.isString(radius)) {
        return radius === 'circle' ? '50%' : '10000px';
    }

    return `${radius}px`;
};

const getElevation = (elevation: TShapeElevationLevel, opacity: number): string =>
    `0 ${SHAPE_ELEVATION_DEFINITIONS[elevation].y}px ${SHAPE_ELEVATION_DEFINITIONS[elevation].blur}px 0 rgba(0,0,0,${opacity})`;

const Shape = styled.div
    // ignoring the className property prevents duplicate classes to be added to the HTML element
    .attrs(
        ({
            component,
            borderRadius,
            elevation,
            elevationOnHover,
            className: ignoreClassName,
            ...rest
        }: PShape) => ({
            as: component,
            borderRadius: borderRadius || DEFAULT_SHAPE_BORDER_RADIUS,
            elevation: elevation || DEFAULT_SHAPE_ELEVATION_LEVEL,
            elevationOnHover: elevationOnHover || DEFAULT_SHAPE_ELEVATION_LEVEL,
            ...rest,
        })
    )
    .withConfig({
        shouldForwardProp: SharedUtils.forwardProperties(),
    })<ThemedStyledProps<PShape, TTheme>>`
    display: flex;
    flex: ${(props): string => (props.width ? 'initial' : 'auto')};

    border-radius: ${(props): string => getBorderRadius(props.borderRadius)};
    background: ${(props): string => props.theme.background.shape};

    ${getShapeDimensions};
    
    z-index: ${(props): number => props.elevation || 0};
    box-shadow: ${(props): string => getElevation(props.elevation, props.theme.elevationOpacity)};
    
    &:hover {
        box-shadow: ${(props): string =>
            getElevation(props.elevationOnHover, props.theme.elevationOpacity)};
    }
    
    transition: box-shadow 500ms ease-in-out;
`;

export default Shape;
