interface ITextInput {
  id?: string;
  title: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
}

export function TextInput({
  required = true,
  title,
  type = "text",
  placeholder,
  id,
  pattern,
  value,
}: ITextInput) {
  return (
    <div className="w-full flex relative flex-col gap-1">
      <label className="font-semibold text-xs text-gray-400 ">{title}</label>
      <input
        id={id}
        type={type}
        className="border rounded-lg px-3 py-2 mb-0 text-sm w-full outline-none focus:border-primary-500"
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        required={required}
      />
    </div>
  );
}
