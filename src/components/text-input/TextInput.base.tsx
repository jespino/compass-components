import React from 'react';

import Grid, { Spacing, TSpacingTokensSymmetric } from '../../foundations/layout';
import Shape from '../../foundations/shape';
import Icon, { TIconSize } from '../icon';

import {
    DEFAULT_TEXT_INPUT_SIZE,
    DEFAULT_LEADING_ICON,
    DEFAULT_TRAILING_ICON,
} from './TextInput.constants';
import { PTextInput } from './TextInput.props';

const TextInputBase: React.FC<PTextInput> = ({
    label = 'Placeholder',
    size = DEFAULT_TEXT_INPUT_SIZE,
    leadingIcon = DEFAULT_LEADING_ICON,
    trailingIcon = DEFAULT_TRAILING_ICON,
    width,
    className,
}: PTextInput) => {
    let iconSize: TIconSize = 16;
    let height = 40;

    const spacing: TSpacingTokensSymmetric = {
        vertical: 0,
        horizontal: 125,
    };

    switch (size) {
        case 'lg':
            iconSize = 20;
            height = 48;
            spacing.horizontal = 150;
            break;
        case 'sm':
            iconSize = 12;
            height = 32;
            spacing.horizontal = 100;
            break;
        default:
    }

    return (
        <Shape
            borderRadius={4}
            width={width === 'full' ? '100%' : width}
            height={height}
            className={className}
        >
            <Grid
                row
                alignment={'center'}
                className={'container'}
                justify={'space-between'}
                padding={Spacing.symmetric(spacing)}
                flex={1}
            >
                {leadingIcon && <Icon glyph={leadingIcon} size={iconSize} />}
                <input className={'input'} placeholder={label} />
                {trailingIcon && <Icon glyph={trailingIcon} size={iconSize} />}
            </Grid>
        </Shape>
    );
};

export default TextInputBase;
