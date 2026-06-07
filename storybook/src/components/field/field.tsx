import { createContext, useContext, useId } from 'react';
import type { HTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import { classNames } from '../../utilities/class-names';
import styles from './field.module.css';

export type FieldStatus = 'default' | 'error' | 'success';

type FieldContextValue = {
    controlId: string;
    descriptionId?: string;
    messageId?: string;
    status: FieldStatus;
    disabled: boolean;
};

const FieldContext = createContext<FieldContextValue | null>(null);

export type FieldProps = HTMLAttributes<HTMLDivElement> & {
    controlId?: string;
    status?: FieldStatus;
    disabled?: boolean;
    hasValue?: boolean;
    children: ReactNode;
};

export const Field = ({
    controlId,
    status = 'default',
    disabled = false,
    hasValue = false,
    className,
    children,
    ...props
}: FieldProps) => {
    const generatedId = useId();
    const id = controlId ?? generatedId;
    const context = {
        controlId: id,
        descriptionId: `${id}-description`,
        messageId: `${id}-message`,
        status,
        disabled,
    } satisfies FieldContextValue;

    return (
        <FieldContext.Provider value={context}>
            <div
                className={classNames(styles.field, className)}
                data-disabled={disabled || undefined}
                data-filled={hasValue || undefined}
                data-status={status}
                {...props}
            >
                {children}
            </div>
        </FieldContext.Provider>
    );
};

export const FieldLabel = ({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) => {
    const context = useFieldContext();

    return (
        <label
            className={classNames(styles.label, className)}
            htmlFor={context.controlId}
            {...props}
        />
    );
};

export const FieldDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
    const context = useFieldContext();

    return (
        <p
            className={classNames(styles.description, className)}
            id={context.descriptionId}
            {...props}
        />
    );
};

export const FieldMessage = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
    const context = useFieldContext();

    return (
        <p
            className={classNames(styles.message, className)}
            id={context.messageId}
            role={context.status === 'error' ? 'alert' : undefined}
            {...props}
        />
    );
};

export const useFieldIds = () => useFieldContext();

const useFieldContext = () => {
    const context = useContext(FieldContext);

    if (!context) {
        throw new Error('Field components must be rendered inside Field.');
    }

    return context;
};
