import { FaUserAlt, FaEnvelope, FaKey } from "react-icons/fa";

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  onChange,
  value,
  required = true,
  minLength,
  autocomplete = "given-name",
}) => {
  return (
    <div className="">
      <label htmlFor={id} className="text-slate-800 font-mono font-bold">
        {label}:
      </label>
      <div className="flex items-center space-x-1 relative w-full py-1 px-3 rounded border border-blue-600 bg-gray-50">
        {(() => {
          if (id === "firstName" || id === "lastName") {
            return <FaUserAlt color="#333" className="text-lg" />;
          } else if (id === "email") {
            return <FaEnvelope color="#333" className="text-xl" />;
          } else if (id === "password") {
            return <FaKey color="#333" className="text-xl" />;
          } else {
            return null;
          }
        })()}

        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className="w-full py-1 bg-gray-50 text-gray-800 px-2 focus:outline-none"
          required={required}
          value={value}
          onChange={onChange}
          autoComplete={autocomplete}
          minLength={minLength}
        />
      </div>
    </div>
  );
};
export default InputField;
