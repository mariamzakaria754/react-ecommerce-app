import { Minus, Plus } from "lucide-react";

function QuantityControl({ quantity, onIncrease, onDecrease }) {
  return (
    <div
      className="
        inline-flex

        items-center

        h-11

        rounded-xl

        border
        border-gray-300

        bg-white

        shadow-sm

        overflow-hidden
      "
    >
      {/* minus */}
      <button
        type="button"
        onClick={onDecrease}
        className="
          w-11
          h-full

          flex
          items-center
          justify-center

          text-gray-600

          hover:bg-gray-50
          hover:text-black

          transition
        "
      >
        <Minus size={16} />
      </button>

      {/* value */}
      <div
        className="
          w-12

          h-full

          flex
          items-center
          justify-center

          text-sm
          font-semibold

          text-gray-900

          border-x
          border-gray-200
        "
      >
        {String(quantity).padStart(2, "0")}
      </div>

      {/* plus */}
      <button
        type="button"
        onClick={onIncrease}
        className="
          w-11
          h-full

          flex
          items-center
          justify-center

          text-gray-600

          hover:bg-[#DB4444]
          hover:text-white

          transition
        "
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

export default QuantityControl;
