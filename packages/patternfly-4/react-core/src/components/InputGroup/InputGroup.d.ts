import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils'

export interface InputGroupProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
    children: ReactNode;
}

declare const InputGroup: SFC<InputGroupProps>;

export default InputGroup;
