import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { CloseIcon, SearchIcon } from '../../utilities/icons';
import { IconButton } from '../icon-button/icon-button';
import { Input } from '../input/input';
import type { InputProps } from '../input/input';

export type SearchInputProps = Omit<InputProps, 'type' | 'leadingIcon' | 'trailingAction'> & {
    onClear?: () => void;
};

export const SearchInput = ({
    value,
    defaultValue,
    onChange,
    onClear,
    message,
    status,
    ...props
}: SearchInputProps) => {
    const [internalValue, setInternalValue] = useState(defaultValue ? String(defaultValue) : '');
    const currentValue = value !== undefined ? String(value) : internalValue;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInternalValue(event.target.value);
        onChange?.(event);
    };

    const handleClear = () => {
        setInternalValue('');
        onClear?.();
    };

    return (
        <Input
            leadingIcon={<SearchIcon />}
            onChange={handleChange}
            type="search"
            value={currentValue}
            {...(message ? { message } : {})}
            {...(status ? { status } : {})}
            {...(currentValue
                ? {
                      trailingAction: (
                          <IconButton
                              icon={<CloseIcon />}
                              label="Clear search"
                              onClick={handleClear}
                              size="small"
                              variant="ghost"
                          />
                      ),
                  }
                : {})}
            {...props}
        />
    );
};
