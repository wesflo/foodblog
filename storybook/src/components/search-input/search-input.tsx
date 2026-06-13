import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Search, X, iconDefaults } from '@wesflo/ui/icons';

import { Button } from '../button/button';
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
            leadingIcon={<Search {...iconDefaults} />}
            onChange={handleChange}
            type="search"
            value={currentValue}
            {...(message ? { message } : {})}
            {...(status ? { status } : {})}
            {...(currentValue
                ? {
                      trailingAction: (
                          <Button
                              aria-label="Clear search"
                              iconOnly
                              onClick={handleClear}
                              size="small"
                              title="Clear search"
                              variant="ghost"
                          >
                              <X {...iconDefaults} />
                          </Button>
                      ),
                  }
                : {})}
            {...props}
        />
    );
};
