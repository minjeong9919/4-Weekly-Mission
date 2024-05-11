import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ToastProvider } from "@/contexts/ToastContext";
import Portal from "@/components/common/Portal";
import ToastPortalContent from "@/components/common/ToastPortalContent";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps}/>
      <Portal>
        <ToastPortalContent />
      </Portal>
    </ToastProvider>
  );
}
