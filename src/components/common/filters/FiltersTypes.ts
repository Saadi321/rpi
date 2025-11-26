export interface FilterOption {
    label: string;
    value: string;
}

export interface FiltersProps {
    options: FilterOption[];
    selected: string;
    onChange: (value: string) => void;
}
