import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ToastProvider } from "@/contexts/ToastContext";
import Portal from "@/components/common/Portal";
import ToastPortalContent from "@/components/common/ToastPortalContent";
import { ModalProvider } from "@/contexts/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <ModalProvider>
        <Component {...pageProps}/>
        <Portal>
          <ToastPortalContent />
        </Portal>
      </ModalProvider>
    </ToastProvider>
  );
}
