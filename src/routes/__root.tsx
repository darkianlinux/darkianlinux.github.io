import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteLayout } from "../components/SiteLayout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary mono">404</h1>
        <h2 className="mt-4 text-xl font-semibold">segmentation fault</h2>
        <p className="mt-2 text-sm text-muted-foreground mono">
          ~$ cd {"<page>"} : no such file or directory
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            cd ~/
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">kernel panic</h1>
        <p className="mt-2 text-sm text-muted-foreground mono">{error.message}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            retry
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DARKIAN — The OS for Ethical Hackers" },
      { name: "description", content: "DARKIAN is a fast, dark Linux distribution built for penetration testers, ethical hackers and security researchers. For educational purposes only." },
      { property: "og:title", content: "DARKIAN — The OS for Ethical Hackers" },
      { property: "og:description", content: "DARKIAN is a fast, dark Linux distribution built for penetration testers, ethical hackers and security researchers. For educational purposes only." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "DARKIAN — The OS for Ethical Hackers" },
      { name: "twitter:description", content: "DARKIAN is a fast, dark Linux distribution built for penetration testers, ethical hackers and security researchers. For educational purposes only." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/82e70dbf-6f0c-4d9b-aeb1-585db73881ec/id-preview-758a9e7a--186ef44f-b6cb-4648-a9c3-0255c08a5c8d.lovable.app-1778174821111.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/82e70dbf-6f0c-4d9b-aeb1-585db73881ec/id-preview-758a9e7a--186ef44f-b6cb-4648-a9c3-0255c08a5c8d.lovable.app-1778174821111.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
