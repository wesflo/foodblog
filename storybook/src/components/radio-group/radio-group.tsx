import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';

import styles from './radio-group.module.css';

export type RadioOption = {
    value: string;
    label: string;
    disabled?: boolean;
};

export type RadioGroupProps = {
    label: string;
    name?: string;
    options: RadioOption[];
    defaultValue?: string;
    disabled?: boolean;
    onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
};

export const RadioGroup = ({
    label,
    name,
    options,
    defaultValue,
    disabled = false,
    onChange,
}: RadioGroupProps) => {
    const generatedName = useId();
    const groupName = name ?? generatedName;

    return (
        <fieldset className={styles.group} disabled={disabled}>
            <legend className={styles.legend}>{label}</legend>
            <div className={styles.options}>
                {options.map((option) => (
                    <label
                        className={styles.option}
                        data-disabled={disabled || option.disabled || undefined}
                        key={option.value}
                    >
                        <input
                            className={styles.input}
                            defaultChecked={defaultValue === option.value}
                            disabled={disabled || option.disabled}
                            name={groupName}
                            onChange={onChange}
                            type="radio"
                            value={option.value}
                        />
                        <span className={styles.indicator} />
                        <span>{option.label}</span>
                    </label>
                ))}
            </div>
        </fieldset>
    );
};
