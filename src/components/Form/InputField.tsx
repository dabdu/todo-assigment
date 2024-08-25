import React from "react";
import { Controller } from "react-hook-form";
interface InputProps {
  control: any;
  name: string;
  rules?: object;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  isTrim?: boolean;
  isTodo?: boolean;
}

const InputField: React.FC<InputProps> = ({
  control,
  rules,
  label,
  type,
  name,
  placeholder,
  autoComplete,
  isTrim,
  isTodo,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className="w-full">
          <label className="block text-xs font-medium text-gray-900">
            {label}
          </label>
          <input
            type={type ? type : "text"}
            placeholder={placeholder}
            value={isTrim ? value?.trim() : value}
            onChange={onChange}
            autoComplete={autoComplete}
            className={`bg-slate-100 mt-1 block w-full py-2 px-3 ${
              isTodo ? "rounded-l-md" : "rounded-md"
            } text-slate-900 placeholder:text-slate-500 text-xs border ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && (
            <small className="text-red-500 self-stretch">
              {error.message || "Error"}
            </small>
          )}
        </div>
      )}
    />
  );
};

export default InputField;
