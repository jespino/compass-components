import React from 'react';

import Heading from '../../components/heading';
import Text from '../../components/text';
import Grid from '../../utilities/layout';
import Spacing from '../../utilities/spacing';
import Shape from '../shape';
import { convertToRgb, rgbToHex, rgbToHsl } from '../../shared';

type PSwatch = {
    color: string;
    shade: number;
    colorName?: string;
    variant?: 'noText' | 'bottom' | 'right';
};

const Swatch: React.FC<PSwatch> = ({
    color,
    shade,
    colorName,
    variant = 'right',
}: PSwatch): JSX.Element => {
    const rgbString = convertToRgb(color);
    const hexString = rgbToHex(rgbString);
    const hslString = rgbToHsl(rgbString);
    const isRow = variant === 'right';
    const hasText = variant !== 'noText';

    return (
        <Grid
            row={isRow}
            alignment={'stretch'}
            padding={isRow ? Spacing.symmetric({ vertical: 50 }) : Spacing.all(50)}
            flex={0}
        >
            <Grid alignment={'flex-end'}>
                <Shape
                    className={'swatch_color'}
                    radius={4}
                    elevation={1}
                    elevationOnHover={3}
                    width={140}
                    height={100}
                    backgroundColor={rgbString}
                />
            </Grid>
            {hasText && (
                <Grid flex={2} padding={Spacing.trbl({ top: 50, right: 0, bottom: 50, left: 75 })}>
                    <Grid>
                        <Heading element={'h6'} size={200} margin={isRow ? 'none' : 'bottom'}>
                            {`${colorName || ''} ${shade}`.trim()}
                        </Heading>
                    </Grid>
                    <Grid>
                        <Text element={'p'} size={75} margin={'none'} color={'secondary'}>
                            {hexString.toUpperCase?.()}
                        </Text>
                        <Text element={'p'} size={75} margin={'none'} color={'secondary'}>
                            {rgbString}
                        </Text>
                        <Text element={'p'} size={75} margin={'none'} color={'secondary'}>
                            {hslString}
                        </Text>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default Swatch;
