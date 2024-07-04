import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default MyApp;
