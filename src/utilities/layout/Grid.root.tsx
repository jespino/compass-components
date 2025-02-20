import styled, { css } from 'styled-components';

import { Utils } from '../../shared';
import { parseSpacing } from '../spacing';

import { PGridRoot } from './Grid.props';

const GridRoot = styled.div<PGridRoot>(
    ({ flex, wrap, row, justify, alignment, padding, margin, width, height }: PGridRoot) => css`
        display: flex;
        flex: ${flex};
        flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
        flex-direction: ${row ? 'row' : 'column'};
        align-items: ${alignment};
        justify-content: ${justify};
        padding: ${padding ? parseSpacing(padding) : '0'};
        margin: ${margin ? parseSpacing(margin) : '0'};
        ${(Utils.isNumber(width) || Utils.isString(width)) &&
        css`
            max-width: ${Utils.getPxValue(width)};
        `}
        ${(Utils.isNumber(height) || Utils.isString(height)) &&
        css`
            max-height: ${Utils.getPxValue(height)};
        `}
        background: transparent;
    `
);

export default GridRoot;
