import { CgSpinner } from "react-icons/cg";

export function Button({ type, icon, loading, text, classNames, onClick }) {
    return (
      <>
        <button
          type={type ?? "button"}
          className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium shadow-sm sm:ml-0  sm:text-sm disabled:opacity-60 focus:outline-none ${classNames}`}
          onClick={onClick}
          disabled={loading}
        >
          {icon ?? ""}
          {text}
        </button>
      </>
    );
  }
  export function LoadingButton({ classNames }) {
    return (
      <>
        <button
          type="button"
          disabled
          className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium shadow-sm sm:ml-0 sm:text-sm disabled:opacity-90 ${classNames}`}
        >
          <CgSpinner className="w-5 h-5 mr-2 -ml-1 text-white animate-spin"></CgSpinner>
          Loading...
        </button>
      </>
    );
  }