import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CrossIcon from "../../../shared/libs/custom icons/CrossIcon";

const Modal = ({
  setIsOpen,
  isOpen,
  children,
  header,
  bgColor = "solidWhite",
}) => {
  return (
    <div>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsOpen(false)}
          >
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-${bgColor} py-7 px-5 text-left align-middle shadow-xl transition-all`}
                  >
                    <div className="flex justify-between items-center pb-5">
                      <h2 className="text-xl font-semibold ">{header}</h2>

                      <button
                        className="cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        <CrossIcon />
                      </button>
                    </div>
                    {children}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default Modal;
