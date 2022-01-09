import { Transition } from "@headlessui/react";
import { useCallback, useState } from "react";

export const CompletePaymentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isCircleStart, setCircleStart] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <div>
      <button onClick={handleOpenModal} className="py-3 w-[90%] text-white bg-green-500 rounded-lg">
        BUY NOW
      </button>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="inline-block overflow-hidden absolute top-20 -right-5 left-5 z-10 p-5 text-left text-white align-middle bg-green-500 rounded-2xl shadow-xl transition-all transform">
          <h3 className="text-lg font-semibold leading-6 text-center text-white">Payment successful</h3>
          <div className="mt-2">
            <p className="text-sm text-white">
              Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
              order.
            </p>
          </div>

          <button
            className="inline-flex justify-center pt-4 text-lg text-center text-blue-700 hover:text-blue-300 rounded-md border border-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus:outline-none"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </Transition>
    </div>
  );
};
