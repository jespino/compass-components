import { TContainerElement, TInteractionElement } from '../../shared';

// TODO: maybe move the hard-coded ones to a separate union type (`TActionElement` maybe?)
type TShapeElement = TContainerElement | TInteractionElement;

type TShapeVariant = 'rectangle' | 'circle' | 'pill';

type TShapeBorderRadius = 0 | 2 | 4 | 8 | 12 | 16 | 20 | 24 | 'circle' | 'pill';

type TShapeElevationLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type TShapeElevationDefinition = {
    y: number;
    blur: number;
};

type TShapeElevationDefinitions = {
    [key in TShapeElevationLevel]: TShapeElevationDefinition;
};

export type {
    TShapeVariant,
    TShapeElement,
    TShapeBorderRadius,
    TShapeElevationLevel,
    TShapeElevationDefinition,
    TShapeElevationDefinitions,
};
